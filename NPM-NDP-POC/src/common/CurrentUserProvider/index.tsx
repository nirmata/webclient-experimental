import { createContext, useContext, useMemo, useEffect, useState } from 'react';

import { TPermission, userPermissions } from './permissions/userPermissions';
import useQuery from '../../components/connector/use-query';

export type TUserRoles = 'admin' | 'platform' | 'devops' | 'readonly';

interface CurrentUser {
  email: string;
  features: string[];
  fullname: string;
  id: string;
  identityProvider: string;
  isActivated: boolean;
  isDisabled: boolean;
  name: string;
  numAccounts: number;
  product: string;
  role: TUserRoles;
  tenantId: string;
  tenantName: string;
  tenantState: string;
  tenantType: string;
}

type TUserTeam = {
  id: string;
  name: string;
  publishReports: boolean;
  reportPublisherKey: string;
};

export interface CurrentUserWithPermissions extends CurrentUser {
  permissions: Set<TPermission>;
  teams: TUserTeam[];
  onReloadTeams: () => void;
  canPublishReportsWithTeamKey: boolean;
}

const CurrentUserContext = createContext<CurrentUserWithPermissions | undefined>(undefined);

interface CurrentUserProviderProps {
  userData: CurrentUser;
  children: React.ReactNode;
}

export const CurrentUserProvider = ({ userData, children }: CurrentUserProviderProps) => {
  const [_, { onLoad: onUserTeamsLoad, onReload: onUserTeamsReload }] = useQuery<any>();
  const [userTeams, setUserTeams] = useState<TUserTeam[] | []>([]);

  const currentUserData: CurrentUserWithPermissions = useMemo(() => {
    const onReloadTeams = () => {
      onUserTeamsReload().then((res) => {
        if (res?.data && Array.isArray(res?.data)) {
          setUserTeams((res?.data as TUserTeam[]) ?? []);
        }
      });
    };

    return {
      ...userData,
      permissions: userPermissions?.[userData?.role] ?? new Set(),
      teams: userTeams,
      onReloadTeams,
      canPublishReportsWithTeamKey: userTeams.some((team) => team.publishReports === true)
    };
  }, [userData, userTeams]);

  // Retrieve user data to get access to the list of teams user belongs to.
  useEffect(() => {
    if (currentUserData?.id && currentUserData.teams.length === 0) {
      onUserTeamsLoad(
        `/users/api/users/${currentUserData.id}/teams?fields=id,name,publishReports,reportPublisherKey`
      ).then((res) => {
        if (res?.data && Array.isArray(res?.data) && res?.data?.length > 0) {
          setUserTeams(res?.data as TUserTeam[]);
        }
      });
    }
  }, [currentUserData]);

  return <CurrentUserContext.Provider value={currentUserData}>{children}</CurrentUserContext.Provider>;
};

export const useCurrentUser = () => {
  const context = useContext(CurrentUserContext);

  if (context === undefined) {
    throw new Error('useCurrentUser must be used within a CurrentUserProvider');
  }

  return context;
};

export const withCurrentUser: (Component: React.ComponentType<any>) => React.ComponentType<any> = (Component) => {
  return function WrappedComponent(props: any) {
    const currentUser = useCurrentUser();
    return <Component {...props} currentUser={currentUser} />;
  };
};
