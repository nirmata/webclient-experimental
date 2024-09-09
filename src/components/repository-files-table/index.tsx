import { FC, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import { FileTableRow } from '../componentsV2/types';
import { Table } from '../componentsV2/Table';
import { FileColumns } from './column';
import { FilesFilters } from './filters';
import TMayBe from '../connector/TMayBe';
import { TableProps } from 'antd';
import { SorterResult } from 'antd/es/table/interface';
import { subscribe } from 'pusu';
import { fetchRepoBranchFindingsPub } from '../../screens/repository-detail-page/RepositoryDetailPage';

const RepositoriesContentStyles = styled.div`
  padding: 1.5rem 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

type TRepositoryFilesEntry = {
  _id: {
    'resource-id': string;
  };
  'policy:rule': Record<string, number>;
  result?: {
    fail?: number;
    pass?: number;
    error?: number;
    warn?: number;
    skip?: number;
  };
  'resource-type': {
    [key: string]: number;
  };
};

type TRepositoryFilesResponse = {
  entries: TRepositoryFilesEntry[];
  total: number;
};

function processDataSource(input: TMayBe<TRepositoryFilesResponse>): FileTableRow[] {
  const output: FileTableRow[] = [];

  input?.entries?.forEach((entry, index) => {
    output.push({
      key: (index + 1).toString(),
      file: entry._id['resource-id'] ?? '',
      failed: entry.result?.fail?.toString() ?? '0',
      passed: entry.result?.pass?.toString() ?? '0',
      error: entry.result?.error?.toString() ?? '0',
      warning: entry?.result?.warn?.toString() ?? '0',
      skipped: entry?.result?.skip?.toString() ?? '0',
      fileType: Object.keys(entry['resource-type']),
      findings: Object.keys(entry['policy:rule'] ?? {}).length.toString() ?? '0'
    });
  });

  return output;
}

export const Files: FC = () => {
  const pageSize = 10;
  const [data, setData] = useState<TMayBe<TRepositoryFilesResponse>>();

  // const { search } = useLocation();
  // const searchParams = new URLSearchParams(search);
  // const repo = searchParams.get('repo');
  const repo='https://github.com/dtoledo67/payment-service.git';
  const baseUrl = `http://localhost:9010/policies/api/policyResultsSummary?filter=labels.policies.nirmata.io/source-type,eq,git-repository&groupby=labels.policies.nirmata.io/resource-id&impact=policy:rule,labels.policies.nirmata.io/resource-type&filter=labels.policies.nirmata.io/source-id,eq,${repo}`;
  // const [{ dataa, loading }, { onLoad }] = useQuery<TRepositoryFilesResponse>();

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasFilters, setHasFilters] = useState(true);

  const resetPagination = () => {
    setCurrentPage(1);
    filtersRef.current.pagination = { start: '0' };
  };

  const filtersRef = useRef<{
    pagination: { start: string };
    sortBy?: { key: string; order: string };
    resourceId?: { operator: string; value: string };
    resourceType?: { operator: string; value: string[] };
    status?: { operator: string; value: string[] };
    branchName?: { operator: string; value: string };
  }>({
    pagination: { start: '0' },
    sortBy: { key: 'result.fail', order: 'desc' },
    status: { operator: 'in', value: ['fail'] }
  });

  const dataSource = useMemo(() => processDataSource(data), [data?.entries]);
  const filteredCount = data?.entries?.length ?? 0;
  const totalCount = data?.total ?? 0;

  const buildUrlAndFetch = async () => {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('paginate', 'true');
    urlSearchParams.set('start', filtersRef.current.pagination.start);
    urlSearchParams.set('count', String(pageSize));
    filtersRef.current.sortBy?.key &&
      urlSearchParams.set('sort', `${filtersRef.current.sortBy.key},${filtersRef.current.sortBy.order}`);

    let url = `${baseUrl}`

    if (filtersRef.current.resourceId?.value.length) {
      url = `${url}&filter=labels.policies.nirmata.io/resource-id,${filtersRef.current.resourceId.operator},${filtersRef.current.resourceId.value}`;
    }

    if (filtersRef.current.resourceType?.value.length) {
      const resourceTypes = filtersRef.current.resourceType.value.reduce(
        (acc, curr) => (Boolean(acc) ? `${acc};${curr}` : curr),
        ''
      );
      url = `${url}&filter=labels.policies.nirmata.io/resource-type,${
        filtersRef.current.resourceType.operator
      },${encodeURIComponent(`[${resourceTypes}]`)}`;
    }

    if (filtersRef.current.status?.value.length) {
      const resourceTypes = filtersRef.current.status.value.reduce(
        (acc, curr) => (Boolean(acc) ? `${acc};${curr}` : curr),
        ''
      );
      url = `${url}&filter=result,${filtersRef.current.status.operator},${encodeURIComponent(`[${resourceTypes}]`)}`;
    }

    if (filtersRef.current.branchName?.value.length) {
      url = `${url}&filter=labels.git.policies.nirmata.io/branch,${filtersRef.current.branchName.operator},${filtersRef.current.branchName.value}`;
    }

    if (Boolean(filtersRef.current.resourceId?.value)) setHasFilters(true);
    else setHasFilters(false);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    // await onLoad(url);
  };

  const handleChange: TableProps<FileTableRow>['onChange'] = async (pagination, _, sorter) => {
    const { columnKey, order } = sorter as SorterResult<FileTableRow>;
    const currentPage = pagination.current ?? 0;
    const start = String((currentPage - 1) * pageSize);
    setCurrentPage(currentPage);

    if (filtersRef && order)
      filtersRef.current.sortBy = { key: columnKey as string, order: order === 'ascend' ? 'asc' : 'desc' };
    if (filtersRef && start) filtersRef.current.pagination = { start };

    await buildUrlAndFetch();
  };

  const handleSearch = async (searchQuery: string) => {
    resetPagination();
    filtersRef.current.resourceId = { operator: 'contains', value: searchQuery ?? '' };
    await buildUrlAndFetch();
  };

  const handleFileTypeFilter = async (resourceTypes?: string[]) => {
    resetPagination();
    filtersRef.current.resourceType = { operator: 'in', value: resourceTypes ?? [] };
    await buildUrlAndFetch();
  };

  const handleStatusFilter = async (statuses?: string[]) => {
    resetPagination();
    filtersRef.current.status = { operator: 'in', value: statuses ?? [] };
    await buildUrlAndFetch();
  };

  useEffect(() => {
    const unsubscribeFetchRepoBranchFindingsPub = subscribe(fetchRepoBranchFindingsPub, ({ branchName }) => {
      filtersRef.current.branchName = { operator: 'eq', value: branchName ? branchName : '' };
      buildUrlAndFetch();
    });

    return () => {
      unsubscribeFetchRepoBranchFindingsPub();
    };
  }, []);

  useEffect(() => {
    buildUrlAndFetch().catch((e) => console.error(e));
  }, []);

  return (
    <RepositoriesContentStyles>
      <FilesFilters
        filteredCount={filteredCount}
        hasFilters={hasFilters}
        repo={repo??''}
        total={totalCount}
        handleSearch={handleSearch}
        handleFileTypeFilter={handleFileTypeFilter}
        handleStatusFilter={handleStatusFilter}
        defaultStatus={filtersRef.current.status?.value}
      />
      <Table
        pagination={{
          current: currentPage,
          defaultPageSize: pageSize,
          total: data?.total ?? 0,
          showSizeChanger: false
        }}
        size='large'
        columns={FileColumns}
        onChange={handleChange}
        dataSource={dataSource as any as FileTableRow[]}
      />
    </RepositoriesContentStyles>
  );
};
