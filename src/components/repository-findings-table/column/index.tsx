import { ColumnsType } from "antd/es/table";
import { getColumnFailedProps } from "./failed";
import { getColumnFilesProps } from "./files";
import { getColumnFileTypesProps } from "./filetypes";
import { getColumnPassedProps } from "./passed";
import { getColumnFindingsProps } from "./findings";
import { FindingDataTableRow } from '../../../components/componentsV2/types';

const ImpactColumns = [
  {
    title: 'Impact',
    children: [
      getColumnFileTypesProps(),
      getColumnFilesProps(),
    ]
  }
]

const StatusColumns = [
  {
    title: 'Status',
    children: [
      getColumnPassedProps(),
      getColumnFailedProps(),
    ]
  }
]

export const FindingColumns: ColumnsType<FindingDataTableRow> = [
  getColumnFindingsProps(),
  ...ImpactColumns,
  ...StatusColumns,
];