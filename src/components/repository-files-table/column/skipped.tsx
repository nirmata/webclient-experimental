import { FileTableRow } from '../../componentsV2/types';
import { config } from '../../componentsV2';
import { MinusCircleOutlined, MinusOutlined } from '@ant-design/icons';
import type { ColumnType } from 'antd/es/table';
import styled from 'styled-components';

const StyledColumn = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${config.token.colorSkipped};
`;
export const getColumnSkippedProps = (): ColumnType<FileTableRow> => ({
  key: 'result.skip',
  title: 'Skipped',
  dataIndex: 'skipped',
  width: '7.175rem',
  sorter: true,
  render: (title) => {
    return title ? (
      <StyledColumn>
        <MinusCircleOutlined />
        {title}
      </StyledColumn>
    ) : (
      <MinusOutlined style={{ margin: '0 auto', display: 'block', maxWidth: '1.25rem' }} />
    );
  },
});
