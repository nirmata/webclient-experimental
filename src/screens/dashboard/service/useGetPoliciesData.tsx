import { useEffect, useState } from "react";
import {
  SafetyCertificateOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  ToolFilled,
  ExclamationCircleOutlined,
  WarningOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { convertToKFormat } from "../utils/utils";
import {
  MModernDashboardData,
  MetricEntry,
} from "../../../components/dashboard/types";
import TPolicy from "../../../nirmata-model-schema/Policies.TPolicy";
import getCookie from "../../../components/connector/get-cookie";

const DEFAULT_SUMMARY = {
  policies: 0,
  fail: 0,
  pass: 0,
  remediation: 0,
  totalRules: 0,
  error: 0,
  warn: 0,
  skip: 0,
};

const useGetPoliciesData = (
  dashboardData: MModernDashboardData | undefined,
  policyData: TPolicy[]
) => {
  const [formattedPolicies, setFormattedPolicies] = useState<MetricEntry[]>([]);
  const loadingPolicies = !dashboardData;
  const userData = getCookie("nirmata.session.userData");
  const userRole = (
    JSON.parse(decodeURIComponent(userData ?? "")) as { role: string }
  )?.role;

  useEffect(() => {
    const fetchData = async () => {
      const dashboardDataSummary = dashboardData?.summary || DEFAULT_SUMMARY;

      setFormattedPolicies([
        {
          title: "Policies",
          value: convertToKFormat(policyData?.length ?? 0),
          icon: (
            <SafetyCertificateOutlined
              style={{ height: "24px", width: "24px", color: "#00000073" }}
            />
          ),
          link: userRole === "admin" ? "#workloadManagePolicies" : "",
        },
        {
          title: "Failed",
          textColor: "#f5222d",
          value: convertToKFormat(dashboardDataSummary.fail),
          icon: (
            <CloseCircleOutlined
              style={{ height: "24px", width: "24px", color: "#f5222d" }}
            />
          ),
          link: userRole === "admin" ? "#clustersPolicyReport/categories" : "",
        },
        {
          title: "Passed",
          textColor: "#52C41A",
          value: convertToKFormat(dashboardDataSummary.pass),
          icon: (
            <CheckCircleOutlined
              style={{ height: "24px", width: "24px", color: "#52C41A" }}
            />
          ),
          link: userRole === "admin" ? "#clustersPolicyReport/categories" : "",
        },
        {
          title: "Remediations",
          textColor: "#1677FF",
          value: convertToKFormat(dashboardDataSummary.remediation),
          icon: (
            <ToolFilled
              style={{ height: "24px", width: "24px", color: "#1677FF" }}
            />
          ),
          link: userRole === "admin" ? "#clustersPolicyReport/categories" : "",
        },
        {
          title: "Rules",
          value: convertToKFormat(dashboardDataSummary.totalRules),
          icon: (
            <CheckCircleOutlined style={{ height: "24px", width: "24px" }} />
          ),
          link: userRole === "admin" ? "#workloadManagePolicies" : "",
        },
        {
          title: "Errors",
          textColor: "#FF4D4F",
          value: convertToKFormat(dashboardDataSummary.error),
          icon: (
            <ExclamationCircleOutlined
              style={{ height: "24px", width: "24px", color: "#FF4D4F" }}
            />
          ),
          link: userRole === "admin" ? "#clustersPolicyReport/categories" : "",
        },
        {
          title: "Warnings",
          textColor: "#FAAD14",
          value: convertToKFormat(dashboardDataSummary.warn),
          icon: (
            <WarningOutlined
              style={{ height: "24px", width: "24px", color: "#FAAD14" }}
            />
          ),
          link: userRole === "admin" ? "#clustersPolicyReport/categories" : "",
        },
        {
          title: "Skipped",
          textColor: "#00000073",
          value: convertToKFormat(dashboardDataSummary.skip),
          icon: (
            <MinusCircleOutlined style={{ height: "24px", width: "24px" }} />
          ),
          link: userRole === "admin" ? "#clustersPolicyReport/categories" : "",
        },
      ]);
    };

    fetchData();
  }, [dashboardData]);

  return { formattedPolicies, loadingPolicies };
};

export default useGetPoliciesData;
