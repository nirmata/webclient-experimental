import { useEffect } from "react";
import TAPIService from "../../nirmata-model-schema/TAPIService";
import useQuery from "../../components/connector/use-query";
import TRoot from "../../nirmata-model-schema/Catalog.TRoot";

const useGetRoot = (service: TAPIService) => {
  const [rootQueryResponse, rootQueryActions] = useQuery<TRoot[]>();

  const root = rootQueryResponse.data?.[0] as TRoot;
  const loading = rootQueryResponse.loading;
  const reLoading = rootQueryResponse.reLoading;
  const onReload = rootQueryActions.onReload;

  useEffect(() => {
    rootQueryActions.onLoad(`/${service}/api/root`).catch((err) => {
      console.error(`Unable to fetch root from policies ${service}`, err);
    });
  }, []);

  return { root, loading, reLoading, onReload };
};

export default useGetRoot;
