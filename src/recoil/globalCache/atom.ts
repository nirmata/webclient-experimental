import { atom } from "recoil";
import { TUserData } from "../../components/left-nav-panel/types";
import TMayBe from "../../components/connector/TMayBe";
import TNamespace from "../../nirmata-model-schema/Cluster.TNamespace";
import TUser from "../../nirmata-model-schema/Users.TUser";
import TCluster from "../../nirmata-model-schema/Policies.TCluster";
import TRepository from "../../nirmata-model-schema/Policies.TRepository";
import TPolicy from "../../nirmata-model-schema/Policies.TPolicy";

const clustersCacheState = atom<TMayBe<TCluster[]>>({
  key: "global_cache_clusters",
  default: [],
});

const namespaceCacheState = atom<TMayBe<TNamespace[]>>({
  key: "global_cache_namespaces_list",
  default: [],
});

const usersListCacheState = atom<TMayBe<TUser[]>>({
  key: "global_cache__users",
  default: [],
});

const currentUserCacheState = atom<TMayBe<TUserData>>({
  key: "global_cache__current_user",
  default: null,
});

const policyCacheState = atom<TMayBe<TPolicy[]>>({
  key: "global_cache__policy",
  default: null,
});

const kindCacheState = atom<TMayBe<TNamespace[]>>({
  key: "global_cache_kind_list",
  default: [],
});

const RepoCacheState = atom<TMayBe<TRepository[]>>({
  key: "global_cache_Repo_list",
  default: [],
});
export {
  clustersCacheState,
  namespaceCacheState,
  usersListCacheState,
  currentUserCacheState,
  policyCacheState,
  kindCacheState,
  RepoCacheState,
};
