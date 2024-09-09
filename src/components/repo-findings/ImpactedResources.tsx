import { Table } from '../../components/componentsV2';
import styled from 'styled-components';
import { ImpactedResourcesFilters } from './filters';
import { RepoFindingsColumns } from './columns';
import { useLocation } from 'react-router-dom';
import useQuery from '../../components/connector/use-query';
import { Labels, TImpactedResourceResponse } from './types';
import { useEffect, useRef, useState } from 'react';
import { TableProps } from 'antd';
import { SorterResult } from 'antd/es/table/interface';
import { ImpactedResourceEntry } from './types';

const fileTypes = ['Docker', 'Kubernetes'];

interface TImpactedResourceRow {
  key: string;
  file: string;
  repository: string;
  repositoryLink?:string;
  repositoryBranch?:string;
  repositoryFile?:string;
  status: string;
  filetype: string;
}

export function extractRepoName(githubUrl: string): string | null {
  // Split the URL by '/'
  const parts = githubUrl.split('/');
  // Get the last part of the URL which contains the repository name
  const lastPart = parts[parts.length - 1];
  // Remove the '.git' extension if present
  const repoName = lastPart.endsWith('.git') ? lastPart.slice(0, -4) : lastPart;
  return repoName || null;
}
function transformData(input: TImpactedResourceResponse ): TImpactedResourceRow[] {
  const output: TImpactedResourceRow[] = [];
  input.entries.forEach((entry, index) => {
      const key = (index + 1).toString();
      const file = getFile(entry.id);
      const repository = getRepository(entry.labels);
      const repositoryLink = entry.labels['policies.nirmata.io/source-id'];
      const repositoryBranch= entry.labels['git.policies.nirmata.io/branch'];
      const repositoryFile = entry.labels['policies.nirmata.io/resource-id'];
      const status = entry.result;
      const filetype = getFileType(entry.labels);
      output.push({ key, file, repository, repositoryLink, repositoryBranch, repositoryFile, status, filetype });
  });
  return output;
}

function getFile(id: string): string {
  const parts = id.split('/');
  return `.../${parts[parts.length - 2]}/${parts[parts.length - 1]}`;
}

function getRepository(labels: Labels): string {
  return extractRepoName(labels['policies.nirmata.io/source-id'])+'/'+ labels['git.policies.nirmata.io/branch'] || '';
}

function getFileType(labels: Labels): string {
  const resourceType = labels['policies.nirmata.io/resource-type'];
  return resourceType === 'dockerfile' ? 'Docker' : 'Kubernetes';
}

