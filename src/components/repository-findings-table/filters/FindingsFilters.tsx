import { SearchOutlined } from "@ant-design/icons";
import { FC, useEffect } from "react";
import styled from "styled-components";
import { Search, Select, config } from "../../../components/componentsV2";
import useQuery from '../../connector/use-query';
import { TRepositoriesResponse } from '../../repository-table';
import CountLabel from '../../../components/table/count-label';
// import { useLocation } from "react-router-dom";


const FindingsFiltersWrapperStyles = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .repository__count{
    color: ${config.token.basicTextColor};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: ${config.token.basicFontWeight};
    line-height: 1.375rem;
    opacity: .88;
  }
`

const FindingsFiltersStyles = styled('div')`
    display: flex;
    gap: .5rem;
`;

interface FindingsFiltersProps {
  totalCount?: number;
  files?: number;
  filters?: any;
  hasFilters?: boolean;
  filteredCount?: number;
  handleSearch?: (searchQuery: string) => Promise<void>;
  handleFileTypeChange: any;
  handleSevFilter: any;
  loading?: boolean;
  repo: string;
}


const SeverityOptions = [
  { value: 'critical', label: 'Critical' },
  { value: 'high', label: 'High' },
  { value: 'medium', label: 'Medium' },
  { value: 'low', label: 'Low' },
];

export const SeverityOptionsSortedByName = SeverityOptions.sort((a, b) => {
  return a.label.localeCompare(b.label);
})

export const FindingsFilters: FC<FindingsFiltersProps> = ({
  totalCount,
  handleSearch,
  handleFileTypeChange,
  loading,
  hasFilters,
  filteredCount,
  handleSevFilter,
  repo
}) => {
  const [{ data: FileTypeList, loading: loadingFileTypeList }, { onLoad: onLoadFileTypeList }] =
    useQuery<TRepositoriesResponse>();
  const FileTypeListEntries = FileTypeList?.entries;
  const FileTypeOptions = FileTypeListEntries?.map((item: any) => ({
    label: item._id?.['resource-type'],
    value: item._id?.['resource-type']
  }));

  const baseUrl =
    `http://localhost:9010/policies/api/policyResultsSummary?filter=labels.policies.nirmata.io/source-type,eq,git-repository&groupby=labels.policies.nirmata.io/resource-type&filter=labels.policies.nirmata.io/source-id,eq,${repo}`;
  useEffect(() => {
    onLoadFileTypeList(baseUrl);
  }, []);
  // const { search } = useLocation();
  // const searchParams = new URLSearchParams(search);
  // const initialSeverity = searchParams.get('severity')?.split(',') ?? [];
  const initialSeverity = 'medium';
  return (
    <FindingsFiltersWrapperStyles>
      <FindingsFiltersStyles>
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
          loading={loadingFileTypeList}
          options={SeverityOptionsSortedByName}
          onChange={handleSevFilter}
        />
        <Select
          mode='multiple'
          style={{ width: '100%', maxWidth: 'fit-content', minWidth: '10rem' }}
          placeholder='Filter File Type'
          optionLabelProp='label'
          loading={loadingFileTypeList}
          options={FileTypeOptions}
          onChange={handleFileTypeChange}
        />
      </FindingsFiltersStyles>
      <CountLabel
        label='Findings'
        hasFilters={hasFilters}
        loading={loading}
        filteredCount={filteredCount}
        totalCount={totalCount}
      />
    </FindingsFiltersWrapperStyles>
  );
};
