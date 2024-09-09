import styled from 'styled-components';
import useQuery from '../connector/use-query';
import { FC, useEffect, useRef, useState } from 'react';
import { Table } from '../componentsV2/Table';
import { RepColumns } from './column';
import { RepositoriesFilters } from './filters';
import { convertJsonToRows } from '../hooks/convertJsonToRows';
import { TableProps } from 'antd';
import { SorterResult } from 'antd/es/table/interface';
import { RepRealDataTableRow } from '../../components/componentsV2/types';

const RepositoriesContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export type TRepositoriesResponse = {
  total: number;
  entries: TRepoEntry[];
  start: number;
  count: number;
};

export type TRepoEntry = {
  _id: Id;
  result: TResult;
  'resource-type': TResourceType;
  'resource-id': {[key:string]:number}
  grade?: string;
};

export type Id = {
  'source-id': string;
};

export type TResult = {
  pass?: number;
  fail?: number;
  warning?: number;
  error?: number;
  skipped?: number;
};

export type TResourceType = {
  Dockerfile?: number;
  dockerfile?: number;
};

export const Repositories: FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasFilters, setHasFilters] = useState(true);

  const [{ data, loading }, { onLoad }] = useQuery<TRepositoriesResponse>();
  const filtersRef = useRef<{
    pagination: { start: string };
    sortBy?: { key: string; order: string };
    sourceId?: { operator: string; value: string };
    resourceType?: { operator: string; value: string[] };
  }>({
    pagination: { start: '0' },
    sortBy: { key: 'result.fail', order: 'desc' }
  });
  let repoData;
  const baseUrl =
    'http://localhost:9010/policies/api/policyResultsSummary?filter=labels.policies.nirmata.io/source-type,eq,git-repository&groupby=labels.policies.nirmata.io/source-id&impact=labels.policies.nirmata.io/resource-type,labels.policies.nirmata.io/resource-id';
  const pageSize = 10;
  const filteredCount = data?.entries?.length ?? 0;
  const totalCount = data?.total ?? 0;


  const resetPagination = () => {
    setCurrentPage(1);
    filtersRef.current.pagination = { start: '0' };
  };

  const handleSearch = async (searchQuery: string) => {
    resetPagination();
    filtersRef.current.sourceId = { operator: 'contains', value: searchQuery ?? '' };
    await buildUrlAndFetch();
  };

  const handleFileTypeFilter = async (resourceTypes?: string[]) => {
    resetPagination();
    filtersRef.current.resourceType = { operator: 'in', value: resourceTypes ?? [] };
    await buildUrlAndFetch();
  };

  const handleChange: TableProps<RepRealDataTableRow>['onChange'] = async (pagination, _, sorter) => {
    const { columnKey, order } = sorter as SorterResult<RepRealDataTableRow>;
    const currentPage = pagination.current ?? 0;
    const start = String((currentPage - 1) * pageSize);
    setCurrentPage(currentPage);

    if (filtersRef && order)
      filtersRef.current.sortBy = { key: columnKey as string, order: order === 'ascend' ? 'asc' : 'desc' };
    if (filtersRef && start) filtersRef.current.pagination = { start };

    await buildUrlAndFetch();
  };

  useEffect(() => {
    buildUrlAndFetch().catch((e) => console.error(e));
  }, []);

  const buildUrlAndFetch = async () => {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('paginate', 'true');
    urlSearchParams.set('start', filtersRef.current.pagination.start);
    urlSearchParams.set('count', String(pageSize));
    urlSearchParams.set('grade', 'true');
    filtersRef.current.sortBy?.key &&
      urlSearchParams.set('sort', `${filtersRef.current.sortBy.key},${filtersRef.current.sortBy.order}`);

    let url = `${baseUrl}&${urlSearchParams.toString()}`;

    if (filtersRef.current.sourceId?.value.length) {
      url = `${url}&filter=labels.policies.nirmata.io/source-id,${filtersRef.current.sourceId.operator},${filtersRef.current.sourceId.value}`;
    }

    if (filtersRef.current.resourceType?.value.length) {
      const clusterIds = filtersRef.current.resourceType.value.reduce(
        (acc, curr) => (Boolean(acc) ? `${acc};${curr}` : curr),
        ''
      );
      url = `${url}&filter=labels.policies.nirmata.io/resource-type,${filtersRef.current.resourceType.operator},${encodeURIComponent(
        `[${clusterIds}]`
      )}`;
    }

    if (Boolean(filtersRef.current.sourceId?.value)) setHasFilters(true);
    else setHasFilters(false);

    await onLoad(url);
  };

  if (!loading) repoData = convertJsonToRows(data);
  return (
    <RepositoriesContentStyles>
      <RepositoriesFilters
        handleSearch={handleSearch}
        totalCount={totalCount}
        loading={loading}
        hasFilters={hasFilters}
        filteredCount={filteredCount}
        handleFileTypeChange={handleFileTypeFilter}
      />
      <Table
        pagination={{
          current: currentPage,
          defaultPageSize: pageSize,
          total: data?.total ?? 0,
          showSizeChanger: false
        }}
        size='large'
        columns={RepColumns}
        dataSource={repoData}
        loading={loading}
        onChange={handleChange}
      />
    </RepositoriesContentStyles>
  );
};
