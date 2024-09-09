import { SearchOutlined } from '@ant-design/icons';
import { FC } from 'react';
import styled from 'styled-components';
import { Search, config, Select } from '../../../components/componentsV2';
import { SeverityOptionsSortedByName } from '../../repository-findings-table/filters/FindingsFilters';
import { StatusOptions } from '../../repository-files-table/filters/FilesFilters';

const FilesFindingsFiltersWrapperStyles = styled('div')`
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

const FilesFindingsFiltersStyles = styled('div')`
  display: flex;
  gap: 0.5rem;
`;

interface FilesFindingsFiltersProps {
  total: number;
  filteredCount?: number;
  filters?: any;
  hasFilters?: boolean;
  handleSearch?: (searchQuery: string) => Promise<void>;
  initialSeverity: string[];
  handleSevFilter?: any;
  handleStatusFilter?: any;
  loading?: boolean;
  statusDefaultValue?: string[]
}

export const FilesFindingsFilters: FC<FilesFindingsFiltersProps> = ({
  total,
  handleSearch,
  initialSeverity,
  handleSevFilter,
  handleStatusFilter,
  statusDefaultValue
}) => {
  return (
    <FilesFindingsFiltersWrapperStyles>
      <FilesFindingsFiltersStyles>
        <Search
          placeholder='Search Findings'
          type='text'
          style={{ minWidth: '22.5rem' }}
          onSearch={handleSearch}
          prefix={<SearchOutlined style={{ opacity: 0.45 }} />}
        />
        <Select
          mode='multiple'
          style={{ width: '100%', maxWidth: 'fit-content', minWidth: '10rem' }}
          placeholder='Severity'
          defaultValue={initialSeverity}
          optionLabelProp='label'
          options={SeverityOptionsSortedByName}
          onChange={handleSevFilter}
        />
        <Select
          mode='multiple'
          style={{ width: '100%', maxWidth: 'fit-content', minWidth: '12.125rem' }}
          placeholder='Status'
          optionLabelProp='label'
          options={StatusOptions}
          onChange={handleStatusFilter}
          defaultValue={statusDefaultValue}
        />
      </FilesFindingsFiltersStyles>
      <span className='repository__count'>{total} Findings</span>
    </FilesFindingsFiltersWrapperStyles>
  );
};
