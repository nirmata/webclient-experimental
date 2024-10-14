import { useRecoilValue } from 'recoil';
import { namespaceCacheState, clustersCacheState, usersListCacheState, currentUserCacheState, policyCacheState, kindCacheState, RepoCacheState } from './atom';

export const useGetClusterCache = () => {
  const clustersList = useRecoilValue(clustersCacheState);
  return clustersList;
};

export const useGetNamespacesCache = () => {
  const namespaceList = useRecoilValue(namespaceCacheState);
  return namespaceList;
};

export const useGetUsersCache = () => {
  const usersList = useRecoilValue(usersListCacheState);
  return usersList;
};

export const useGetCurrentUserCache = () => {
  const currentUserData = useRecoilValue(currentUserCacheState);
  return currentUserData;
};

export const useGetPolicyCache = () => {
  const currentUserData = useRecoilValue(policyCacheState);
  return currentUserData;
};

export const useGetKindCache = () => {
  const currentUserData = useRecoilValue(kindCacheState);
  return currentUserData;
};

export const useGetRepoCache = () => {
  const currentUserData = useRecoilValue(RepoCacheState);
  return currentUserData;
};