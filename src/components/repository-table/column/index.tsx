import { RepRealDataTableRow } from '../../../components/componentsV2/types';
import { getColumnWarningProps } from "./warning";
import { ColumnsType } from "antd/es/table";
import { getColumnSkippedProps } from "./skipped";
import { getColumnErrorProps } from "./error";
import { getColumnFailedProps } from "./failed";
import { getColumnFilesProps } from "./files";
import { getColumnFileTypesProps } from "./filetypes";
import { getColumnGradeProps } from "./grade";
import { getColumnPassedProps } from "./passed";
import { getColumnRepositoryProps } from "./repository";

export const RepColumns: ColumnsType<RepRealDataTableRow> = [
  getColumnRepositoryProps(),
  getColumnFileTypesProps(),
  getColumnFilesProps(),
  getColumnGradeProps(),
  getColumnFailedProps(),
  getColumnWarningProps(),
  getColumnPassedProps(),
  getColumnErrorProps(),
  getColumnSkippedProps(),
];