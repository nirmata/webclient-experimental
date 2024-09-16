/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectMeta from './Environments.TObjectMeta';
import TPolicyRule from './Environments.TPolicyRule';

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
  | 'rules'
  | 'service'
  | 'syncState'
  | 'uri';

export type TRole_SyncState = 'inSync' | 'applyingChanges' | 'failedApply' | 'pendingApply';

type TRole = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSyncTime?: TMayBe<number>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'Role';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  rules?: TMayBe<TMayBe<TPolicyRule>[]>;
  service?: 'environments';
  syncState?: TMayBe<TRole_SyncState>;
};

export default TRole;
