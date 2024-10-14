import TKubernetesCluster from "../../../nirmata-model-schema/Cluster.TKubernetesCluster";
import TMayBe from "../../../nirmata-model-schema/TMayBe";
import useQuery from "../../../components/connector/use-query";

export const useGetKubernetesClusterInfoByClusterId = () => {
  const [{ data }, { onLoad }] = useQuery<TMayBe<TKubernetesCluster[]>>();
  const fetchData = (clusterId: string) => {
    return onLoad(
      `/cluster/api/KubernetesCluster/${clusterId}/namespace?fields=id,ancestors,labels,name`
    );
  };
  return { fetchData, kubernetesClusterDataByClusterId: data };
};
