import styled from 'styled-components';
import { StatusTag } from '../../../components/componentsV2';
import { StatusTagVariant } from '../../../components/componentsV2/Tag/StatusTag';
import { RepoFindingsTableRow } from '../../data';
import type { ColumnType } from 'antd/es/table';

export const getColumnStatusProps = (): ColumnType<RepoFindingsTableRow> => ({
  title: 'Status',
  dataIndex: 'status',
  key: 'result',
  width: '7.5rem',
  showSorterTooltip: false,
  sorter: true,
  align: 'center',
  render: (status: string) => (
    <CellWrapper>
      <StatusTag size="MEDIUM" style={{maxWidth: '6rem'}} variant={status as StatusTagVariant}>
        {status}
      </StatusTag>
    </CellWrapper>
  ),
});

const CellWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

