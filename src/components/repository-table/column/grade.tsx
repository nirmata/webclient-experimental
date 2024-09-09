import { KpiGrade, KpiGradeLevel } from '../../../components/componentsV2';
import { RepRealDataTableRow } from  '../../../components/componentsV2/types';
import type { ColumnType } from 'antd/es/table';

export const getColumnGradeProps = (): ColumnType<RepRealDataTableRow> => ({
  key: 'grade',
  title: 'Grade',
  dataIndex: 'grade',
  width: '6rem',
  sorter: true,
  render: (title: string) => {
    return (
      <KpiGrade grade={title as KpiGradeLevel} />
    );
  },
  align: 'center',
});
