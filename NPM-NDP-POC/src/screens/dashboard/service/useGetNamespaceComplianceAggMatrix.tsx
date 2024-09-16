import TMayBe from "../../../components/connector/TMayBe";
import TNamespaceComplianceReport from "../../../nirmata-model-schema/Policies.TNamespaceComplianceReport";
import {
  useGetClusterCache,
  useGetNamespacesCache,
} from "../../../recoil/globalCache";
import { getComplianceWithScore, getUniquekyes } from "../utils/utils";
import { TAggCompReport } from "./useGetClusterComplianceAggMatrix";
import { useGetNamespaceComplianceData } from "./useGetNamespaceComplianceData";
export type TOptions = { label: string; value: string };

export const useGetNamespaceComplianceAggMatrix = () => {
  const { namespaceComplianceLoading } = useGetNamespaceComplianceData();

  const namepsaceList = useGetNamespacesCache();
  const clusterList = useGetClusterCache();

  const getNamespaceComplianceReport = async (
    clusterId: string,
    namespaceComplianceReport: TMayBe<{
      data?: TMayBe<TNamespaceComplianceReport[]>;
    }>
  ) => {
    // const namespaceComplianceReport = await loadNamespaceComplianceData();
    if (Boolean(namespaceComplianceReport?.data)) {
      const uniqueNamespaceIds =
        clusterId === "All Clusters"
          ? getUniquekyes(
              namespaceComplianceReport?.data?.map(
                (item) => item?.parent?.id
              ) as string[]
            )
          : getUniquekyes(
              namespaceComplianceReport?.data
                ?.filter((fil) => fil.ancestors?.[1]?.id === clusterId)
                .map((item) => item?.parent?.id) as string[]
            );
      const uniqueClusterIds = getUniquekyes(
        namespaceComplianceReport?.data?.map(
          (item) => item?.ancestors?.[1]?.id ?? ""
        ) ?? ([] as string[])
      );
      const clusterOptions = [
        ...uniqueClusterIds.map((item) => ({
          label:
            clusterList?.filter((cluster) => cluster.id === item)?.[0]?.name ??
            "",
          value: item,
        })),
        { label: "All Clusters", value: "All Clusters" } ?? ([] as TOptions[]),
      ];
      if (clusterId === "All Clusters") {
        const temp = uniqueNamespaceIds.map((item) => {
          return {
            name: namepsaceList?.filter(
              (namespace) => namespace?.id === item
            )?.[0]?.name,
            id: item,
            total: namespaceComplianceReport?.data
              ?.filter((namespace) => namespace?.parent?.id === item)
              .reduce((prev, curr) => Number(prev) + Number(curr?.total), 0),
            pass: namespaceComplianceReport?.data
              ?.filter((namespace) => namespace?.parent?.id === item)
              .reduce((prev, curr) => Number(prev) + Number(curr?.pass), 0),
            standardId:
              namespaceComplianceReport?.data?.map(
                (item) => item?.standardId ?? ""
              ) ?? ([] as string[]),
            clusterId:
              namespaceComplianceReport?.data?.map(
                (item) => item?.ancestors?.[1]?.id ?? ""
              ) ?? ([] as string[]),
            namespaceId: "",
          };
        });
        const output = getComplianceWithScore(temp as TAggCompReport[]);
        console.log("output-all", output);
        const nspTotalScore =
          (Number(
            output?.reduce((prev, curr) => Number(prev) + Number(curr?.pass), 0)
          ) /
            Number(output?.reduce((prev, curr) => prev + curr?.total, 0))) *
          100;
        return {
          report: output,
          totalScore: nspTotalScore,
          clusterOptions: clusterOptions,
        };
      } else {
        const temp = uniqueNamespaceIds.map((item) => {
          return {
            name: namepsaceList?.filter(
              (namespace) => namespace?.id === item
            )?.[0]?.name,
            id: item,
            total: namespaceComplianceReport?.data
              ?.filter(
                (namespace) =>
                  namespace?.parent?.id === item &&
                  namespace?.ancestors?.[1]?.id === clusterId
              )
              .reduce(
                (prev, curr) => Number(prev) + Number(curr?.total ?? 0),
                0
              ),
            pass: namespaceComplianceReport?.data
              ?.filter(
                (namespace) =>
                  namespace?.parent?.id === item &&
                  namespace?.ancestors?.[1]?.id === clusterId
              )
              .reduce(
                (prev, curr) => Number(prev) + Number(curr?.pass ?? 0),
                0
              ),
            clusterId:
              namespaceComplianceReport?.data?.map(
                (item) => item?.ancestors?.[1]?.id ?? ""
              ) ?? ([] as string[]),
            namespaceId: namespaceComplianceReport?.data?.filter(
              (fil) => fil?.ancestors?.[1]?.id === clusterId
            )?.[0]?.parent?.id,
          };
        });
        const output = getComplianceWithScore(temp as TAggCompReport[]);
        console.log("output-specific", output);
        const nspTotalScore =
          (Number(
            output?.reduce((prev, curr) => Number(prev) + Number(curr?.pass), 0)
          ) /
            Number(output?.reduce((prev, curr) => prev + curr?.total, 0))) *
          100;
        return {
          report: output,
          totalScore: nspTotalScore,
          clusterOptions: clusterOptions,
        };
      }
    }
  };

  return { namespaceComplianceLoading, getNamespaceComplianceReport };
};
