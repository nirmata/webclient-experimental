import { useEffect, useState } from "react";
import { DeploymentUnitOutlined, DatabaseOutlined } from "@ant-design/icons";
import TNamespace from "../../../nirmata-model-schema/Cluster.TNamespace";
import { convertToKFormat } from "../utils/utils";
import {
  ClusterPolicyReportEntry,
  MetricEntry,
} from "../../../components/dashboard/types";
import useQuery from "../../../components/connector/use-query";
import { RepositoryBase, Tenant } from "../types";
import { ResourceKindTag } from "../../../components/policy-report/resource-kind-tag";
import getCookie from "../../../components/connector/get-cookie";

const useGetInventoryData = () => {
  const [formattedInventory, setFormattedInventory] = useState<MetricEntry[]>(
    []
  );
  const [totalRepositories, setTotalRepositories] = useState<number>(0);
  const [clusterResponse, clusterAction] = useQuery<{
    count: number;
    start: number;
    total: number;
    entries?: ClusterPolicyReportEntry[];
  }>();
  const [namespaceResponse, namespaceAction] = useQuery<{
    count: number;
    start: number;
    total: number;
    entries?: TNamespace[];
  }>();
  const [repositoryResponse, repositoryActions] = useQuery<{
    count: number;
    start: number;
    total: number;
    entries?: RepositoryBase[];
  }>();
  const userData = getCookie("nirmata.session.userData");
  const tenantData = JSON.parse(decodeURIComponent(userData ?? "")) as Tenant;
  const loadingInventory =
    repositoryResponse?.loading ||
    clusterResponse?.loading ||
    namespaceResponse?.loading;

  useEffect(() => {
    const fetchData = async () => {
      const [clusterData, namespaceData, repositoryData] = await Promise.all([
        clusterAction.onLoad(
          "/policies/api/getPolicyReportClusterTable?filter=clusterName,ne,null&fields=clusterName"
        ),
        namespaceAction.onLoad(
          "/policies/api/getPolicyReportNamespaceTable?pagination=true&start=0&count=10&filter=namespace,ne,null&fields=id"
        ),
        repositoryActions.onLoad(
          "/policies/api/repositories?paginate=true&start=0&count=10&fields=id"
        ),
      ]);

      const inventoryClusterCount = clusterData?.data?.entries?.length ?? 0;
      const inventoryNamespaceCount = namespaceData?.data?.total ?? 0;
      const inventoryRepositoryCount = repositoryData?.data?.total ?? 0;
      setTotalRepositories(inventoryRepositoryCount);

      setFormattedInventory([
        {
          title: "Clusters",
          value: convertToKFormat(inventoryClusterCount),
          icon: (
            <DeploymentUnitOutlined
              style={{ height: "24px", width: "24px", color: "#00000073" }}
            />
          ),
          link:
            tenantData?.role === "devops"
              ? "/webclient/#clustersPolicyReport/clusters"
              : "#clusters",
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
          link: "/webclient/#clustersPolicyReport/namespaces",
        },
        {
          title: "Repositories",
          value: convertToKFormat(inventoryRepositoryCount),
          icon: (
            <DatabaseOutlined
              style={{ height: "24px", width: "24px", color: "#00000073" }}
            />
          ),
          link:
            tenantData?.role === "devops"
              ? "/webclient/#clustersPolicyReport/repositories"
              : "#repositories",
        },
      ]);
    };

    fetchData();
  }, []);

  return { formattedInventory, loadingInventory, totalRepositories };
};

export default useGetInventoryData;
