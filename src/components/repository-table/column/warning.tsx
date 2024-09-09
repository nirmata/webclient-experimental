import { MinusOutlined, WarningOutlined } from '@ant-design/icons';
import type { ColumnType } from 'antd/es/table';
import styled from 'styled-components';
import { config } from '../../../components/componentsV2';
import { RepRealDataTableRow } from '../../../components/componentsV2/types';


const StyledColumn = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${config.token.colorWarning};
`;
export const getColumnWarningProps = (): ColumnType<RepRealDataTableRow> => ({
  key: 'result.warn',
  title: 'Warning',
  dataIndex: 'warning',
  width: '8rem',
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

