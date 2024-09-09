import { MinusOutlined, WarningOutlined } from '@ant-design/icons';
import type { ColumnType } from 'antd/es/table';
import styled from 'styled-components';
import { FileTableRow } from '../../componentsV2/types';
import { config } from '../../componentsV2';

const StyledColumn = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${config.token.colorWarning};
`;
export const getColumnWarningProps = (): ColumnType<FileTableRow> => ({
  key: 'result.warn',
  title: 'Warning',
  dataIndex: 'warning',
  width: '7.175rem',
  sorter: true,
  render: (title) => {
    return title ? (
      <StyledColumn>
        <WarningOutlined style={{ color: config.token.colorWarning }} />
        {title}
      </StyledColumn>
    ) : (
      <MinusOutlined style={{ margin: '0 auto', display: 'block', maxWidth: '1.25rem' }} />
    );
  },
});

