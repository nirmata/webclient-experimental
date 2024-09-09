import React, { useEffect, useState } from "react";
import DashboardStatInventory from "../../components/dashboard/dashboard-stats/dashboard-stat-inventory/dashboard-stat-inventory";
import DashboardStatPolicies from "../../components/dashboard/dashboard-stats/dashboard-stat-policies/dashboard-state-policies";
import DashboardStatAlarms from "../../components/dashboard/dashboard-stats/dashboard-stat-alarms/dashboard-stat-alarms";
import DashboardCard from "../../components/dashboard/dashboard-cards/dashboard-card";
import {
  violationSegment,
  clusterNamespaceSegment,
  complianceSegment,
} from "../../components/dashboard/dashboard-overview";
import { useGetViolationData } from "./service/useGetViolationData";
import { useFetchData } from "./service/useFetchData";
import { useGetComplianceData } from "./service/useGetComplianceData";
import { useGetNamespaceComplianceAggMatrix } from "./service/useGetNamespaceComplianceAggMatrix";
import useGetPoliciesData from "./service/useGetPoliciesData";
import useGetInventoryData from "./service/useGetInventoryData";
import useGetAlarmsData from "./service/useGetAlarmsData";
import {
  ComplianceItemMap,
  ViolationItemsMap,
} from "../../components/dashboard/types";
import { useGetAllcomplianceReport } from "./service/useGetAllComplianceReport";
import {
  TClusterComplianceReportData,
  TNamespaceComplianceReportData,
  TReportComplianceReportData,
} from "./types";
import getCookie from "../../components/connector/get-cookie";

