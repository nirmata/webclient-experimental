/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectMeta from './Environments.TObjectMeta';
import THorizontalPodAutoscalerSpec from './Environments.THorizontalPodAutoscalerSpec';
import THorizontalPodAutoscalerStatus from './Environments.THorizontalPodAutoscalerStatus';

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

export type THorizontalPodAutoscaler_SyncState = 'inSync' | 'applyingChanges' | 'failedApply' | 'pendingApply';

type THorizontalPodAutoscaler = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSyncTime?: TMayBe<number>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'HorizontalPodAutoscaler';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  spec?: TMayBe<TMayBe<THorizontalPodAutoscalerSpec>[]>;
  status?: TMayBe<TMayBe<THorizontalPodAutoscalerStatus>[]>;
  syncState?: TMayBe<THorizontalPodAutoscaler_SyncState>;
};

export default THorizontalPodAutoscaler;
