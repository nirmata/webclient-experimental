/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectMeta from './Environments.TObjectMeta';
import TPolicyRule from './Environments.TPolicyRule';
import TAggregationRule from './Environments.TAggregationRule';

export type TField =
  | 'additionalProperties'
  | 'aggregationRule'
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

export type TClusterRole_SyncState = 'inSync' | 'applyingChanges' | 'failedApply' | 'pendingApply';

type TClusterRole = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  aggregationRule?: TMayBe<TMayBe<TAggregationRule>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSyncTime?: TMayBe<number>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'ClusterRole';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  rules?: TMayBe<TMayBe<TPolicyRule>[]>;
  service?: 'environments';
  syncState?: TMayBe<TClusterRole_SyncState>;
};

export default TClusterRole;
