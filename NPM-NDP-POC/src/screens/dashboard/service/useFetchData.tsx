import { useCallback } from 'react';
import { useGetClusterPolicyReport } from './useGetClusterPolicyReport';
import { useGetDashboardData } from './useGetDashboardData';
import { useGetNamespacePolicyReport } from './useGetNamespacePolicyReport';
import { useGetPolicyData } from './useGetPolicyData';

export const useFetchData = () => {
  const { loadClusterPolicyReport } = useGetClusterPolicyReport();
  const { loadDashboardData } = useGetDashboardData();
  const { loadNamespacePolicyReport } = useGetNamespacePolicyReport();
  const { loadPolicyData } = useGetPolicyData();
  const fetchData = useCallback(async () => {
    try {
      const [clusterPolicyDataResponse, dashboardDataResponseData, namespacePolicyDataResponse, policyDataResponse] = await Promise.all([
        loadClusterPolicyReport(),
        loadDashboardData(),
        loadNamespacePolicyReport(),
        loadPolicyData()
      ]);

      const clusterPolicyEntries = clusterPolicyDataResponse?.data?.entries ?? [];
      const dashboardData = dashboardDataResponseData?.data ?? null;
      const namespacePolicyEntries = namespacePolicyDataResponse?.data?.entries ?? [];
      const policyData = policyDataResponse?.data ?? []
      return {
        clusterPolicyEntries,
        dashboardData,
        namespacePolicyEntries,
        policyData
      };
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        clusterPolicyEntries: [],
        dashboardData: null,
        namespacePolicyEntries: [],
        policyData: null
      };
    }
  }, []);

  return { fetchData };
};
