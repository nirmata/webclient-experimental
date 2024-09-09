import { CheckCircleOutlined, MinusOutlined } from '@ant-design/icons';
import type { ColumnType } from 'antd/es/table';
import styled from 'styled-components';
import { config } from '../../../components/componentsV2';
import { RepRealDataTableRow } from '../../../components/componentsV2/types';

const StyledColumn = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${config.token.colorSuccess};
`;

export const getColumnPassedProps = (): ColumnType<RepRealDataTableRow> => ({
  key: 'result.pass',
  title: 'Passed',
  dataIndex: 'passed',
  width: '8rem',
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

  // fixed: 'left',
  // align: 'center',

  // showSorterTooltip: true,
  // sortDirections: ['ascend', 'descend'],

  // onFilter: (value: any, record) => record.status.includes(value),
  // sorter: (a: TableRow, b: TableRow) => b.status.localeCompare(a.status),
  // render: text => <Text color={nirmataColors.orange}>{text}</Text>,
});
