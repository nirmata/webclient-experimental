/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectMeta from './Environments.TObjectMeta';
import TEndpointSubset from './Environments.TEndpointSubset';

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
  | 'service'
  | 'subsets'
  | 'syncState'
  | 'uri';

export type TEndpoints_SyncState = 'inSync' | 'applyingChanges' | 'failedApply' | 'pendingApply';

type TEndpoints = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSyncTime?: TMayBe<number>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'Endpoints';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  subsets?: TMayBe<TMayBe<TEndpointSubset>[]>;
  syncState?: TMayBe<TEndpoints_SyncState>;
};

export default TEndpoints;
