import { useEffect } from "react";
import { ClusterPolicyReportEntry } from "../../../components/dashboard/types";
import useQuery from "../../../components/connector/use-query";

export const useGetNamespaceViolation = (clusterId: string) => {
  const [
    { data: policyReportNamespaceData, loading: namespaceLoading },
    { onLoad: namespaceOnLoad },
  ] = useQuery<{
    count: number;
    start: number;
    total: number;
    entries: ClusterPolicyReportEntry[];
  }>();

  useEffect(() => {
    let url =
      "/policies/api/getPolicyReportNamespaceTable?filter=namespace,ne,null&pagination=true&start=0&count=5&filter=namespace,ne,null&sortBy=resultCount.fail,desc";
    if (clusterId !== "All Clusters") {
      url += `&filter=clusterId,eq,${clusterId}`;
    }

    namespaceOnLoad(url);
  }, [clusterId]);

  return { policyReportNamespaceData, namespaceLoading };
};
