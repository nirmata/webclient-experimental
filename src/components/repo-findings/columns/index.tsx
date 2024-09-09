import { RepoFindingsTableRow } from '../../data';
import { ColumnsType } from 'antd/es/table';
import { getColumnFileProps } from './file';
import { getColumnRepositoryProps } from './repository';
import { getColumnStatusProps } from './status';

export const RepoFindingsColumns: ColumnsType<RepoFindingsTableRow> = [
  getColumnFileProps(),
  getColumnRepositoryProps(),
  getColumnStatusProps(),
];
