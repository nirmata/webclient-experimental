import { useGetClusterCache } from '../../../recoil/globalCache';
import { useGetClusterComplianceReport } from './useGetClusterComplianceData';
import { getComplianceWithScore, getUniquekyes } from '../utils/utils';
import TMayBe from '../../../nirmata-model-schema/TMayBe';
import TClusterComplianceReport from '../../../nirmata-model-schema/Cluster.TClusterComplianceReport';

export type TAggCompReport = {
  name: string;
  id: string;
  total: number;
  pass: number;
  score?: number;
  standardId?: string[];
  repoId?: string[];
  namespaceId?: string;
  repo?: string[];
  clusterId?: string;
};

export const useGetClusterComplianceAggMatrix = () => {
  const { clusterComplianceLoading } = useGetClusterComplianceReport();
  const clusterList = useGetClusterCache();

  const getClusterComplianceAggMatrix = async (
    clusterComplianceReport: TMayBe<{
      data?: TMayBe<TClusterComplianceReport[]>;
    }>
  ) => {
    // const clusterComplianceReport = await getClusterComplianceReport();
    if (Boolean(clusterComplianceReport?.data)) {
      const uniqueClusterIds = getUniquekyes(
        clusterComplianceReport?.data?.map((item) => item?.parent?.id) as string[]
      );
      const temp = uniqueClusterIds.map((item) => {
        return {
          name: clusterList?.filter((cluster) => cluster?.id === item)?.[0]?.name,
          id: item,
          total: clusterComplianceReport?.data
            ?.filter((cluster) => cluster?.parent?.id === item)
            .reduce((prev, curr) => Number(prev) + Number(curr?.total ?? 0), 0),
          pass: clusterComplianceReport?.data
            ?.filter((cluster) => cluster?.parent?.id === item)
            .reduce((prev, curr) => Number(prev) + Number(curr?.pass ?? 0), 0),
          standardId: clusterComplianceReport?.data?.map((item) => item?.standardId) as string[]
        };
      }, []);
      const output = getComplianceWithScore(temp as TAggCompReport[]);
      const clusterTotalScore =
        (Number(output?.reduce((prev, curr) => Number(prev) + Number(curr?.pass), 0)) /
          Number(output?.reduce((prev, curr) => prev + curr?.total, 0))) *
        100;
      return { report: output, totalScore: clusterTotalScore };
    }
  };

  return { clusterComplianceLoading, getClusterComplianceAggMatrix };
};
