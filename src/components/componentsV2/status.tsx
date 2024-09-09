import React, { useContext } from "react";
import { TPolicyReportResultData_Status as TPolicyReportResultData_Status_ClusterService } from "../../nirmata-model-schema/Cluster.TPolicyReportResultData";
import { TPolicyReportResultDataData_Status as TPolicyReportResultData_Status_PoliciesService } from "../../nirmata-model-schema/Policies.TPolicyReportResultDataData";
import TMayBe from "../connector/TMayBe";
import { Tag } from "antd";
import ThemeContext from "./theme-provider/theme-context";

type StatusTypes =
  | "pass"
  | "fail"
  | "warn"
  | "error"
  | "skip"
  | "remediationsAvailable";

const useGetStatusColor = (
  status:
    | TMayBe<
        | TPolicyReportResultData_Status_ClusterService
        | TPolicyReportResultData_Status_PoliciesService
      >
    | string
    | StatusTypes
): string | undefined => {
  const { variables } = useContext(ThemeContext);

  const colorMapping: Record<
    | TPolicyReportResultData_Status_ClusterService
    | TPolicyReportResultData_Status_PoliciesService
    | string,
    string | undefined | StatusTypes
  > = {
    error: variables["color.error"],
    fail: variables["color.error"],
    pass: variables["color.success"],
    skip: variables["color.gray.6"],
    warn: variables["color.warning"],
    remediationsAvailable: variables["color.blue.6"],
  };

  return status ? colorMapping[status] : variables["color.gray.6"];
};

const StatusTag: React.FC<{
  status?: TMayBe<
    | TPolicyReportResultData_Status_ClusterService
    | TPolicyReportResultData_Status_PoliciesService
  >;
  style?: React.CSSProperties;
  className?: string;
}> = ({ status, style, className }) => {
  const color = useGetStatusColor(status);

  return (
    <Tag className={className} style={style} color={color}>
      {capitalize(status ?? "")}
    </Tag>
  );
};

const CountTag: React.FC<{
  status?: TMayBe<StatusTypes>;
  count?: number | string;
  style?: React.CSSProperties;
  className?: string;
  countBasedColor?: boolean;
}> = ({ status, count, style, className, countBasedColor = true }) => {
  const finalStatus = countBasedColor
    ? !count
      ? "skip"
      : status
    : count === undefined
    ? "skip"
    : status;
  const color = useGetStatusColor(finalStatus);

  return (
    <Tag className={className} style={style} color={color}>
      {count ?? 0}
    </Tag>
  );
};

export { StatusTag, CountTag };
export type { StatusTypes };
