import TMayBe from "../../../nirmata-model-schema/TMayBe";
import useQuery from "../../../components/connector/use-query";
import { ClusterPolicyReportEntry } from "../../../components/dashboard/types";

export const useGetNamespacePolicyReport = () => {
  const [
    { loading: namespacePolicyReportLoading, data: namespacePolicyReportData },
    { onLoad: onNamespacePolicyReportLoad },
  ] = useQuery<{
    count: number;
    start: number;
    total: number;
    entries?: ClusterPolicyReportEntry[];
  }>();

  const baseUrl =
    "/policies/api/getPolicyReportNamespaceTable?filter=namespace,ne,null&sortBy=resultCount.fail,desc";

  const loadNamespacePolicyReport = (): Promise<
    TMayBe<{
      data?: TMayBe<{
        count: number;
        start: number;
        total: number;
        entries?: ClusterPolicyReportEntry[];
      }>;
    }>
  > => {
    return onNamespacePolicyReportLoad(baseUrl);
  };

  return {
    namespacePolicyReportLoading,
    namespacePolicyReportData,
    loadNamespacePolicyReport,
  };
};
