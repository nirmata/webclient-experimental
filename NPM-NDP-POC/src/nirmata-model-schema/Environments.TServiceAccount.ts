/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectMeta from './Environments.TObjectMeta';
import TLocalObjectReference from './Environments.TLocalObjectReference';
import TObjectReference from './Environments.TObjectReference';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'application'
  | 'automountServiceAccountToken'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'imagePullSecrets'
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
  | 'secrets'
  | 'service'
  | 'syncState'
  | 'uri';

export type TServiceAccount_SyncState = 'inSync' | 'applyingChanges' | 'failedApply' | 'pendingApply';

type TServiceAccount = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  automountServiceAccountToken?: TMayBe<boolean>;
  imagePullSecrets?: TMayBe<TMayBe<TLocalObjectReference>[]>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSyncTime?: TMayBe<number>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'ServiceAccount';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  secrets?: TMayBe<TMayBe<TObjectReference>[]>;
  service?: 'environments';
  syncState?: TMayBe<TServiceAccount_SyncState>;
};

export default TServiceAccount;
