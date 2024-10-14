import { useGetRepoComplianceReport } from './useGetRepoComplianceData';
import { useGetClusterComplianceReport } from './useGetClusterComplianceData';
import { useGetNamespaceComplianceData } from './useGetNamespaceComplianceData';

export const useGetAllcomplianceReport = () => {
  const { repositoryComplianceLoading: catgoryRepositoryComplianceLoading, loadRepoComplianceReport } =
    useGetRepoComplianceReport();
  const { clusterComplianceLoading: categoryClusterComplianceLoading, getClusterComplianceReport } =
    useGetClusterComplianceReport();
  const { namespaceComplianceLoading, loadNamespaceComplianceData } = useGetNamespaceComplianceData();
  const allcomplianceReportLoading =
    catgoryRepositoryComplianceLoading || categoryClusterComplianceLoading || namespaceComplianceLoading;
  const fetchAllComplianceReport = async () => {
    return Promise.all([loadRepoComplianceReport(), getClusterComplianceReport(), loadNamespaceComplianceData()]);
  };
  return {
    allcomplianceReportLoading,
    fetchAllComplianceReport
  };
};
