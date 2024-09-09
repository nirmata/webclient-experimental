import { useGetRepoComplianceReport } from "./useGetRepoComplianceData";
import { TAggCompReport } from "./useGetClusterComplianceAggMatrix";
import TMayBe from "../../../components/connector/TMayBe";
import TRepositoryComplianceReport from "../../../nirmata-model-schema/Policies.TRepositoryComplianceReport";

export const useGetRepoCategoryComplianceAggMatrix = () => {
  const { repositoryComplianceLoading: catgoryRepositoryComplianceLoading } =
    useGetRepoComplianceReport();

  const getReportCategoryComplianceAggMatrix = async (
    reportComplianceReport: TMayBe<{
      data?: TMayBe<TRepositoryComplianceReport[]>;
    }>
  ) => {
    // const reportComplianceReport = await loadRepoComplianceReport();
    if (Boolean(reportComplianceReport?.data)) {
      const temp: TAggCompReport[] = reportComplianceReport?.data?.map(
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

      const categoryRepoTotalScore =
        (Number(
          sortedTop5?.reduce(
            (prev, curr) => Number(prev) + Number(curr?.pass),
            0
          )
        ) /
          Number(sortedTop5?.reduce((prev, curr) => prev + curr?.total, 0))) *
        100;
      return { report: sortedTop5, totalScore: categoryRepoTotalScore };
    }
  };

  return {
    catgoryRepositoryComplianceLoading,
    getReportCategoryComplianceAggMatrix,
  };
};
