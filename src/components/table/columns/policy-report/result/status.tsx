import { StatusTag } from "../../../../policy-report/status";
import { ColumnType } from "../../../types";

const status: ColumnType<any> = {
  dataIndex: "result",
  key: "result",
  title: "Status",
  render: (status: any) => <StatusTag status={status ?? ""} />,
};

export default status;
