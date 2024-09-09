import { CheckCircleOutlined, MinusOutlined } from '@ant-design/icons';
import type { ColumnType } from 'antd/es/table';
import styled from 'styled-components';
import { FindingDataTableRow } from '../../../components/componentsV2/types';
import { config } from '../../../components/componentsV2';

const StyledColumn = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${config.token.colorSuccess};
`;

export const getColumnPassedProps = (): ColumnType<FindingDataTableRow> => ({
  key: 'result.pass',
  title: 'Passed',
  dataIndex: 'passed',
  width: '10.5rem',
  sorter: true,

  render: (title,record) => {
    return title ? (
      <StyledColumn>
        <CheckCircleOutlined style={{ color: config.token.colorSuccess }} />
        {Math.round((Number(record.passed)/(record.totalPassed))*100)} %
      </StyledColumn>
    ) : (
      <MinusOutlined style={{ margin: '0 auto', display: 'block', maxWidth: '1.25rem' }} />
    );
  },
});
