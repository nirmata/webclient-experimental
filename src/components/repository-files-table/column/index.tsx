import { FileTableRow } from '../../componentsV2/types';
import { getColumnWarningProps } from "./warning";
import { ColumnsType } from "antd/es/table";
import { getColumnSkippedProps } from "./skipped";
import { getColumnErrorProps } from "./error";
import { getColumnFailedProps } from "./failed";
import { getColumnFileProps } from "./file";
import { getColumnPassedProps } from "./passed";
import { getColumnFindingsProps } from "./findings";

export const FileColumns: ColumnsType<FileTableRow> = [
  getColumnFileProps(),
  getColumnFindingsProps(),
  getColumnFailedProps(),
  getColumnWarningProps(),
  getColumnPassedProps(),
  getColumnErrorProps(),
  getColumnSkippedProps(),
];