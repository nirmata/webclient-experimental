/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'creationError'
  | 'creationState'
  | 'id'
  | 'kustomizationAppliedOn'
  | 'kustomizationError'
  | 'kustomizationState'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'rolloutError'
  | 'rolloutState'
  | 'service'
  | 'syncError'
  | 'syncState'
  | 'uri';

export type TPolicyGroupStatus_CreationState = 'pendingCreate' | 'inProgress' | 'completed' | 'failed';

export type TPolicyGroupStatus_KustomizationState = 'APPLIED' | 'AVAILABLE' | 'EXECUTING';

export type TPolicyGroupStatus_RolloutState = 'pending' | 'executing' | 'completed' | 'failed';

export type TPolicyGroupStatus_SyncState = 'success' | 'failed' | 'inProgress';

type TPolicyGroupStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  creationError?: TMayBe<string>;
  creationState?: TMayBe<TPolicyGroupStatus_CreationState>;
  kustomizationAppliedOn?: TMayBe<string>;
  kustomizationError?: TMayBe<string>;
  kustomizationState?: TMayBe<TPolicyGroupStatus_KustomizationState>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PolicyGroupStatus';
  parent?: TMayBe<TModelBase>;
  rolloutError?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  rolloutState?: TMayBe<TPolicyGroupStatus_RolloutState>;
  service?: 'cluster';
  syncError?: TMayBe<string>;
  syncState?: TMayBe<TPolicyGroupStatus_SyncState>;
};

export default TPolicyGroupStatus;
