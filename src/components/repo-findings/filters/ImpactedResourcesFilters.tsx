import { FC, useEffect } from 'react';
import { Select, config } from '../../../components/componentsV2';
import { SearchOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { TRepositoriesResponse } from '../../repository-table';
import useQuery from '../../../components/connector/use-query';
import Search from '../../../components/componentsV2/search';

interface ImpactedResourcesFiltersProps {
  total: number;
  repo: string;
  fileTypes: string[];
  repositoryNames:  {
    label: any;
    value: any;
}[] | undefined;
  statuses: string;
  onFilterChange: (selectedFileTypes: any) => void;
  onRepositoryChange: (selectedRepositoryNames: any) => void;
  onStatusChange: (selectedStatuses: any) => void;
  onSearch: (searchText: string) =>void;
}

export const ImpactedResourcesFilters: FC<ImpactedResourcesFiltersProps> = ({
  total,
  onFilterChange,
  onStatusChange,
  onSearch,
  statuses,
  repo
  
}) => {
  const [{ data: FileTypeList, loading: loadingFileTypeList }, { onLoad: onLoadFileTypeList }] =
    useQuery<TRepositoriesResponse>();
  
  const FileTypeListEntries = FileTypeList?.entries;
  const FileTypeOptions = FileTypeListEntries?.map((item: any) => ({
    label: item._id?.['resource-type'],
    value: item._id?.['resource-type']
  }));
  FileTypeOptions?.push({label: 'All File Types', value: ''})

  const baseUrl =
    `http://localhost:9010/policies/api/policyResultsSummary?filter=labels.policies.nirmata.io/source-type,eq,git-repository&groupby=labels.policies.nirmata.io/resource-type&filter=labels.policies.nirmata.io/source-id,eq,${repo}`;
  useEffect(() => {
    onLoadFileTypeList(baseUrl);
  }, []);

  const handleSelectionChange = (selected: any) => {
    onFilterChange(selected);
  };
  
  const StatusOptions = [
    { value: 'error', label: 'Error' },
    { value: 'fail', label: 'Fail' },
    { value: 'pass', label: 'Pass' },
    { value: 'skip', label: 'Skip' },
    { value: 'warn', label: 'Warn' },
    { value: '', label: 'All Statuses' },
  ];

  const generateSelectOptions = (options: { value: string; label: string; }[]) => options.map(option => ({ label: option.label, value: option.value }));

  return (
    <ImpactedResourcesFiltersWrapperStyles>
      <ImpactedResourcesFiltersStyles>
        <Search
          placeholder="Search Impacted Files"
          type="text"
          style={{ minWidth: '22.5rem' }}
          onSearch={onSearch}
          prefix={<SearchOutlined style={{ opacity: 0.45 }} />}
        />

        <Select
          // mode="multiple"
          style={{ width: '100%', maxWidth: 'fit-content', minWidth: '10rem' }}
          placeholder="Filter File Type"
          optionLabelProp="label"
          options={FileTypeOptions}
          onChange={handleSelectionChange}
          defaultValue={''}
          loading={loadingFileTypeList}
        />

        <Select
          // mode="multiple"
          style={{ width: '100%', maxWidth: 'fit-content', minWidth: '10rem' }}
          placeholder="Filter by Status"
          optionLabelProp="label"
          defaultValue={statuses}
          options={generateSelectOptions(StatusOptions)}
          onChange={onStatusChange}
        />
      </ImpactedResourcesFiltersStyles>
      <span className="resources__count">{total} Impacted Files</span>
    </ImpactedResourcesFiltersWrapperStyles>
  );
};

const ImpactedResourcesFiltersWrapperStyles = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  .resources__count {
    color: ${config.token.basicTextColor};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: ${config.token.basicFontWeight};
    line-height: 1.375rem;
    opacity: 0.88;
  }
`;

const ImpactedResourcesFiltersStyles = styled('div')`
  display: flex;
  gap: 0.5rem;
`;
