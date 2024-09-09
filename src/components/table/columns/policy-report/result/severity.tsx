import TMayBe from '../../../../connector/TMayBe';
import Severity from '../../../../policy-report/severity';
import { ColumnType } from '../../../types';

// const sortValue: Record<string, number> = {
//   critical: 4,
//   high: 3,
//   medium: 2,
//   low: 1,
//   unknown: 0,
// };

const severityColumn: ColumnType<any> = {
  dataIndex: 'severity',
  key: 'severity',
  title: 'Severity',
  render: (severity: TMayBe<string>) => <Severity severity={severity} />
};

export default severityColumn;
