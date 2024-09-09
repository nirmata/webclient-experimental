import type { ColumnType } from 'antd/es/table';
import styled from 'styled-components';
import { RepRealDataTableRow } from '../../../components/componentsV2/types';
const StyledColumn = styled('div')`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const getColumnFilesProps = (): ColumnType<RepRealDataTableRow> => ({
  key: 'resource-id',
  title: '# Files',
  dataIndex: 'files',
  width: '8rem',
  sorter: true,

  render: title => (
    <StyledColumn>
      {title}
    </StyledColumn>),
});
