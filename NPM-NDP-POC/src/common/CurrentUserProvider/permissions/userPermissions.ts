import { adminPermissions } from "./adminPermissions";
import { devopsPermissions } from "./devopsPermissions";
import { platformPermissions } from "./platformPermissions";
import { readonlyPermissions } from "./readonlyPermissions";
import { securityPermissions } from "./securityPermissions";

export type TUserRoles = 'admin' | 'platform' | 'devops' | 'readonly' | 'security';

export type PermissionIndexes = 'repository-acl' | 'cluster-acl';


export type TPermission = typeof permissionsSet[number];

export type TUserPermissions = {
  [role in TUserRoles]?: Set<TPermission>;
};

export type TPermissionsSet = Array<TPermission>;



export const userPermissions: TUserPermissions = {
  'devops': new Set(devopsPermissions),
  'admin': new Set(adminPermissions),
  'platform': new Set(platformPermissions),
  'readonly': new Set(readonlyPermissions),
  'security': new Set(securityPermissions)
};
