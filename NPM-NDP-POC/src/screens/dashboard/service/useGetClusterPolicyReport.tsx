import useQuery from '../../../components/connector/use-query';
import { ClusterPolicyReportEntry } from '../../../components/dashboard/types';
import TMayBe from '../../../nirmata-model-schema/TMayBe';

export const useGetClusterPolicyReport = () => {
  const [
    { loading: clusterPolicyReportLoading, data: clusterPolicyReportData },
    { onLoad: onClusterPolicyReportLoad }
  ] = useQuery<{ count: number; start: number; total: number; entries?: ClusterPolicyReportEntry[] }>();

  const loadClusterPolicyReport = (): Promise<
    TMayBe<{ data?: TMayBe<{ count: number; start: number; total: number; entries?: ClusterPolicyReportEntry[] }> }>
  > => {
    return onClusterPolicyReportLoad(
      '/policies/api/getPolicyReportClusterTable?filter=clusterName,ne,null&sortBy=resultCount.fail,desc'
    );
  };

  return { clusterPolicyReportLoading, clusterPolicyReportData, loadClusterPolicyReport };
};
