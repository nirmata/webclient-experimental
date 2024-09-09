import { FileTableRow } from '../../componentsV2/types';
import { config } from '../../componentsV2';
import { CheckCircleOutlined, MinusOutlined } from '@ant-design/icons';
import type { ColumnType } from 'antd/es/table';
import styled from 'styled-components';

const StyledColumn = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${config.token.colorSuccess};
`;

export const getColumnPassedProps = (): ColumnType<FileTableRow> => ({
  key: 'result.pass',
  title: 'Passed',
  dataIndex: 'passed',
  width: '7.175rem',
  sorter: true,
  render: (title) => {
    return title ? (
      <StyledColumn>
        <CheckCircleOutlined style={{ color: config.token.colorSuccess }} />
        {title}
      </StyledColumn>
    ) : (
      <MinusOutlined style={{ margin: '0 auto', display: 'block', maxWidth: '1.25rem' }} />
    );
  },
});
