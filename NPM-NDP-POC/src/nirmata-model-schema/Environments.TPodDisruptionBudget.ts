/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectMeta from './Environments.TObjectMeta';
import TPodDisruptionBudgetSpec from './Environments.TPodDisruptionBudgetSpec';
import TPodDisruptionBudgetStatus from './Environments.TPodDisruptionBudgetStatus';

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
  | 'spec'
  | 'status'
  | 'syncState'
  | 'uri';

export type TPodDisruptionBudget_SyncState = 'inSync' | 'applyingChanges' | 'failedApply' | 'pendingApply';

type TPodDisruptionBudget = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSyncTime?: TMayBe<number>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'PodDisruptionBudget';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  spec?: TMayBe<TMayBe<TPodDisruptionBudgetSpec>[]>;
  status?: TMayBe<TMayBe<TPodDisruptionBudgetStatus>[]>;
  syncState?: TMayBe<TPodDisruptionBudget_SyncState>;
};

export default TPodDisruptionBudget;
