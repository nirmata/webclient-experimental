/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectMeta from './Environments.TObjectMeta';
import TSubject from './Environments.TSubject';
import TRoleRef from './Environments.TRoleRef';

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

export type TClusterRoleBinding_SyncState = 'inSync' | 'applyingChanges' | 'failedApply' | 'pendingApply';

type TClusterRoleBinding = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSyncTime?: TMayBe<number>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'ClusterRoleBinding';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  roleRef?: TMayBe<TMayBe<TRoleRef>[]>;
  service?: 'environments';
  subjects?: TMayBe<TMayBe<TSubject>[]>;
  syncState?: TMayBe<TClusterRoleBinding_SyncState>;
};

export default TClusterRoleBinding;
