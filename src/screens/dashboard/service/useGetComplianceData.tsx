import { useState } from "react";
import { useGetClusterCategoryComplianceAggMatrix } from "./useGetClusterCategoryComplianceAggMatrix";
import {
  TAggCompReport,
  useGetClusterComplianceAggMatrix,
} from "./useGetClusterComplianceAggMatrix";
import { useGetNamespaceComplianceAggMatrix } from "./useGetNamespaceComplianceAggMatrix";
import { useGetRepoCategoryComplianceAggMatrix } from "./useGetRepoCategoryComplianceAggMatrix";
import { useGetRepoComplianceAggMatrix } from "./useGetRepoComplianceAggMatrix";
import {
  DeploymentUnitOutlined,
  DatabaseOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import { formatPercentage } from "../utils/utils";
import {
  TClusterComplianceReportData,
  TNamespaceComplianceReportData,
  TReportComplianceReportData,
} from "../types";
import { ComplianceItemMap, NamespaceItems, SegmentItem } from "../../../components/dashboard/types";
import TMayBe from "../../../components/connector/TMayBe";

export const useGetComplianceData = () => {
  const { getRepoComplianceAggMatrix } = useGetRepoComplianceAggMatrix();
  const { getClusterComplianceAggMatrix } = useGetClusterComplianceAggMatrix();
  const { getNamespaceComplianceReport } = useGetNamespaceComplianceAggMatrix();
  const { getReportCategoryComplianceAggMatrix } =
    useGetRepoCategoryComplianceAggMatrix();
  const { getClusterCategoryComplianceAggMatrix } =
    useGetClusterCategoryComplianceAggMatrix();
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
        isLoading: true,
      },
      isLoading: true,
    },
  };

  const [formattedCompliance, setFormattedCompliance] =
    useState<ComplianceItemMap>(defaultFormattedCompliance);

  const getComplianceData = (
    clusterId: string,
    repoComplianceData: TReportComplianceReportData,
    clusterComplianceReport: TClusterComplianceReportData,
    namespaceComplianceReport: TNamespaceComplianceReportData
  ) => {
    setFormattedCompliance({
      ...formattedCompliance,
      compliancestandards: {
        ...formattedCompliance.compliancestandards,
        isLoading: true,
      },
      clustersreposcomp: {
        ...formattedCompliance.clustersreposcomp,
        selectedCluster: {
          ...(formattedCompliance.clustersreposcomp.selectedCluster ?? {
            clusterItems: [],
            clusters: 0,
            isLoading: false,
          }),

          isLoading: false,
        },
        isLoading: true,
      },
    });
    Promise.all([
      getRepoComplianceAggMatrix(repoComplianceData),
      getClusterComplianceAggMatrix(clusterComplianceReport),
      getNamespaceComplianceReport(clusterId, namespaceComplianceReport),
      getReportCategoryComplianceAggMatrix(repoComplianceData),
      getClusterCategoryComplianceAggMatrix(clusterComplianceReport),
    ])
      .then((report) => {
        setFormattedCompliance({
          ...formattedCompliance,
          compliancestandards: {
            ...formattedCompliance.compliancestandards,
            isLoading: false,
          },
          clustersreposcomp: {
            ...formattedCompliance.clustersreposcomp,
            selectedCluster: {
              ...(formattedCompliance.clustersreposcomp.selectedCluster ?? {
                clusterItems: [],
                clusters: 0,
                isLoading: false,
              }),

              isLoading: false,
            },
            isLoading: false,
          },
        });
        console.log("consolidated-report", report);
        const repoCompAgg = report?.[0];
        const clusterCompAgg = report?.[1];
        const namespaceCompAgg = report?.[2];
        const repoCategoryReport = report?.[3];
        const clusterCategoryReport = report?.[4];

        const formatedData = convertCategoryComplianceItemsMap(
          repoCategoryReport?.report,
          repoCategoryReport?.totalScore ?? 0,
          repoCategoryReport?.totalScore ?? 0,
          clusterCategoryReport?.report,
          clusterCompAgg?.report,
          clusterCompAgg?.totalScore ?? 0,
          repoCompAgg?.report,
          repoCompAgg?.totalScore ?? 0,
          namespaceCompAgg?.report,
          namespaceCompAgg?.totalScore ?? 0
        );
        setFormattedCompliance(formatedData);
      })
      .catch(() => {
        setFormattedCompliance({
          ...formattedCompliance,
          compliancestandards: {
            ...formattedCompliance.compliancestandards,
            isLoading: false,
          },
          clustersreposcomp: {
            ...formattedCompliance.clustersreposcomp,
            selectedCluster: {
              ...(formattedCompliance.clustersreposcomp.selectedCluster ?? {
                clusterItems: [],
                clusters: 0,
                isLoading: false,
              }),

              isLoading: false,
            },
            isLoading: false,
          },
        });
      });
  };

  const getClusterRepoCompData = async (
    repoComplianceData: TReportComplianceReportData,
    clusterComplianceReport: TClusterComplianceReportData
  ) => {
    setFormattedCompliance({
      ...formattedCompliance,
      compliancestandards: {
        ...formattedCompliance.compliancestandards,
        isLoading: false,
      },
      clustersreposcomp: {
        ...formattedCompliance.clustersreposcomp,
        selectedCluster: {
          ...(formattedCompliance.clustersreposcomp.selectedCluster ?? {
            clusterItems: [],
            clusters: 0,
            isLoading: false,
          }),

          isLoading: false,
        },
        isLoading: true,
      },
    });
    Promise.all([
      getRepoComplianceAggMatrix(repoComplianceData),
      getClusterComplianceAggMatrix(clusterComplianceReport),
    ])
      .then((response) => {
        const repoCompAgg = response?.[0]?.report;
        const repoScoretotal = response?.[0]?.totalScore;
        const clusterCompAgg = response[1]?.report;
        const clusterScoretotal = response[1]?.totalScore;

        setFormattedCompliance({
          ...formattedCompliance,
          clustersreposcomp: {
            ...formattedCompliance?.clustersreposcomp,
            clusters: formatPercentage(clusterScoretotal ?? 0),
            clusterItems:
              clusterCompAgg
                ?.sort((a, b) => Number(a?.score) - Number(b?.score))
                ?.splice(0, 5)
                ?.map((item) => ({
                  name: item?.name,
                  icon: (
                    <DeploymentUnitOutlined
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#1677FF",
                      }}
                    />
                  ),
                  progressPercent: formatPercentage(Number(item?.score)),
                  value: formatPercentage(Number(item?.score)) + "%",
                })) ?? ([] as SegmentItem[]),
            repositories: formatPercentage(repoScoretotal ?? 0),
            repositoryItems:
              repoCompAgg
                ?.sort((a, b) => Number(a?.score) - Number(b?.score))
                ?.splice(0, 5)
                ?.map((item) => ({
                  name: item?.name,
                  icon: (
                    <DeploymentUnitOutlined
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#1677FF",
                      }}
                    />
                  ),
                  progressPercent: formatPercentage(Number(item?.score)),
                  value: formatPercentage(Number(item?.score)) + "%",
                })) ?? ([] as SegmentItem[]),
            namespaces: {
              ...formattedCompliance?.clustersreposcomp?.namespaces,
            },
            selectedCluster: {
              ...(formattedCompliance?.clustersreposcomp
                ?.selectedCluster as NamespaceItems),
            },
            isLoading: false,
          },
        });
      })
      .catch(() => {
        setFormattedCompliance({
          ...formattedCompliance,
          compliancestandards: {
            ...formattedCompliance.compliancestandards,
            isLoading: false,
          },
          clustersreposcomp: {
            ...formattedCompliance.clustersreposcomp,
            selectedCluster: {
              ...(formattedCompliance.clustersreposcomp.selectedCluster ?? {
                clusterItems: [],
                clusters: 0,
                isLoading: false,
              }),

              isLoading: false,
            },
            isLoading: false,
          },
        });
      });
  };

  const getClusterRepoCategoryData = async (
    reportComplianceReport: TReportComplianceReportData,
    clusterComplianceReport: TClusterComplianceReportData
  ) => {
    setFormattedCompliance({
      ...formattedCompliance,
      compliancestandards: {
        ...formattedCompliance.compliancestandards,
        isLoading: true,
      },
      clustersreposcomp: {
        ...formattedCompliance.clustersreposcomp,
        selectedCluster: {
          ...(formattedCompliance.clustersreposcomp.selectedCluster ?? {
            clusterItems: [],
            clusters: 0,
            isLoading: false,
          }),

          isLoading: false,
        },
        isLoading: false,
      },
    });
    Promise.all([
      getReportCategoryComplianceAggMatrix(reportComplianceReport),
      getClusterCategoryComplianceAggMatrix(clusterComplianceReport),
    ])
      .then((report) => {
        const repoCategoryReport = report?.[0]?.report;
        const clusterCategoryReport = report?.[1]?.report;
        const clusterCatScoretotal = report?.[1]?.totalScore ?? 0;
        const repoCatScoretotal = report?.[1]?.totalScore ?? 0;

        setFormattedCompliance({
          ...formattedCompliance,
          compliancestandards: {
            clusters: formatPercentage(clusterCatScoretotal),
            clusterItems:
              clusterCategoryReport
                ?.sort((a, b) => Number(a?.score) - Number(b?.score))
                ?.splice(0, 5)
                ?.map((item) => ({
                  name: item?.name,
                  icon: (
                    <DeploymentUnitOutlined
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#1677FF",
                      }}
                    />
                  ),
                  progressPercent: formatPercentage(Number(item?.score)),
                  value: formatPercentage(Number(item?.score)) + "%",
                })) ?? ([] as SegmentItem[]),
            repositories: formatPercentage(repoCatScoretotal),
            repositoryItems:
              repoCategoryReport
                ?.sort((a, b) => Number(a?.score) - Number(b?.score))
                ?.splice(0, 5)
                ?.map((item) => ({
                  name: item?.name,
                  icon: (
                    <DatabaseOutlined
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#1677FF",
                      }}
                    />
                  ),
                  progressPercent: formatPercentage(Number(item?.score)),
                  value: formatPercentage(Number(item?.score)) + "%",
                })) ?? ([] as SegmentItem[]),
            isLoading: false,
          },
        } as ComplianceItemMap);
      })
      .catch(() => {
        setFormattedCompliance({
          ...formattedCompliance,
          compliancestandards: {
            ...formattedCompliance.compliancestandards,
            isLoading: false,
          },
          clustersreposcomp: {
            ...formattedCompliance.clustersreposcomp,
            selectedCluster: {
              ...(formattedCompliance.clustersreposcomp.selectedCluster ?? {
                clusterItems: [],
                clusters: 0,
                isLoading: false,
              }),

              isLoading: false,
            },
            isLoading: false,
          },
        });
      });
  };

  const convertCategoryComplianceItemsMap = (
    aggCatCompRepoReport: TMayBe<TAggCompReport[]>,
    repoCatScoretotal: number,
    clusterCatScoretotal: number,
    aggCatCompClusterReport: TMayBe<TAggCompReport[]>,
    clusterCompAgg: TMayBe<TAggCompReport[]>,
    clusterScoretotal: number,
    repoCompAgg: TMayBe<TAggCompReport[]>,
    repoScoretotal: number,
    namespaceCompAgg: TMayBe<TAggCompReport[]>,
    nspTotalScore: number
  ): ComplianceItemMap => {
    const compDataLocal = {
      compliancestandards: {
        clusters: formatPercentage(clusterCatScoretotal),
        clusterItems:
          aggCatCompClusterReport
            ?.sort((a, b) => Number(a?.score) - Number(b?.score))
            ?.splice(0, 5)
            ?.map((item) => ({
              name: item?.name,
              icon: (
                <FileProtectOutlined
                  style={{ width: "20px", height: "20px", color: "#1677FF" }}
                />
              ),
              progressPercent: formatPercentage(Number(item?.score)),
              value: formatPercentage(Number(item?.score)) + "%",
              link: `#complianceStandardsReport/${item?.standardId}`,
            })) ?? ([] as SegmentItem[]),
        repositories: formatPercentage(repoCatScoretotal),
        repositoryItems:
          aggCatCompRepoReport
            ?.sort((a, b) => Number(a?.score) - Number(b?.score))
            ?.splice(0, 5)
            ?.map((item) => ({
              name: item?.name,
              icon: (
                <FileProtectOutlined
                  style={{ width: "20px", height: "20px", color: "#1677FF" }}
                />
              ),
              progressPercent: formatPercentage(Number(item?.score)),
              value: formatPercentage(Number(item?.score)) + "%",
              link: `#repositoryComplianceStandardReport/${item?.standardId}?standardId=${item?.standardId}`,
            })) ?? ([] as SegmentItem[]),
        clusterLink: "#complianceStandardsReport",
        repoLink: "#complianceStandardsReport",
        isLoading: false,
      },
      clustersreposcomp: {
        clusters: formatPercentage(clusterScoretotal),
        clusterItems:
          clusterCompAgg
            ?.sort((a, b) => Number(a?.score) - Number(b?.score))
            ?.splice(0, 5)
            ?.map((item) => ({
              name: item?.name,
              icon: (
                <DeploymentUnitOutlined
                  style={{ width: "20px", height: "20px", color: "#1677FF" }}
                />
              ),
              progressPercent: formatPercentage(Number(item?.score)),
              value: formatPercentage(Number(item?.score)) + "%",
              link: `#clusters/${item?.id}/compliance`,
            })) ?? ([] as SegmentItem[]),
        clusterLink: "#complianceStandardsReport",
        repoLink: "#complianceStandardsReport",
        repositories: formatPercentage(repoScoretotal),
        repositoryItems:
          repoCompAgg
            ?.sort((a, b) => Number(a?.score) - Number(b?.score))
            ?.splice(0, 5)
            ?.map((item) => ({
              name: item?.name,
              icon: (
                <DatabaseOutlined
                  style={{ width: "20px", height: "20px", color: "#1677FF" }}
                />
              ),
              progressPercent: formatPercentage(Number(item?.score)),
              value: formatPercentage(Number(item?.score)) + "%",
              link: `#clusters/policyReport/repositoryDetails?repo=${item?.repo}&repoId=${item?.id}`,
            })) ?? ([] as SegmentItem[]),
        namespaces: {
          clusters: formatPercentage(nspTotalScore ?? 0),
          clusterItems:
            namespaceCompAgg
              ?.sort((a, b) => Number(a?.score) - Number(b?.score))
              ?.splice(0, 5)
              ?.map((entry) => ({
                name: entry.name ?? "",
                icon: (
                  <DeploymentUnitOutlined
                    style={{ width: "20px", height: "20px", color: "#1677FF" }}
                  />
                ),
                progressPercent: formatPercentage(Number(entry?.score)),
                value: formatPercentage(Number(entry?.score)) + "%",
                link: `#complianceStandardsReport`,
              })) ?? [],
          clusterLink: "#complianceStandardsReport",
          repoLink: "#complianceStandardsReport",
        },
        selectedCluster: {
          clusters: formatPercentage(nspTotalScore ?? 0),
          clusterItems:
            namespaceCompAgg
              ?.sort((a, b) => Number(a?.score) - Number(b?.score))
              ?.splice(0, 5)
              ?.map((entry) => ({
                name: entry.name ?? "",
                icon: (
                  <DeploymentUnitOutlined
                    style={{ width: "20px", height: "20px", color: "#1677FF" }}
                  />
                ),
                progressPercent: formatPercentage(Number(entry?.score)),
                value: formatPercentage(Number(entry.score)) + "%",
                link: `#clusters/policyReport/namespace/${entry?.namespaceId}/compliance?clusterId=${entry?.id}&namespace=${entry?.name}`,
              })) ?? [],
          clusterLink: `#clusters/compliance`,
          repoLink: "#complianceStandardsReport",
          isLoading: false,
        },
        isLoading: false,
      },
    };
    return compDataLocal;
  };

  const getCompDataForCluster = async (
    clusterId: string,
    namespaceComplianceReport: TNamespaceComplianceReportData
  ) => {
    setFormattedCompliance({
      ...formattedCompliance,
      compliancestandards: {
        ...formattedCompliance.compliancestandards,
        isLoading: false,
      },
      clustersreposcomp: {
        ...formattedCompliance.clustersreposcomp,
        selectedCluster: {
          ...(formattedCompliance.clustersreposcomp.selectedCluster ?? {
            clusterItems: [],
            clusters: 0,
            isLoading: true,
          }),

          isLoading: true,
        },
        isLoading: false,
      },
    });
    try {
      const response = await getNamespaceComplianceReport(
        clusterId,
        namespaceComplianceReport
      );
      if (response) {
        const { report, totalScore } = response;
        setFormattedCompliance({
          ...formattedCompliance,
          clustersreposcomp: {
            ...formattedCompliance?.clustersreposcomp,
            selectedCluster: {
              clusters: formatPercentage(totalScore ?? 0),
              clusterItems:
                report
                  ?.sort((a, b) => Number(a?.score) - Number(b?.score))
                  ?.splice(0, 5)
                  ?.map((entry) => ({
                    name: entry.name ?? "",
                    icon: (
                      <DeploymentUnitOutlined
                        style={{
                          width: "20px",
                          height: "20px",
                          color: "#1677FF",
                        }}
                      />
                    ),
                    progressPercent: formatPercentage(Number(entry?.score)),
                    value: String(entry.score) + "%",
                    link: `#clusters/policyReport/namespace/${entry?.namespaceId}/compliance?clusterId=${entry?.id}&namespace=${entry?.name}`,
                  })) ?? [],
              clusterLink:
                clusterId === "All Clusters"
                  ? `#clusters/compliance`
                  : `#clusters/${clusterId !== "All Clusters"}/compliance`,
              repoLink: "#complianceStandardsReport",
            },
            isLoading: false,
          },
        } as ComplianceItemMap);
      }

      return formattedCompliance;
    } catch (ex) {
      console.log(ex);
      setFormattedCompliance({
        ...formattedCompliance,
        compliancestandards: {
          ...formattedCompliance.compliancestandards,
          isLoading: false,
        },
        clustersreposcomp: {
          ...formattedCompliance.clustersreposcomp,
          selectedCluster: {
            ...(formattedCompliance.clustersreposcomp.selectedCluster ?? {
              clusterItems: [],
              clusters: 0,
              isLoading: false,
            }),

            isLoading: false,
          },
          isLoading: false,
        },
      });
    }
  };

  const getCompDataForAllClusters = async (
    namespaceComplianceReport: TNamespaceComplianceReportData
  ) => {
    try {
      setFormattedCompliance({
        ...formattedCompliance,
        compliancestandards: {
          ...formattedCompliance.compliancestandards,
          isLoading: false,
        },
        clustersreposcomp: {
          ...formattedCompliance.clustersreposcomp,
          selectedCluster: {
            ...(formattedCompliance?.clustersreposcomp?.selectedCluster ?? {
              clusterItems: [],
              clusters: 0,
              isLoading: true,
            }),

            isLoading: false,
          },
          namespaces: {
            ...formattedCompliance.clustersreposcomp.namespaces,
            isLoading: true,
          },
          isLoading: false,
        },
      });
      const response = await getNamespaceComplianceReport(
        "All Clusters",
        namespaceComplianceReport
      );
      if (response) {
        const { report, totalScore } = response;
        setFormattedCompliance({
          ...formattedCompliance,
          clustersreposcomp: {
            ...formattedCompliance?.clustersreposcomp,
            namespaces: {
              clusters: formatPercentage(totalScore ?? 0),
              clusterItems:
                report
                  ?.sort((a, b) => Number(a?.score) - Number(b?.score))
                  ?.splice(0, 5)
                  ?.map((entry) => ({
                    name: entry.name ?? "",
                    icon: (
                      <DeploymentUnitOutlined
                        style={{
                          width: "20px",
                          height: "20px",
                          color: "#1677FF",
                        }}
                      />
                    ),
                    progressPercent: formatPercentage(Number(entry?.score)),
                    value: formatPercentage(Number(entry?.score)) + "%",
                    link: `#complianceStandardsReport`,
                  })) ?? [],
              clusterLink: "#complianceStandardsReport",
              repoLink: "#complianceStandardsReport",
              isLoading: false,
            },
            isLoading: false,
          },
        } as ComplianceItemMap);
      }
      return formattedCompliance;
    } catch (ex) {
      console.log(ex);
      setFormattedCompliance({
        ...formattedCompliance,
        compliancestandards: {
          ...formattedCompliance.compliancestandards,
          isLoading: false,
        },
        clustersreposcomp: {
          ...formattedCompliance.clustersreposcomp,
          selectedCluster: {
            ...(formattedCompliance?.clustersreposcomp?.selectedCluster ?? {
              clusterItems: [],
              clusters: 0,
              isLoading: false,
            }),

            isLoading: false,
          },
          namespaces: {
            ...formattedCompliance?.clustersreposcomp?.namespaces,
            isLoading: false,
          },
          isLoading: false,
        },
      });
    }
  };

  return {
    formattedCompliance,
    getComplianceData,
    getCompDataForCluster,
    getClusterRepoCompData,
    getClusterRepoCategoryData,
    getCompDataForAllClusters,
  };
};
