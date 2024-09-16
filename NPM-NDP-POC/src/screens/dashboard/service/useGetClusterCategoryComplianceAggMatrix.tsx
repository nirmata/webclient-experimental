import TMayBe from "../../../components/connector/TMayBe";
import TClusterComplianceReport from "../../../nirmata-model-schema/Cluster.TClusterComplianceReport";
import { TAggCompReport } from "./useGetClusterComplianceAggMatrix";
import { useGetClusterComplianceReport } from "./useGetClusterComplianceData";

export const useGetClusterCategoryComplianceAggMatrix = () => {
  const { clusterComplianceLoading: categoryClusterComplianceLoading } =
    useGetClusterComplianceReport();

  const getClusterCategoryComplianceAggMatrix = async (
    clusterComplianceReport: TMayBe<{
      data?: TMayBe<TClusterComplianceReport[]>;
    }>
  ) => {
    // const clusterComplianceReport = await getClusterComplianceReport();
    if (Boolean(clusterComplianceReport?.data)) {
      const temp: TAggCompReport[] = clusterComplianceReport?.data?.map(
        (item) => ({
          id: item?.standardId,
          name: item?.standardName,
          pass: item?.pass,
          total: item?.total,
          score: item?.score,
          standardId: item?.standardId,
        })
      ) as TAggCompReport[];
      const sortedTop5 = temp?.sort(
        (a, b) => Number(a?.score) ?? 0 - Number(b?.score) ?? 0
      );
      const categoryTotalScore =
        (Number(
          temp?.reduce((prev, curr) => Number(prev) + Number(curr?.pass), 0)
        ) /
          Number(temp?.reduce((prev, curr) => prev + curr?.total, 0))) *
        100;
      return { report: sortedTop5, totalScore: categoryTotalScore };
    }
    return null;
  };

  return {
    categoryClusterComplianceLoading,
    getClusterCategoryComplianceAggMatrix,
  };
};
