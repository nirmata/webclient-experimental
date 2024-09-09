import { getComplianceWithScore, getUniquekyes } from "../utils/utils";
import { useGetRepoComplianceReport } from "./useGetRepoComplianceData";
import { TAggCompReport } from "./useGetClusterComplianceAggMatrix";
import TMayBe from "../../../components/connector/TMayBe";
import TRepositoryComplianceReport from "../../../nirmata-model-schema/Policies.TRepositoryComplianceReport";
import { useGetRepoCache } from "../../../recoil/globalCache";

export const useGetRepoComplianceAggMatrix = () => {
  const { repositoryComplianceLoading } = useGetRepoComplianceReport();
  const repoList = useGetRepoCache();

  const getRepoComplianceAggMatrix = async (
    repoComplianceData: TMayBe<{
      data?: TMayBe<TRepositoryComplianceReport[]>;
    }>
  ) => {
    // const repoComplianceData = await loadRepoComplianceReport();
    if (repoComplianceData?.data) {
      const uniqueClusterIds = getUniquekyes(
        repoComplianceData?.data?.map((item) => item?.parent?.id) as string[]
      );
      const temp = uniqueClusterIds.map((item) => {
        return {
          name: repoList?.filter((repo) => repo?.id === item)?.[0]?.name,
          id: item,
          total: repoComplianceData?.data
            ?.filter((repo) => repo?.parent?.id === item)
            .reduce((prev, curr) => Number(prev) + Number(curr?.total ?? 0), 0),
          pass: repoComplianceData?.data
            ?.filter((repo) => repo?.parent?.id === item)
            ?.reduce((prev, curr) => Number(prev) + Number(curr?.pass ?? 0), 0),
          repoId: repoComplianceData?.data?.map(
            (item) => item?.ancestors?.[0]?.id
          ),
          repo: repoList?.filter((repo) => repo?.id === item)?.[0]?.gitUrl,
        };
      }, []);
      const output = getComplianceWithScore(temp as TAggCompReport[]);
      const repoTotalScore =
        (Number(
          output?.reduce((prev, curr) => Number(prev) + Number(curr?.pass), 0)
        ) /
          Number(output?.reduce((prev, curr) => prev + curr?.total, 0))) *
        100;
      return { report: output, totalScore: repoTotalScore };
    }
    return null;
  };

  return { repositoryComplianceLoading, getRepoComplianceAggMatrix };
};
