import { useEffect, useState } from "react";
import { DeploymentUnitOutlined, DatabaseOutlined } from "@ant-design/icons";
import { convertToKFormat } from "../utils/utils";
import useQuery from "../../../components/connector/use-query";
import { MetricEntry } from "../../../components/dashboard/types";
import { ResourceKindTag } from "../../../components/componentsV2/ResourceKind/resource-kind";
import TCluster from "../../../nirmata-model-schema/Config.TCluster";
import TNamespace from "../../../nirmata-model-schema/Cluster.TNamespace";
import { RepositoryBase } from "../types";

const useGetInventoryData = () => {
  const [formattedInventory, setFormattedInventory] = useState<MetricEntry[]>(
    []
  );
  const [clusterResponse, clusterAction] = useQuery<TCluster[]>();
  const [namespaceResponse, namespaceAction] = useQuery<TNamespace[]>();
  const [repositoryResponse, repositoryActions] = useQuery<RepositoryBase[]>();

  const loadingInventory =
    repositoryResponse?.loading ||
    clusterResponse?.loading ||
    namespaceResponse?.loading;

  useEffect(() => {
    const fetchData = async () => {
      const [clusterData, namespaceData, repositoryData] = await Promise.all([
        clusterAction.onLoad("/policies/api/namespaces?fields=clusterName"),
        namespaceAction.onLoad(
          "/policies/api/getPolicyReportNamespaceTable?filter=namespace,ne,null&fields=id"
        ),
        repositoryActions.onLoad("/policies/api/repositories?fields=id"),
      ]);

      const uniqueClusterNames = Array?.from(
        new Set(clusterData?.data?.map((item: any) => item?.clusterName))
      );

      const inventoryClusterCount = uniqueClusterNames.length;
      const inventoryNamespaceCount = namespaceData?.data?.entries?.length ?? 0;
      const inventoryRepositoryCount = repositoryData?.data?.length ?? 0;

      setFormattedInventory([
        {
          title: "Clusters",
          value: convertToKFormat(inventoryClusterCount),
          icon: (
            <DeploymentUnitOutlined
              style={{ height: "24px", width: "24px", color: "#00000073" }}
            />
          ),
          link: "#clustersPolicyReport/clusters",
        },
        {
          title: "Namespaces",
          value: convertToKFormat(inventoryNamespaceCount),
          icon: (
            <ResourceKindTag
              kind={"namespace"}
              style={{ color: "#00000073", height: "22px", width: "30px" }}
            />
          ),
          link: "#clustersPolicyReport/namespaces",
        },
        {
          title: "Repositories",
          value: convertToKFormat(inventoryRepositoryCount),
          icon: (
            <DatabaseOutlined
              style={{ height: "24px", width: "24px", color: "#00000073" }}
            />
          ),
          link: "#repositories",
        },
      ]);
    };

    fetchData();
  }, []);

  return { formattedInventory, loadingInventory };
};

export default useGetInventoryData;
