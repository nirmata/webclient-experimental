import useQuery from '../../../components/connector/use-query';
import { MModernDashboardData } from '../../../components/dashboard/types';
import TMayBe from '../../../nirmata-model-schema/TMayBe';

export const useGetDashboardData = () => {
  const [{ loading: dashboardLoading, data: dashboardData }, { onLoad: onDashboardLoad }] =
    useQuery<MModernDashboardData>();

  const loadDashboardData = (): Promise<TMayBe<{ data?: TMayBe<MModernDashboardData> }>> => {
    return onDashboardLoad('/policies/api/getModernDashboardData');
  };

  return { dashboardLoading, dashboardData, loadDashboardData };
};
