import useQuery from "../../../components/connector/use-query";
import TRepositoryComplianceReport from "../../../nirmata-model-schema/Policies.TRepositoryComplianceReport";
import TMayBe from "../../../nirmata-model-schema/TMayBe";

export const useGetRepoComplianceReport = () => {
  const [
    { loading: repositoryComplianceLoading, data: repoComplianceData },
    { onLoad: onRepositoryComplianceReportLoad },
  ] = useQuery<TRepositoryComplianceReport[]>();

  const loadRepoComplianceReport = (): Promise<
    TMayBe<{
      data?: TMayBe<TRepositoryComplianceReport[]>;
    }>
  > => {
    return onRepositoryComplianceReportLoad(
      "/policies/api/RepositoryComplianceReport?fields=ancestors,id,parent,standardName,standardId,score,total,pass&sort=score,asc"
    );
  };

  return {
    repositoryComplianceLoading,
    repoComplianceData,
    loadRepoComplianceReport,
  };
};
