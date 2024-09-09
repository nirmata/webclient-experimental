import type { ColumnType } from 'antd/es/table';
import styled from 'styled-components';
import { FileTableRow } from '../../componentsV2/types';

const StyledColumn = styled('div')`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const getColumnFindingsProps = (): ColumnType<FileTableRow> => ({
  key: 'policy:rule',
  title: 'Findings',
  dataIndex: 'findings',
  width: '110px',
  sorter: true,
  render: (title) => (
    <StyledColumn>
      {title}
    </StyledColumn>
  )
});
