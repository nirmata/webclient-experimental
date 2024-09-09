import { Search, Select, config } from '../../componentsV2';
import { SearchOutlined } from '@ant-design/icons';
import { FC, useEffect } from 'react';
import styled from 'styled-components';
import CountLabel from '../../../components/table/count-label';
import { TRepositoriesResponse } from '../../repository-table';
import useQuery from '../../connector/use-query';

const FilesFiltersWrapperStyles = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .repository__count {
    color: ${config.token.basicTextColor};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: ${config.token.basicFontWeight};
    line-height: 1.375rem;
    opacity: 0.88;
  }
`;

const FilesFiltersStyles = styled('div')`
  display: flex;
  gap: 0.5rem;
`;
// Need to create a separate file with such options and import this information from there
export const StatusOptions = [
  { value: 'error', label: 'Error' },
  { value: 'fail', label: 'Fail' },
  { value: 'pass', label: 'Pass' },
  { value: 'skip', label: 'Skip' },
  { value: 'warn', label: 'Warn' }
];

interface FilesFiltersProps {
  total?: number;
  handleSearch: (searchQuery: string) => Promise<void>;
  loading?: boolean;
  repo: string;
  hasFilters?: boolean;
  filteredCount?: number;
  handleFileTypeFilter: any;
  handleStatusFilter: any;
  defaultStatus?: string[]
}

export const FilesFilters: FC<FilesFiltersProps> = (props) => {
  const { total, loading, handleSearch, hasFilters, filteredCount, handleFileTypeFilter, handleStatusFilter, defaultStatus , repo} = props;

  const [{ data: FileTypeList, loading: loadingFileTypeList }, { onLoad: onLoadFileTypeList }] =
    useQuery<TRepositoriesResponse>();

  const FileTypeListEntries = FileTypeList?.entries;
  const FileTypeOptions = FileTypeListEntries?.map((item: any) => ({
    label: item._id?.['resource-type'],
    value: item._id?.['resource-type']
  }));

  useEffect(() => {
    onLoadFileTypeList(
      `http://localhost:9010/policies/api/policyResultsSummary?filter=labels.policies.nirmata.io/source-type,eq,git-repository&groupby=labels.policies.nirmata.io/resource-type&filter=labels.policies.nirmata.io/source-id,eq,${repo}`
    );
  }, []);

  return (
    <FilesFiltersWrapperStyles>
      <FilesFiltersStyles>
        <Search
          onSearch={handleSearch}
          placeholder='Search Files'
          type='text'
          style={{ minWidth: '22.5rem' }}
          prefix={<SearchOutlined style={{ opacity: 0.45 }} />}
        />
        <Select
          mode='multiple'
          style={{ width: '100%', maxWidth: 'fit-content', minWidth: '10rem' }}
          placeholder='File Type'
          optionLabelProp='label'
          loading={loadingFileTypeList}
          options={FileTypeOptions}
          onChange={handleFileTypeFilter}
        />
        <Select
          mode='multiple'
          style={{ width: '100%', maxWidth: 'fit-content', minWidth: '12.125rem' }}
          placeholder='Status'
          optionLabelProp='label'
          defaultValue={defaultStatus}
          options={StatusOptions}
          onChange={handleStatusFilter}
        />
      </FilesFiltersStyles>
      <CountLabel
        label='Files'
        hasFilters={hasFilters}
        loading={loading}
        filteredCount={filteredCount}
        totalCount={total}
      />
    </FilesFiltersWrapperStyles>
  );
};
