import { useEffect, useState } from "react";
import {
  SafetyCertificateOutlined,
  CloseCircleOutlined,
  CheckCircleOutlined,
  ToolFilled,
  ExclamationCircleOutlined,
  WarningOutlined,
  MinusCircleOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { convertToKFormat } from "../utils/utils";
import {
  MModernDashboardData,
  MetricEntry,
} from "../../../components/dashboard/types";

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
  dashboardData: MModernDashboardData | undefined
) => {
  const [formattedPolicies, setFormattedPolicies] = useState<MetricEntry[]>([]);
  const loadingPolicies = !dashboardData;
  useEffect(() => {
    const fetchData = async () => {
      const dashboardDataSummary = dashboardData?.summary || DEFAULT_SUMMARY;

      setFormattedPolicies([
        {
          title: "Policies",
          value: convertToKFormat(dashboardDataSummary.policies ?? 0),
          icon: (
            <SafetyCertificateOutlined
              style={{ height: "24px", width: "24px", color: "#00000073" }}
            />
          ),
          link: "/webclient/#clustersPolicyReport/categories?sort=resultCount.fail,descend",
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
          link: "/webclient/#clustersPolicyReport/categories?sort=resultCount.fail,descend",
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
          link: "/webclient/#clustersPolicyReport/categories?sort=resultCount.pass,descend",
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
          link: "/webclient/#clustersPolicyReport/categories?sort=remediationsAvailable,descend",
        },
        {
          title: "Rules",
          value: convertToKFormat(dashboardDataSummary.totalRules),
          icon: (
            <CheckOutlined
              style={{ height: "24px", width: "24px", color: "#00000073" }}
            />
          ),
          link: "/webclient/#clustersPolicyReport/categories?sort=resultCount.fail,descend",
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
          link: "/webclient/#clustersPolicyReport/categories?sort=resultCount.error,descend",
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
          link: "/webclient/#clustersPolicyReport/categories?sort=resultCount.warn,descend",
        },
        {
          title: "Skipped",
          textColor: "#00000073",
          value: convertToKFormat(dashboardDataSummary.skip),
          icon: (
            <MinusCircleOutlined style={{ height: "24px", width: "24px" }} />
          ),
          link: "/webclient/#clustersPolicyReport/categories?sort=resultCount.skip,descend",
        },
      ]);
    };

    fetchData();
  }, [dashboardData]);

  return { formattedPolicies, loadingPolicies };
};

export default useGetPoliciesData;
