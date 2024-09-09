import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Pagination } from 'antd';
import { nirmataColors, TableCard } from '../../components/componentsV2';
import usePost from '../../components/connector/use-post';
import { FindingsInfo } from '../../components/componentsV2/types';
import getCookie from '../../components/connector/get-cookie';
import { FilesFindingsFilters } from './filters';
import { useLocation } from 'react-router-dom';
import { subscribe } from 'pusu';
import { fileDetailPageBranchPub } from '../../screens/repository-files-details/FilesDetailPage';

const RepositoriesContentStyles = styled.div`
  padding: 1.5rem 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FindingCardsWrapperStyles = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid ${nirmataColors.grey50};
  background: ${nirmataColors.grey100};
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

type TFilesFindings = {
  totalFileCount?: number;
  _id: {
    message?: string;
    policy?: string;
    rule?: string;
    severity?: string;
    result?: string;
  };
};

const getQueryPayload = (
  repoName: string,
  fileName: string,
  tenantId: string,
  severity?: string[],
  result?: string[],
  message?: string,
  branchName?: string,
) => {
  return [
    {
      $match: {
        'labels.policies_--_nirmata_--_io/source-type': 'git-repository',
        'labels.policies_--_nirmata_--_io/source-id': repoName,
        'labels.policies_--_nirmata_--_io/resource-id': fileName,
        ...(severity?.length && { severity: { $in: severity } }),
        ...(result?.length && { result: { $in: result } }),
        ...(message && { message: { $regex: `.*${message}.*` } }),
        ...(branchName && { 'labels.git_--_policies_--_nirmata_--_io/branch': branchName })
      }
    },
    {
      $group: {
        _id: {
          policy: '$policy',
          rule: '$rule',
          severity: '$severity',
          message: '$message',
          result: '$result'
        }
      }
    },
    {
      $lookup: {
        from: `PolicyReportResult-${tenantId}`,
        let: {
          policy: '$_id.policy',
          rule: '$_id.rule'
        },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  {
                    $eq: ['$labels.policies_--_nirmata_--_io/source-id', repoName]
                  },
                  {
                    $eq: ['$policy', '$$policy']
                  },
                  {
                    $eq: ['$rule', '$$rule']
                  }
                ]
              }
            }
          },
          {
            $group: {
              _id: {
                'resource-id': '$labels.policies_--_nirmata_--_io/resource-id',
                status: '$result'
              },
              count: {
                $sum: 1
              }
            }
          }
        ],
        as: 'filesInRepo'
      }
    },
    {
      $project: {
        totalFileCount: {
          $sum: '$filesInRepo.count'
        },
        severityOrder: {
          $switch: {
            branches: [
              { case: { $eq: ['$_id.severity', 'critical'] }, then: 0 },
              { case: { $eq: ['$_id.severity', 'high'] }, then: 1 },
              { case: { $eq: ['$_id.severity', 'medium'] }, then: 2 },
              { case: { $eq: ['$_id.severity', 'low'] }, then: 3 },
              { case: { $eq: ['$_id.severity', 'info'] }, then: 4 }
            ],
            default: 5 // Set a default value to handle cases not covered in the branches
          }
        }
      }
    },
    {
      $sort: {
        severityOrder: 1
      }
    }
  ];
};

const FilesFindings: FC = () => {
  const baseUrl = '/policies/api/policyResultsQuery?pipeline=true';
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasFilters, setHasFilters] = useState(true);
  const pageSize = 10;

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const initialSeverity = searchParams.get('severity')?.split(',') ?? [];
  const initialBranch = searchParams.get('branch')?.split(',') ?? [];
  const repoName = searchParams.get('repo') ?? '';
  const fileName = searchParams.get('file') ?? '';

  const [{ data, loading }, { onPost }] = usePost<{
    entries: TFilesFindings[];
    total: number;
  }>();

  const dataSource: FindingsInfo[] =
    data?.entries?.map((entry, idx) => ({
      key: idx.toString(),
      finding: entry._id.message ?? '',
      files: entry.totalFileCount?.toString() ?? '0',
      status: entry._id.result ?? '',
      tag: entry._id.severity ?? 'na',
      policy: entry._id.policy,
      rule: entry._id.rule,
    })) ?? [];

  const filteredCount = data?.entries?.length ?? 0;
  const totalCount = data?.total ?? 0;

  const filtersRef = useRef<{
    pagination: { start: string };
    sortBy?: { key: string; order: string };
    message?: { operator: string; value: string };
    status?: { operator: string; value: string[] };
    severity?: { operator: string; value: string[] };
    branchName?: { operator: string; value: string };
    branch?: { operator: string; value: string[] };
  }>({
    pagination: { start: '0' },
    sortBy: { key: 'result.fail', order: 'desc' },
    status: { operator: 'eq', value: ['fail'] },
    severity: { operator: 'eq', value: initialSeverity },
    branch: { operator: 'eq', value: initialBranch },
  });

  const resetPagination = () => {
    setCurrentPage(1);
    filtersRef.current.pagination = { start: '0' };
  };

  const buildUrlAndFetch = async () => {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('paginate', 'true');
    urlSearchParams.set('start', filtersRef.current.pagination.start);
    urlSearchParams.set('count', String(pageSize));

    const severity = filtersRef.current.severity?.value ?? [];
    const status = filtersRef.current.status?.value ?? [];
    const message = filtersRef.current.message?.value ?? '';
    const branchName = filtersRef.current.branchName?.value ?? '';
    const userData = getCookie('nirmata.session.userData');
    const tenantId = (JSON.parse(decodeURIComponent(userData ?? '')) as { tenantId: string }).tenantId;

    let url = `${baseUrl}&${urlSearchParams.toString()}`;

    if (Boolean(message || severity.length || status.length)) setHasFilters(true);
    else setHasFilters(false);

    const payload = getQueryPayload(repoName, fileName, tenantId, severity, status, message, branchName);

    await onPost(url, payload as any);
  };

  const handleSearch = async (searchQuery: string) => {
    resetPagination();
    filtersRef.current.message = { operator: 'contains', value: searchQuery ?? '' };
    await buildUrlAndFetch();
  };

  const handleSevFilter = async (severity?: string[]) => {
    resetPagination();
    filtersRef.current.severity = { operator: 'eq', value: severity ?? [] };
    await buildUrlAndFetch();
  };

  const handleStatusFilter = async (status?: string[]) => {
    resetPagination();
    filtersRef.current.status = { operator: 'eq', value: status ?? [] };
    await buildUrlAndFetch();
  };

  const handlePageChange = async (page: number) => {
    const start = ((page - 1) * pageSize).toString();

    if (start) filtersRef.current.pagination = { start };
    setCurrentPage(page);

    await buildUrlAndFetch();
  };

  useEffect(() => {
    const unsubscribeFileDetailPageBranchPub = subscribe(fileDetailPageBranchPub, ({ branchName }) => {
      filtersRef.current.branchName = { operator: 'eq', value: branchName ? branchName : '' };
      buildUrlAndFetch();
    });

    return () => {
      unsubscribeFileDetailPageBranchPub();
    };
  }, []);

  useEffect(() => {
    buildUrlAndFetch();
  }, []);

  return (
    <RepositoriesContentStyles>
      <FilesFindingsFilters
        statusDefaultValue={filtersRef.current.status?.value}
        total={totalCount}
        filteredCount={filteredCount}
        handleSearch={handleSearch}
        initialSeverity={initialSeverity}
        handleSevFilter={handleSevFilter}
        handleStatusFilter={handleStatusFilter}
        hasFilters={hasFilters}
      />
      <FindingCardsWrapperStyles>
        {dataSource.map((finding) => (
          <TableCard repo={repoName} loading={loading} key={finding.key} info={finding} />
        ))}
      </FindingCardsWrapperStyles>
      <PaginationWrapper>
        <Pagination
          current={currentPage}
          defaultCurrent={1}
          total={totalCount}
          pageSize={pageSize}
          onChange={handlePageChange}
        />
      </PaginationWrapper>
    </RepositoriesContentStyles>
  );
};

export default FilesFindings;
