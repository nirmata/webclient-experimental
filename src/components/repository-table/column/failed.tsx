import { CloseCircleOutlined, MinusOutlined } from '@ant-design/icons';
import type { ColumnType } from 'antd/es/table';
import styled from 'styled-components';
import { config } from '../../../components/componentsV2';
import { RepRealDataTableRow } from '../../../components/componentsV2/types';

const StyledColumn = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${config.token.colorErrorActive};
`;
export const getColumnFailedProps = (): ColumnType<RepRealDataTableRow> => ({
  key: 'result.fail',
  title: 'Failed',
  dataIndex: 'failed',
  width: '8rem',
  sorter: true,

  render: (title) => {
    return title ? (
      <StyledColumn>
        <CloseCircleOutlined style={{ color: config.token.colorErrorActive }} />
        {title}
      </StyledColumn>
    ) : (
      <MinusOutlined style={{ margin: '0 auto', display: 'block', maxWidth: '1.25rem' }} />
    );
  },
});
