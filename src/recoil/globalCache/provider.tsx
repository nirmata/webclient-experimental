import { useRecoilState } from "recoil";
import {
  namespaceCacheState,
  clustersCacheState,
  usersListCacheState,
  currentUserCacheState,
  policyCacheState,
  kindCacheState,
  RepoCacheState,
} from "./atom";
import { useEffect } from "react";
import useVanillaQuery from "../../components/connector/use-vanilla-query";
import TCluster from "../../nirmata-model-schema/Policies.TCluster";
import TNamespace from "../../nirmata-model-schema/Cluster.TNamespace";
import TUser from "../../nirmata-model-schema/Users.TUser";
import TPolicy from "../../nirmata-model-schema/Policies.TPolicy";
import TRepository from "../../nirmata-model-schema/Policies.TRepository";
import getCookie from "../../components/connector/get-cookie";
const ConfigureGlobalCache = () => {
  const onLoadClusters = useVanillaQuery<TCluster[]>();
  const onLoadNamespaces = useVanillaQuery<TNamespace[]>();
  const onLoadKind = useVanillaQuery<any>();
  const onLoadUsers = useVanillaQuery<TUser[]>();
  const onLoadPolicies = useVanillaQuery<TPolicy[]>();
  const onLoadRepoList = useVanillaQuery<TRepository[]>();

  const [clusterCacheList, setClusterCacheList] =
    useRecoilState(clustersCacheState);
  const [namepsaceCacheList, setNamespaceCacheList] =
    useRecoilState(namespaceCacheState);
  const [usersCacheList, setUsersacheList] =
    useRecoilState(usersListCacheState);
  const [_, setCurrentUserCache] = useRecoilState(currentUserCacheState);
  const [policiesList, setPoliciesList] = useRecoilState(policyCacheState);
  const [kindCacheList, setKindCacheList] = useRecoilState(kindCacheState);
  const [repoCacheList, setRepoCacheList] = useRecoilState(RepoCacheState);

  useEffect(() => {
    if (!clusterCacheList?.length) {
      onLoadClusters("/policies/api/Clusters?fields=id,name,ancestors")
        .then((res) => {
          setClusterCacheList(res?.data);
        })
        .catch((e) =>
          console.log(e, "Unable to load Clusters from policies service")
        );
    }

    if (!repoCacheList?.length) {
      onLoadRepoList("/policies/api/repositories?fields=id,name,gitUrl,")
        .then((res) => {
          setRepoCacheList(res?.data);
        })
        .catch((e) =>
          console.log(e, "Unable to load Clusters from policies service")
        );
    }

    if (!namepsaceCacheList?.length) {
      onLoadNamespaces(
        "/policies/api/Namespaces?fields=id,name,ancestors,clusterName,parent"
      )
        .then((res) => {
          setNamespaceCacheList(res?.data);
        })
        .catch((e) =>
          console.log(e, "Unable to load Namespaces from policies service")
        );
    }

    if (!kindCacheList?.length) {
      onLoadKind(
        `/policies/api/getPolicyReportUniqueValuesTable?attribute=resources.kind`
      )
        .then((res) => {
          setKindCacheList(
            res?.data?.entries?.[0]?.uniqueValues
              ?.filter(Boolean)
              .map((v: any) => ({ label: v, value: v })) ?? []
          );
        })
        .catch((e) =>
          console.log(e, "Unable to load Kind from policies service")
        );
    }

    if (!usersCacheList?.length) {
      onLoadUsers(
        "/users/api/User?filter=name,ne,license-user&fields=id,name,email,role,apiKey"
      )
        .then((res) => {
          const encodedUserData = getCookie("nirmata.session.userData");
          const currentUserData = JSON.parse(
            decodeURIComponent(encodedUserData ?? "")
          );

          setCurrentUserCache(currentUserData);
          setUsersacheList(res?.data);
        })
        .catch((e) => console.log(e, "Unable to load Users from user service"));
    }

    if (!policiesList?.length) {
      onLoadPolicies("/policies/api/policy?fields=name,annotations")
        .then((res) => {
          setPoliciesList(res?.data);
        })
        .catch((e) =>
          console.log(e, "Unable to load policy from policy service")
        );
    }
  }, []);

  return <></>;
};

export default ConfigureGlobalCache;
