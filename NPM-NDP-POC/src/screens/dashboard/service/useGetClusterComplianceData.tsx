import useQuery from '../../../components/connector/use-query';
import TClusterComplianceReport from '../../../nirmata-model-schema/Cluster.TClusterComplianceReport';

export const useGetClusterComplianceReport = () => {
  const [
    { loading: clusterComplianceLoading, data: clusterComplianceData },
    { onLoad: onClusterComplianceReportLoad }
  ] = useQuery<TClusterComplianceReport[]>();

  const getClusterComplianceReport = () => {
    return onClusterComplianceReportLoad(
      '/policies/api/ClusterComplianceReport?fields=ancestors,id,parent,standardName,standardId,score,total,pass&sort=score,asc'
    );
  };

  return { clusterComplianceLoading, clusterComplianceData, getClusterComplianceReport };
};
