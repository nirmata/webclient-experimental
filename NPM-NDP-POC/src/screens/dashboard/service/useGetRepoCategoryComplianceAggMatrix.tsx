import { useGetRepoComplianceReport } from "./useGetRepoComplianceData";
import { TAggCompReport } from "./useGetClusterComplianceAggMatrix";
import TMayBe from "../../../nirmata-model-schema/TMayBe";
import TRepositoryComplianceReport from "../../../nirmata-model-schema/Policies.TRepositoryComplianceReport";
import { getUniquekyes } from "../utils/utils";

export const useGetRepoCategoryComplianceAggMatrix = () => {
  const { repositoryComplianceLoading: catgoryRepositoryComplianceLoading } =
    useGetRepoComplianceReport();

  const getReportCategoryComplianceAggMatrix = async (
    reportComplianceReport: TMayBe<{
      data?: TMayBe<TRepositoryComplianceReport[]>;
    }>
  ) => {
    if (Boolean(reportComplianceReport?.data)) {
      const uniqueStdIds = getUniquekyes(
        reportComplianceReport?.data?.map((key) => key?.standardId as string) ??
          []
      );
      const temp1: TAggCompReport[] = uniqueStdIds.map((item) => ({
        id: item,
        name:
          reportComplianceReport?.data?.find(
            (reportObj) => reportObj.standardId === item
          )?.standardName ?? "",
        pass:
          reportComplianceReport?.data
            ?.filter((filteredItem) => filteredItem.standardId === item)
            ?.reduce((acc, entry) => acc + (entry?.pass ?? 0), 0) ?? 0,
        total:
          reportComplianceReport?.data
            ?.filter((filteredItem) => filteredItem.standardId === item)
            ?.reduce((acc, entry) => acc + (entry?.total ?? 0), 0) ?? 0,
        score:
          Number(
            ((reportComplianceReport?.data
              ?.filter((filteredItem) => filteredItem.standardId === item)
              ?.reduce((acc, entry) => acc + (entry?.pass ?? 0), 0) ?? 0) /
              (reportComplianceReport?.data
                ?.filter((filteredItem) => filteredItem.standardId === item)
                ?.reduce((acc, entry) => acc + (entry?.total ?? 0), 0) ?? 1)) *
              100
          ) ?? 0,
        standardId: [item],
      }));

      const sortedResult = temp1?.sort(
        (a, b) => Number(a?.score) ?? 0 - Number(b?.score) ?? 0
      );

      const categoryRepoTotalScore =
        (Number(
          sortedResult?.reduce(
            (prev, curr) => Number(prev) + Number(curr?.pass),
            0
          )
        ) /
          Number(sortedResult?.reduce((prev, curr) => prev + curr?.total, 0))) *
        100;
      return { report: sortedResult, totalScore: categoryRepoTotalScore };
    }
  };

  return {
    catgoryRepositoryComplianceLoading,
    getReportCategoryComplianceAggMatrix,
  };
};
