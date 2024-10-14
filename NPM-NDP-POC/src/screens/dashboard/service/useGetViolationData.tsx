import { useEffect, useState, useCallback } from "react";
import {
  DeploymentUnitOutlined,
  DatabaseOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import {
  extractProviderName,
  calculatePercentage,
  formatPercentage,
  getUniquekyes,
  convertToKFormat,
  extractRepoName,
} from "../utils/utils";
import {
  CLOUD_PROVIDER_LOGOS,
  CLOUD_PROVIDER_NAMES,
} from "../utils/cloudProvider";
import {
  ClusterPolicyReportEntry,
  MModernDashboardData,
  ViolationItemsMap,
} from "../../../components/dashboard/types";
import capitalize from "../../../components/policy-report/capitalize";
import { getSourceIcon } from "../../../common/get-repo-source-icon";
import { ResourceKindTag } from "../../../components/policy-report/resource-kind-tag";

export type TOptions = { label: string; value: string };
export type NamespaceCompliance = {
  name: string;
  id: string;
  total?: number;
  fail?: number;
  failCount?: number;
};

export const useGetViolationData = (
  clusterId: string,
  policyReportClusterTableData: ClusterPolicyReportEntry[] | null,
  dashboardData: MModernDashboardData | null,
  policyReportNamespaceTableData: ClusterPolicyReportEntry[] | null
) => {
  const [clusterViolOptions, setClusterViolOptions] = useState<TOptions[]>([
    { label: "All Clusters", value: "All Clusters" },
  ]);
  const [formattedViolation, setFormattedViolation] =
    useState<ViolationItemsMap>();

  const fetchData = useCallback(async () => {
    try {
      if (policyReportClusterTableData && clusterId === "All Clusters") {
        const uniqueClusterIds = getUniquekyes(
          policyReportClusterTableData?.map(
            (item) => item?._id?.cluster ?? ""
          ) ?? []
        );

        const clusterOptions = uniqueClusterIds.map((item) => ({
          label:
            policyReportClusterTableData?.find(
              (cluster) => cluster?._id?.cluster === item
            )?.clusterName ?? "",
          value: item,
        }));

        setClusterViolOptions([
          { label: "All Clusters", value: "All Clusters" },
          ...clusterOptions,
        ]);
      }

      const violationNamespaceData = policyReportNamespaceTableData;
      const violationClusterData = policyReportClusterTableData;
      const repoVoilationInOrder = dashboardData?.repoVoilationInOrder;
      const temp =
        violationNamespaceData
          ?.filter((entry) => entry._id?.cluster === clusterId)
          ?.map((entry) => ({
            name: entry._id?.namespace ?? "",
            id: entry?.namespaceId ?? "",
            total: entry?.total,
            fail: entry?.failPercentage,
            failCount: entry?.resultCount?.fail,
            namespaceId: entry?.namespaceId,
            clusterId: entry?._id?.cluster,
            namespace: entry?._id?.namespace,
          })) ?? [];

      const { totalFailCount, totalTotalCount } = temp.reduce(
        (acc, item) => {
          if (item.failCount != null && item.total != null) {
            acc.totalFailCount += item.failCount;
            acc.totalTotalCount += item.total;
          }
          return acc;
        },
        { totalFailCount: 0, totalTotalCount: 0 }
      );

      const nspTotalScore =
        calculatePercentage(totalFailCount, totalTotalCount) ?? 0;

      const repositoryItems = Object.entries(
        dashboardData?.["repo-by-provider"] ?? {}
      )
        .map(([key, value]) => {
          const provider = capitalize(extractProviderName(key) ?? "");
          const isFailCount = key.toLowerCase().includes("failcount");
          return {
            provider,
            failCount: isFailCount ? value : 0,
            totalCount: isFailCount ? 0 : value,
          };
        })
        .reduce((acc, { provider, failCount, totalCount }) => {
          if (!acc[provider ?? ""]) {
            acc[provider ?? ""] = {
              name: provider ?? "",
              icon: getSourceIcon(provider?.toLowerCase() ?? ""),
              failCount: 0,
              totalCount: 0,
            };
          }
          acc[provider ?? ""].failCount += failCount;
          acc[provider ?? ""].totalCount += totalCount;
          return acc;
        }, {} as { [key: string]: { name: string; icon: JSX.Element; failCount: number; totalCount: number } });
      let violationItemsMap: ViolationItemsMap = {
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
            isLoading: true,
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
      if (
        policyReportClusterTableData &&
        dashboardData &&
        policyReportNamespaceTableData
      ) {
        violationItemsMap = {
          services: {
            clusters: formatPercentage(
              dashboardData?.["all-cluster-violation-percentage"] ?? 0
            ),
            clusterItems: Object.entries(
              dashboardData?.["cloud provider violations"] ?? {}
            )
              .map(([provider, item]) => ({
                name: CLOUD_PROVIDER_NAMES[provider] || provider,
                icon: (
                  <img
                    src={
                      CLOUD_PROVIDER_LOGOS[provider] ||
                      CLOUD_PROVIDER_LOGOS["other"]
                    }
                    alt={CLOUD_PROVIDER_NAMES[provider] || "Other"}
                    style={{ width: "20px", height: "20px" }}
                  />
                ),
                progressPercent: calculatePercentage(
                  item.failCount,
                  item.totalCount
                ),
                value: String(
                  convertToKFormat(item.failCount) +
                    " / " +
                    convertToKFormat(item.totalCount)
                ),
              }))
              .sort((a, b) => b.progressPercent - a.progressPercent),
            repositories: formatPercentage(
              dashboardData?.["all-repo-violation-percentage"] ?? 0
            ),
            repositoryItems: Object.values(repositoryItems)
              .map((item) => ({
                ...item,
                progressPercent: calculatePercentage(
                  item.failCount,
                  item.totalCount
                ),
                value: String(
                  convertToKFormat(item.failCount) +
                    " / " +
                    convertToKFormat(item.totalCount)
                ),
              }))
              .sort((a, b) => b.progressPercent - a.progressPercent),
            clusterLink:
              "/webclient/#clustersPolicyReport/clusters?sort=resultCount.fail,descend", // modified
            repoLink:
              "/webclient/#clustersPolicyReport/repositories?sort=result.fail,descend", // modified
            isLoading: false,
          },
          clustersrepos: {
            clusters: formatPercentage(
              dashboardData?.["all-cluster-violation-percentage"] ?? 0
            ),
            clusterItems:
              violationClusterData
                ?.slice(0, 5)
                ?.map((entry) => ({
                  name: entry.clusterName ?? "",
                  icon: (
                    <DeploymentUnitOutlined
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#1677FF",
                      }}
                    />
                  ),
                  progressPercent: entry.failPercentage,
                  value: String(
                    convertToKFormat(entry.resultCount?.fail) +
                      " / " +
                      convertToKFormat(entry?.total)
                  ),
                  link: `/webclient/#clusters/policyReport/KubernetesCluster/${entry?._id?.cluster}/results`, // modified
                }))
                ?.sort((a, b) => b.progressPercent - a.progressPercent) ?? [],
            clusterLink:
              "/webclient/#clustersPolicyReport/clusters?sort=resultCount.fail,descend", // modified
            repoLink:
              "/webclient/#clustersPolicyReport/repositories?sort=result.fail,descend", // modified
            namespaces: {
              clusters: formatPercentage(
                dashboardData?.["all-namespace-violation-percentage"] ?? 0
              ),
              clusterItems:
                violationNamespaceData
                  ?.filter((entry) => Boolean(entry?.namespaceId))
                  ?.slice(0, 5)
                  ?.map((entry) => ({
                    name: entry?._id?.namespace ?? "",
                    icon: (
                      <ResourceKindTag
                        kind={"namespace"}
                        style={{
                          textAlign: "center",
                          display: "flex",
                          gap: "4px",
                          width: "30px",
                          height: "22px",
                          justifyContent: "center",
                          color: "#1677FF",
                        }}
                      />
                    ),
                    progressPercent: entry.failPercentage,
                    value: String(
                      convertToKFormat(entry.resultCount?.fail) +
                        " / " +
                        convertToKFormat(entry?.total)
                    ),
                    link: `/webclient/#clusters/policyReport/namespace/${entry?.namespaceId}/findings?clusterId=${entry?._id?.cluster}&namespace=${entry?._id?.namespace}&status=fail`, // modified
                  }))
                  ?.sort((a, b) => b.progressPercent - a.progressPercent) ?? [],
              clusterLink:
                "/webclient/#clustersPolicyReport/namespaces?sort=resultCount.fail,descend", // modified
              repoLink:
                "/webclient/#clustersPolicyReport/repositories?sort=result.fail,descend", // modified
              isLoading: false,
            },
            selectedCluster: {
              clusters: formatPercentage(nspTotalScore ?? 0),
              clusterItems:
                temp
                  ?.filter((entry) => Boolean(entry?.namespaceId))
                  ?.slice(0, 5)
                  ?.map((entry) => ({
                    name: entry.name ?? "",
                    icon: (
                      <ResourceKindTag
                        kind={"namespace"}
                        style={{
                          textAlign: "center",
                          display: "flex",
                          gap: "4px",
                          width: "30px",
                          height: "22px",
                          justifyContent: "center",
                          color: "#1677FF",
                        }}
                      />
                    ),
                    progressPercent: formatPercentage(entry?.fail ?? 0),
                    value: String(
                      convertToKFormat(entry.failCount) +
                        " / " +
                        convertToKFormat(entry?.total)
                    ),
                    link: `/webclient/#clusters/policyReport/namespace/${entry?.namespaceId}/findings?clusterId=${entry?.clusterId}&namespace=${entry?.namespace}&status=fail`, // modified
                  }))
                  ?.sort((a, b) => b.progressPercent - a.progressPercent) ?? [],
              clusterLink: `/webclient/#clusters/policyReport/KubernetesCluster/${clusterId}/results`, // modified
              repoLink:
                "/webclient/#clustersPolicyReport/repositories?sort=result.fail,descend", // modified
              isLoading: false,
            },
            repositories: formatPercentage(
              dashboardData?.["all-repo-violation-percentage"] ?? 0
            ),
            repositoryItems:
              repoVoilationInOrder
                ?.slice(0, 5)
                ?.map((item) => ({
                  name: extractRepoName(item.sourceId) ?? "",
                  icon: (
                    <DatabaseOutlined
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#1677FF",
                      }}
                    />
                  ),
                  progressPercent: calculatePercentage(
                    item.failCount,
                    item.totalCount
                  ),
                  value: String(
                    convertToKFormat(item.failCount) +
                      " / " +
                      convertToKFormat(item?.totalCount)
                  ),
                  link: `/webclient/#clusters/policyReport/repositoryDetails?repo=${item?.sourceId}`, // modified
                }))
                ?.sort((a, b) => b.progressPercent - a.progressPercent) ?? [],
            isLoading: false,
          },
          policycategories: {
            clusters: formatPercentage(
              dashboardData?.["all-cluster-violation-percentage"] ?? 0
            ),
            clusterItems:
              dashboardData?.summaryByCategoryForCluster?.report
                ?.slice(0, 5)
                ?.map((item) => ({
                  name: item.category,
                  icon: (
                    <SafetyCertificateOutlined
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#1677FF",
                      }}
                    />
                  ),
                  progressPercent: formatPercentage(item.failPercentage),
                  value: String(
                    convertToKFormat(item.failCount) +
                      " / " +
                      convertToKFormat(item?.totalCount)
                  ),
                  link: `/webclient/#clusters/policyReport/category/${item?.category}`, // modified
                }))
                ?.sort((a, b) => b.progressPercent - a.progressPercent) ?? [],
            repositories: formatPercentage(
              dashboardData?.["all-repo-violation-percentage"] ?? 0
            ),
            repositoryItems:
              dashboardData?.summaryByCategoryForRepository?.report
                ?.slice(0, 5)
                ?.map((item) => ({
                  name: item.category,
                  icon: (
                    <SafetyCertificateOutlined
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#1677FF",
                      }}
                    />
                  ),
                  progressPercent: formatPercentage(item.failPercentage),
                  value: String(
                    convertToKFormat(item.failCount) +
                      " / " +
                      convertToKFormat(item?.totalCount)
                  ),
                  link: `/webclient/#clusters/policyReport/category/${item?.category}`, // modified
                }))
                ?.sort((a, b) => b.progressPercent - a.progressPercent) ?? [],
            clusterLink:
              "/webclient/#clustersPolicyReport/clusters?sort=resultCount.fail,descend", // modified
            repoLink:
              "/webclient/#clustersPolicyReport/repositories?sort=result.fail,descend", // modified
            isLoading: false,
          },
        };
      }
      setFormattedViolation(violationItemsMap);
    } catch (err) {
      setFormattedViolation({
        services: {
          clusters: 0,
          clusterItems: [],
          repositories: 0,
          repositoryItems: [],
          isLoading: false,
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
            isLoading: false,
          },
          isLoading: false,
        },
        policycategories: {
          clusters: 0,
          clusterItems: [],
          repositories: 0,
          repositoryItems: [],
          isLoading: false,
        },
      });
      console.error("Unable to fetch modern dashboard data", err);
    }
  }, [
    clusterId,
    policyReportClusterTableData,
    dashboardData,
    policyReportNamespaceTableData,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    clusterViolOptions,
    formattedViolation,
  };
};
