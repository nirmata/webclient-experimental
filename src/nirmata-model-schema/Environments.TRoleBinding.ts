/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectMeta from './Environments.TObjectMeta';
import TRoleRef from './Environments.TRoleRef';
import TSubject from './Environments.TSubject';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'application'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kind'
  | 'labels'
  | 'lastSyncTime'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'roleRef'
  | 'service'
  | 'subjects'
  | 'syncState'
  | 'uri';

export type TRoleBinding_SyncState = 'inSync' | 'applyingChanges' | 'failedApply' | 'pendingApply';

type TRoleBinding = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSyncTime?: TMayBe<number>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'RoleBinding';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  roleRef?: TMayBe<TMayBe<TRoleRef>[]>;
  service?: 'environments';
  subjects?: TMayBe<TMayBe<TSubject>[]>;
  syncState?: TMayBe<TRoleBinding_SyncState>;
};

export default TRoleBinding;
