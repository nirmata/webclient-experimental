import TClusterComplianceReport from '../../../nirmata-model-schema/Cluster.TClusterComplianceReport';
import TMayBe from '../../../nirmata-model-schema/TMayBe';
import { getUniquekyes } from '../utils/utils';
import { TAggCompReport } from './useGetClusterComplianceAggMatrix';
import { useGetClusterComplianceReport } from './useGetClusterComplianceData';

export const useGetClusterCategoryComplianceAggMatrix = () => {
  const { clusterComplianceLoading: categoryClusterComplianceLoading } = useGetClusterComplianceReport();

  const getClusterCategoryComplianceAggMatrix = async (
    clusterComplianceReport: TMayBe<{
      data?: TMayBe<TClusterComplianceReport[]>;
    }>
  ) => {
    if (Boolean(clusterComplianceReport?.data)) {
      const uniqueStdIds = getUniquekyes(clusterComplianceReport?.data?.map((key) => (key?.standardId as string)) ?? []);
      const temp1: TAggCompReport[] = uniqueStdIds.map((item) => ({
        id: item,
        name: clusterComplianceReport?.data?.find((reportObj) => (reportObj.standardId === item))?.standardName ?? '',
        pass: clusterComplianceReport?.data?.filter((filteredItem) => filteredItem.standardId === item)?.reduce((acc, entry) => acc + (entry?.pass ?? 0), 0) ?? 0,
        total: clusterComplianceReport?.data?.filter((filteredItem) => filteredItem.standardId === item)?.reduce((acc, entry) => acc + (entry?.total ?? 0), 0) ?? 0,
        score: Number(((clusterComplianceReport?.data?.filter((filteredItem) => filteredItem.standardId === item)?.reduce((acc, entry) => acc + (entry?.pass ?? 0), 0) ?? 0) / (clusterComplianceReport?.data?.filter((filteredItem) => filteredItem.standardId === item)?.reduce((acc, entry) => acc + (entry?.total ?? 0), 0) ?? 1)) * 100) ?? 0,
        standardId: [item]
      }))

      const sorted = temp1?.sort((a, b) => Number(a?.score) ?? 0 - Number(b?.score) ?? 0);
      const categoryTotalScore =
        (Number(temp1?.reduce((prev, curr) => Number(prev) + Number(curr?.pass), 0)) /
          Number(temp1?.reduce((prev, curr) => prev + curr?.total, 0))) *
        100;
      return { report: sorted, totalScore: categoryTotalScore };
    }
    return null;
  };

  return {
    categoryClusterComplianceLoading,
    getClusterCategoryComplianceAggMatrix
  };
};
