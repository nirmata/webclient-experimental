import styled from 'styled-components';
import { FC, useEffect, useRef, useState } from 'react';
import { TableProps } from 'antd';
import { SorterResult } from 'antd/es/table/interface';

import { FindingColumns } from './column';
import { Table } from '../../components/componentsV2';
import { FindingsFilters } from './filters';
import { FindingDataTableRow } from '../../components/componentsV2/types';
import { fetchRepoBranchFindingsPub } from '../../screens/repository-detail-page/RepositoryDetailPage';
import { subscribe } from 'pusu';

const RepositoriesContentStyles = styled.div`
  padding: 1.5rem 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

type TRepositoryFindingsEntry = {
  _id: {
    severity: string;
    rule: string;
    message: string;
    policy: string;
  };
  result: {
    fail?: number;
    pass?: number;
  };
  'resource-type': {
    [key: string]: number;
  };
  'resource-id': {
    [key: string]: number;
  };
};

export type TRepositoryFindingsResponse = {
  entries: TRepositoryFindingsEntry[];
  total: number;
};

export type ResourceType = {
  [key: string]: number;
};

function calculateTotalFiles(resourceType: ResourceType): number {
  let totalFiles = 0;
  for (const key in resourceType) {
    if (key in resourceType) {
      totalFiles ++
    }
  }
  return totalFiles;
}

export function processInput(input: TRepositoryFindingsResponse,branchName: string): FindingDataTableRow[] {
  const output: FindingDataTableRow[] = [];
  input?.entries?.forEach((entry, index) => {
    const key = (index + 1).toString();
    const finding = entry._id.message;
    const filetypes = Object.keys(entry['resource-type']);
    const files = calculateTotalFiles(entry['resource-id']).toString();
    const failed = entry.result.fail ? entry.result.fail.toString() : '';
    const passed = entry.result.pass ? entry.result.pass.toString() : '';
    const tag = entry?._id?.severity ?? 'na';
    const policy = entry?._id?.policy;
    const rule = entry?._id?.rule;
    const severity = entry?._id?.severity;
    const totalPassed = Object.values(entry?.['resource-type']).reduce((acc, curr) => acc + curr, 0) ?? '';
    const message = entry?._id?.message;
    output.push({ key, finding, filetypes, files, failed, passed,totalPassed, tag, policy, rule, severity,branchName,message });
  });

  return output;
}

export const Findings: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasFilters, setHasFilters] = useState(true);
  const [data, setData] = useState<TRepositoryFindingsResponse>();
  // const { search } = useLocation();
  // const history = useHistory();
  // const searchParams = new URLSearchParams(search);
  // const repo = searchParams.get('repo');
  const repo='https://github.com/dtoledo67/payment-service.git';

  let repoData;
  const baseUrl = `http://localhost:9010/policies/api/policyResultsSummary?filter=labels.policies.nirmata.io/source-type,eq,git-repository&groupby=policy,rule,severity,message&impact=labels.policies.nirmata.io/resource-type,labels.policies.nirmata.io/resource-id&filter=labels.policies.nirmata.io/source-id,eq,${repo}`;
  const pageSize = 10;
  const filteredCount = data?.entries?.length ?? 0;
  const totalCount = data?.total ?? 0;
  const filtersRef = useRef<{
    pagination: { start: string };
    sortBy?: { key: string; order: string };
    message?: { operator: string; value: string };
    resourceType?: { operator: string; value: string[] };
    severity?: { operator: string; value: string[] };
    branchName?:{ operator: string; value: string };
  }>({
    pagination: { start: '0' },
    sortBy: { key: 'severity', order: 'desc' }
  });

  const resetPagination = () => {
    setCurrentPage(1);
    filtersRef.current.pagination = { start: '0' };
  };

  const handleChange: TableProps<FindingDataTableRow>['onChange'] = async (pagination, _, sorter) => {
    const { columnKey, order } = sorter as SorterResult<FindingDataTableRow>;
    const currentPage = pagination.current ?? 0;
    const start = String((currentPage - 1) * pageSize);
    setCurrentPage(currentPage);

    if (filtersRef && order)
      filtersRef.current.sortBy = { key: columnKey as string, order: order === 'ascend' ? 'asc' : 'desc' };
    if (filtersRef && start) filtersRef.current.pagination = { start };

    await buildUrlAndFetch();
  };

  const buildUrlAndFetch = async () => {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('paginate', 'true');
    urlSearchParams.set('start', filtersRef.current.pagination.start);
    urlSearchParams.set('count', String(pageSize));
    filtersRef.current.sortBy?.key &&
      urlSearchParams.set('sort', `${filtersRef.current.sortBy.key},${filtersRef.current.sortBy.order}`);

    let url = `${baseUrl}`;

    if (filtersRef.current.message?.value.length) {
      url = `${url}&filter=message,${filtersRef.current.message.operator},${filtersRef.current.message.value}`;
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

    if (filtersRef.current.severity?.value.length) {
      const severities = filtersRef.current.severity.value.reduce(
        (acc, curr) => (Boolean(acc) ? `${acc};${curr}` : curr),
        ''
      );
      url = `${url}&filter=severity,${
        filtersRef.current.severity.operator
      },${encodeURIComponent(`[${severities}]`)}`;
    }

    if (filtersRef.current.branchName?.value.length) {
      url = `${url}&filter=labels.git.policies.nirmata.io/branch,${filtersRef.current.branchName.operator},${filtersRef.current.branchName.value}`;
    }

    if (Boolean(filtersRef.current.message?.value)) setHasFilters(true);
    else setHasFilters(false);
    console.log(url + "url");
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

  useEffect(() => {

    const unsubscribeFetchRepoBranchFindingsPub = subscribe(fetchRepoBranchFindingsPub, ({branchName,currentTab}) => {
      if(currentTab==="1"){
        filtersRef.current.branchName = { operator: 'eq', value: branchName? branchName:'' };
        buildUrlAndFetch();
      }
    });

    return () => {
      unsubscribeFetchRepoBranchFindingsPub();
    };
}, []);

  const handleFileTypeFilter = async (resourceTypes?: string[]) => {
    resetPagination();
    filtersRef.current.resourceType = { operator: 'in', value: resourceTypes ?? [] };
    await buildUrlAndFetch();
  };

  const handleSevFilter = async (severity?: string[]) => {
    resetPagination();
   filtersRef.current.severity = { operator: 'in', value: severity ?? [] };
    // const severityValue = severity?.join(',');
    // if (severityValue) {
    //   searchParams.set('severity', severityValue);
    //   history.push({ search: searchParams.toString() });
    // } else {
    //   searchParams.delete('severity');
    //   history.push({ search: searchParams.toString() });
    // }

    await buildUrlAndFetch();
  };

  const handleSearch = async (searchQuery: string) => {
    resetPagination();
    filtersRef.current.message = { operator: 'contains', value: searchQuery ?? '' };
    await buildUrlAndFetch();
  };

  useEffect(() => {
    buildUrlAndFetch().catch((e) => console.error(e));
  }, []);

  if (data) repoData = processInput(data,filtersRef.current.branchName?.value??'');

  return (
    <RepositoriesContentStyles>
      <FindingsFilters
        handleSearch={handleSearch}
        handleFileTypeChange={handleFileTypeFilter}
        handleSevFilter={handleSevFilter}
        hasFilters={hasFilters}
        filteredCount={filteredCount}
        totalCount={totalCount}
        files={300}
        repo={repo ??''}
      />
      <Table
        pagination={{
          current: currentPage,
          defaultPageSize: pageSize,
          total: data?.total ?? 0,
          showSizeChanger: false,
        }}
        size='large'
        columns={FindingColumns}
        dataSource={repoData}
        onChange={handleChange}
      />
    </RepositoriesContentStyles>
  );
};
