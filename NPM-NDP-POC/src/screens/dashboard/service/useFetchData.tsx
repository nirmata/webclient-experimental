import { useCallback } from 'react';
import { useGetClusterPolicyReport } from './useGetClusterPolicyReport';
import { useGetDashboardData } from './useGetDashboardData';
import { useGetNamespacePolicyReport } from './useGetNamespacePolicyReport';

export const useFetchData = () => {
  const { loadClusterPolicyReport } = useGetClusterPolicyReport();
  const { loadDashboardData } = useGetDashboardData();
  const { loadNamespacePolicyReport } = useGetNamespacePolicyReport();
  const fetchData = useCallback(async () => {
    try {
      const [clusterPolicyDataResponse, dashboardDataResponseData, namespacePolicyDataResponse] = await Promise.all([
        loadClusterPolicyReport(),
        loadDashboardData(),
        loadNamespacePolicyReport(),
      ]);

      const clusterPolicyEntries = clusterPolicyDataResponse?.data?.entries ?? [];
      const dashboardData = dashboardDataResponseData?.data ?? null;
      const namespacePolicyEntries = namespacePolicyDataResponse?.data?.entries ?? [];
      return {
        clusterPolicyEntries,
        dashboardData,
        namespacePolicyEntries,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        clusterPolicyEntries: [],
        dashboardData: null,
        namespacePolicyEntries: [],
      };
    }
  }, []);

  return { fetchData };
};