const Dashboard: React.FC = () => {
  const [selectedNamespaceOptionViol, setSelectedNamespaceOptionViol] =
    useState<string>("All Clusters");

  const { fetchAllComplianceReport } = useGetAllcomplianceReport();
  const [clusterComplianceReport, setClusterComplianceReport] =
    useState<TClusterComplianceReportData[]>();
  const [repoComplianceReport, setRepoComplianceReport] =
    useState<TReportComplianceReportData[]>();
  const [namespaceComplianceReport, setNamespaceComplianceReport] =
    useState<TNamespaceComplianceReportData[]>();
  const userData = getCookie("nirmata.session.userData");
  const userRole = (
    JSON.parse(decodeURIComponent(userData ?? "")) as { role: string }
  )?.role;

  const { fetchData } = useFetchData();
  const [data, setData] = useState<any>({
    clusterPolicyEntries: [],
    dashboardData: null,
    namespacePolicyEntries: [],
    policyData: null,
  });

  useEffect(() => {
    const fetchAndSetData = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchAndSetData();
  }, [fetchData]);

  const {
    clusterPolicyEntries,
    dashboardData,
    namespacePolicyEntries,
    policyData,
  } = data;

  const { formattedViolation, clusterViolOptions } = useGetViolationData(
    selectedNamespaceOptionViol,
    clusterPolicyEntries,
    dashboardData,
    namespacePolicyEntries
  );
  const { formattedPolicies, loadingPolicies } = useGetPoliciesData(
    dashboardData,
    policyData
  );
  const { formattedInventory, loadingInventory } = useGetInventoryData();
  const { formattedAlarms, loadingAlarm } = useGetAlarmsData();
  const [selectedNamespaceOptionComp, setSelectedNamespaceOptionComp] =
    useState<string>("All Clusters");
  const { formattedCompliance, getComplianceData, getCompDataForCluster } =
    useGetComplianceData();
  const [clusterOptions, setClusterOptions] =
    useState<{ label: string; value: string }[]>();

  const { getNamespaceComplianceReport } = useGetNamespaceComplianceAggMatrix();

  useEffect(() => {
    fetchAllComplianceReport().then((response) => {
      setRepoComplianceReport(response?.[0] as TReportComplianceReportData[]);
      setClusterComplianceReport(
        response?.[1] as TClusterComplianceReportData[]
      );
      setNamespaceComplianceReport(
        response?.[2] as TNamespaceComplianceReportData[]
      );
    });
  }, []);

  useEffect(() => {
    if (
      Boolean(repoComplianceReport) &&
      Boolean(clusterComplianceReport) &&
      Boolean(namespaceComplianceReport)
    ) {
      getNamespaceComplianceReport(
        "All Clusters",
        namespaceComplianceReport as TNamespaceComplianceReportData
      ).then((namespaceCompAgg) => {
        console.log("namespaceCompAgg", namespaceCompAgg);
        setClusterOptions(namespaceCompAgg?.clusterOptions);
      });

      if (selectedNamespaceOptionComp === "All Clusters") {
        getComplianceData(
          selectedNamespaceOptionComp,
          repoComplianceReport as TReportComplianceReportData,
          clusterComplianceReport as TClusterComplianceReportData,
          namespaceComplianceReport as TNamespaceComplianceReportData
        );
      } else {
        getCompDataForCluster(
          selectedNamespaceOptionComp,
          namespaceComplianceReport as TNamespaceComplianceReportData
        );
      }
    }
  }, [
    selectedNamespaceOptionComp,
    clusterComplianceReport,
    repoComplianceReport,
    namespaceComplianceReport,
  ]);
  const defaultFormattedViolation: ViolationItemsMap = {
    services: {
      clusters: 0,
      clusterItems: [],
      repositories: 0,
      repositoryItems: [],
      isLoading: true,
    },
    clustersrepos: {
      clusters: 0,
      clusterItems: [],
      repositories: 0,
      repositoryItems: [],
      namespaces: {
        clusters: 0,
        clusterItems: [],
      },
      selectedCluster: {
        clusters: 0,
        clusterItems: [],
        isLoading: true,
      },
      isLoading: true,
    },
    policycategories: {
      clusters: 0,
      clusterItems: [],
      repositories: 0,
      repositoryItems: [],
      isLoading: true,
    },
  };

  const defaultFormattedCompliance: ComplianceItemMap = {
    compliancestandards: {
      clusters: 0,
      clusterItems: [],
      repositories: 0,
      repositoryItems: [],
      isLoading: true,
    },
    clustersreposcomp: {
      clusters: 0,
      clusterItems: [],
      repositories: 0,
      repositoryItems: [],
      namespaces: {
        clusterItems: [],
        clusters: 0,
      },
      isLoading: true,
    },
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ flex: 1 }}>
          <DashboardStatInventory
            inventoryData={formattedInventory}
            loadingInventory={loadingInventory}
          />
        </div>
        <div style={{ flex: 2 }}>
          <DashboardStatPolicies
            policiesData={formattedPolicies}
            loadingPolicies={loadingPolicies}
          />
        </div>
        <div style={{ flex: 1 }}>
          <DashboardStatAlarms
            alarmsData={formattedAlarms}
            loadingAlarm={loadingAlarm}
          />
        </div>
      </div>
      <div style={{ gap: "16px" }}>
        <div>
          <DashboardCard
            dataId="dashboard-violations"
            title="Violations"
            controlSegment={violationSegment}
            clusterNamespaceSegment={clusterNamespaceSegment}
            segmentItemsMap={formattedViolation ?? defaultFormattedViolation}
            namespaceSegmentOptions={clusterViolOptions}
            defaultTab={"clustersrepos"}
            selectedNamespaceOption={selectedNamespaceOptionViol}
            setSelectedNamespaceOption={setSelectedNamespaceOptionViol}
          />
        </div>
        {userRole === "admin" && (
          <div style={{ marginTop: "16px" }}>
            <DashboardCard
              dataId="dashboard-compliance"
              title="Compliance"
              namespaceSegmentOptions={clusterOptions ?? []}
              controlSegment={complianceSegment}
              clusterNamespaceSegment={clusterNamespaceSegment}
              segmentItemsMap={
                formattedCompliance ?? defaultFormattedCompliance
              }
              defaultTab={"clustersreposcomp"}
              selectedNamespaceOption={selectedNamespaceOptionComp}
              setSelectedNamespaceOption={setSelectedNamespaceOptionComp}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