export const ImpactedResources = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [_, setHasFilters] = useState(true);

 
  
  // const [{data,loading},{onLoad}]= useQuery<TImpactedResourceResponse>();
  const [data, setRepositoryData] = useState<TImpactedResourceResponse>();
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const branchName =searchParams.get('branch');
  const repo = searchParams.get('repo');
  const policy = searchParams.get('policy');
  const rule = searchParams.get('rule');
  const severity = searchParams.get('severity');
  const labelSelectors : string[] = [`policies.nirmata.io/source-type=git-repository`,`policies.nirmata.io/source-id=${repo}`];
  const baseUrl = `policies/api/PolicyReportResult?filter=rule,eq,${rule}&filter=policy,eq,${policy}&filter=severity,eq,${severity}`;
  const filtersRef = useRef<{
    pagination: { start: string };
    sortBy?: { key: string; order: string };
    resource?: { operator: string; value: string };
    status?: { operator: string; value: string};
    fileType?: { operator: string; value: string};
    file?: {operator: string; value: string};
  }>({
    pagination: { start: '0' },
    sortBy: { key: 'result.fail', order: 'desc' },
    status: { operator: 'eq', value: 'fail' }


  });
  const RepoNameOptions = data?.entries?.map((item: ImpactedResourceEntry) => ({
    label: extractRepoName(item.labels['policies.nirmata.io/source-id']),
    value: item.labels['policies.nirmata.io/source-id'],
  }));


  let repoFindingsData;
  const pageSize = 10;
  // const filteredCount = data?.entries?.length ?? 0;
  const totalCount = data?.total ?? 0;

  const resetPagination = () => {
    setCurrentPage(1);
    filtersRef.current.pagination = { start: '0' };
  };

  const buildUrlAndFetch = async () => {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.set('paginate', 'true');
    urlSearchParams.set('start', filtersRef.current.pagination.start);
    urlSearchParams.set('count', String(pageSize));
    filtersRef.current.sortBy?.key &&
      urlSearchParams.set('sort', `${filtersRef.current.sortBy.key},${filtersRef.current.sortBy.order}`);

    let url = `${baseUrl}`;
    if (filtersRef.current.status?.value.length) {
      // const statuses = filtersRef.current.status.value.reduce(
      //   (acc, curr) => (Boolean(acc) ? `${acc};${curr}` : curr),
      //   ''
      // );
      url = `${url}&filter=result,${filtersRef.current.status.operator},${encodeURIComponent(`${filtersRef.current.status?.value}`)}`;

    }
    if (filtersRef.current.file?.value.length) {
      url = `${url}&filter=id,${filtersRef.current.file.operator},${filtersRef.current.file.value}`;
    }
    if (filtersRef.current.fileType?.value.length) {
      labelSelectors.push(`policies.nirmata.io/resource-type=${filtersRef.current.fileType?.value}`);
    }
    if(branchName?.length){
      labelSelectors.push(`git.policies.nirmata.io/branch=${branchName}`)
    }
    url = `${url}&labelSelector="`;
    labelSelectors.forEach((item,index)=>{
     if(index < labelSelectors.length-1){
       url = `${url}${item},`;
     }else{
      url = `${url}${item}`;
     }
    })
    url = `${url}"`

    url = `${url}&${urlSearchParams.toString()}`;

    // if (filtersRef.current.status?.value.length) {
    //   url = `${url}&filter=result,${filtersRef.current.status.operator},${filtersRef.current.status.value}`;
    // }

  
    if (Boolean(filtersRef.current.resource?.value)) setHasFilters(true);
    else setHasFilters(false);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRepositoryData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    // await onLoad(url);
  };

  const handleChange: TableProps<TImpactedResourceRow>['onChange'] = async (pagination, _, sorter) => {
    const { columnKey, order } = sorter as SorterResult<TImpactedResourceRow>;
    const currentPage = pagination.current ?? 0;
    const start = String((currentPage - 1) * pageSize);
    setCurrentPage(currentPage);

    if (filtersRef && order)
      filtersRef.current.sortBy = { key: columnKey as string, order: order === 'ascend' ? 'asc' : 'desc' };
    if (filtersRef && start) filtersRef.current.pagination = { start };

    await buildUrlAndFetch();
  };

  const handleFileTypeFilterChange = (value: string) => {
    resetPagination();
    filtersRef.current.fileType = { operator: 'eq', value:  value ?? '' };
    buildUrlAndFetch();
  };

  const handleRepositoryChange = () => {};
  const handleSearchTextChange = (searchQuery:string) => {
     resetPagination();
    filtersRef.current.file = { operator: 'contains', value: searchQuery ?? '' };
    buildUrlAndFetch();

  };

  const handleStatusChange = ( value:string ) => {
    resetPagination();
    filtersRef.current.status = { operator: 'cs', value: value };
    buildUrlAndFetch();
  };

  useEffect(()=>{
    buildUrlAndFetch();
  },[])

  if(data) repoFindingsData = transformData(data);

  return (
    <StyledImpactedResources>
      <ImpactedResourcesFilters
        total={totalCount}
        repo={repo??''}
        fileTypes={fileTypes}
        repositoryNames={RepoNameOptions??[]}
        statuses={filtersRef.current.status?.value??''}

        onFilterChange={handleFileTypeFilterChange}
        onRepositoryChange={handleRepositoryChange}
        onStatusChange={handleStatusChange}
        onSearch={handleSearchTextChange}
      />
      <Table 
        pagination={{
        current: currentPage,
        defaultPageSize: pageSize,
        total: data?.total ?? 0,
        showSizeChanger: false
      }}
      size="large" 
      columns={RepoFindingsColumns} 
      dataSource={repoFindingsData??[]} 
      onChange={handleChange}
      />
    </StyledImpactedResources>
  );
};

const StyledImpactedResources = styled.div`
  margin: 1rem;
`;
