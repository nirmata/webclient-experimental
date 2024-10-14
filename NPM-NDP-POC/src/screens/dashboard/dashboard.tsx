import { useEffect, useState } from "react";
import { useGetViolationData } from "./service/useGetViolationData";
import { useFetchData } from "./service/useFetchData";
import { useGetComplianceData } from "./service/useGetComplianceData";
import { useGetNamespaceComplianceAggMatrix } from "./service/useGetNamespaceComplianceAggMatrix";
import useGetPoliciesData from "./service/useGetPoliciesData";
import useGetInventoryData from "./service/useGetInventoryData";
import useGetAlarmsData from "./service/useGetAlarmsData";
import { useGetAllcomplianceReport } from "./service/useGetAllComplianceReport";
import {
  TClusterComplianceReportData,
  TNamespaceComplianceReportData,
  TReportComplianceReportData,
} from "./types";
import {
  ComplianceItemMap,
  ViolationItemsMap,
} from "../../components/dashboard/types";
import DashboardStatInventory from "../../components/dashboard/dashboard-stats/dashboard-stat-inventory/dashboard-stat-inventory";
import DashboardStatPolicies from "../../components/dashboard/dashboard-stats/dashboard-stat-policies/dashboard-state-policies";
import DashboardStatAlarms from "../../components/dashboard/dashboard-stats/dashboard-stat-alarms/dashboard-stat-alarms";
import {
  clusterNamespaceSegment,
  complianceSegment,
  violationSegment,
} from "../../components/dashboard/dashboard-overview";
import DashboardCard from "../../components/dashboard/dashboard-cards/dashboard-card";
import getCookie from "../../components/connector/get-cookie";

const Dashboard = () => {
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
  });

  useEffect(() => {
    const fetchAndSetData = async () => {
      const result = await fetchData();
      setData(result);
    };

    fetchAndSetData();
  }, [fetchData]);

  const { clusterPolicyEntries, dashboardData, namespacePolicyEntries } = data;

  const { formattedViolation, clusterViolOptions } = useGetViolationData(
    selectedNamespaceOptionViol,
    clusterPolicyEntries,
    dashboardData,
    namespacePolicyEntries
  );
  const { formattedPolicies, loadingPolicies } =
    useGetPoliciesData(dashboardData);
  const { formattedInventory, loadingInventory, totalRepositories } =
    useGetInventoryData();
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
            totalClusters={(clusterViolOptions?.length ?? 1) - 1}
            totalRepositories={totalRepositories}
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
              totalClusters={(clusterOptions?.length ?? 1) - 1}
              totalRepositories={totalRepositories}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
