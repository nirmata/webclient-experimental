import useQuery from "../../../components/connector/use-query";
import TNamespaceComplianceReport from "../../../nirmata-model-schema/Policies.TNamespaceComplianceReport";

export const useGetNamespaceComplianceData = () => {
  const [
    { loading: namespaceComplianceLoading, data: namespaceComplianceData },
    { onLoad: onNamespaceComplianceReportLoad },
  ] = useQuery<TNamespaceComplianceReport[]>();

  const loadNamespaceComplianceData = () => {
    return onNamespaceComplianceReportLoad(
      "/policies/api/namespaceComplianceReport?fields=ancestors,id,parent,standardName,standardId,score,total,pass&sort=score,asc"
    );
  };

  return {
    namespaceComplianceLoading,
    namespaceComplianceData,
    loadNamespaceComplianceData,
  };
};
