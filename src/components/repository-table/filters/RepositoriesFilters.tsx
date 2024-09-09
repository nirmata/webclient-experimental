import styled from 'styled-components';
import useQuery from '../../connector/use-query';
import CountLabel from '../../../components/table/count-label';
import { Select, config, Search } from '../../../components/componentsV2';
import { SearchOutlined } from '@ant-design/icons';
import { FC, useEffect } from 'react';
import { TRepositoriesResponse } from '..';

const RepositoriesFiltersWrapperStyles = styled('div')`
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

const RepositoriesFiltersStyles = styled('div')`
  display: flex;
  gap: 0.5rem;
`;

interface RepositoriesFiltersProps {
  filters?: any;
  hasFilters?: boolean;
  loading?: boolean;
  filteredCount?: number;
  totalCount?: number;
  handleFileTypeChange: any;
  handleSearch: (searchQuery: string) => Promise<void>;
}

export const RepositoriesFilters: FC<RepositoriesFiltersProps> = ({
  handleSearch,
  hasFilters,
  loading,
  filteredCount,
  totalCount,
  handleFileTypeChange
}) => {
  const [{ data: FileTypeList, loading: loadingFileTypeList }, { onLoad: onLoadFileTypeList }] =
    useQuery<TRepositoriesResponse>();
  const FileTypeListEntries = FileTypeList?.entries;
  const FileTypeOptions = FileTypeListEntries?.map((item: any) => ({
    label: item._id?.['resource-type'],
    value: item._id?.['resource-type']
  }));

  const baseUrl =
    'http://localhost:9010/policies/api/policyResultsSummary?filter=labels.policies.nirmata.io/source-type,eq,git-repository&groupby=labels.policies.nirmata.io/resource-type';
  useEffect(() => {
    onLoadFileTypeList(baseUrl);
  }, []);
  return (
    <RepositoriesFiltersWrapperStyles>
      <RepositoriesFiltersStyles>
        <Search
          placeholder='Search Repositories'
          type='text'
          style={{ minWidth: '22.5rem' }}
          onSearch={handleSearch}
          prefix={<SearchOutlined style={{ opacity: 0.45 }} />}
        />
        <Select
          mode='multiple'
          style={{ width: '100%', maxWidth: 'fit-content', minWidth: '10rem' }}
          placeholder='Filter File Type'
          optionLabelProp='label'
          allowClear
          loading={loadingFileTypeList}
          options={FileTypeOptions}
          onChange={handleFileTypeChange}
        />
      </RepositoriesFiltersStyles>
      <CountLabel
        label='Repositories'
        hasFilters={hasFilters}
        loading={loading}
        filteredCount={filteredCount}
        totalCount={totalCount}
      />
    </RepositoriesFiltersWrapperStyles>
  );
};
