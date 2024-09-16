/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TStatefulCondition from './Environments.TStatefulCondition';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'collisionCount'
  | 'conditions'
  | 'createdBy'
  | 'createdOn'
  | 'currentReplicas'
  | 'currentRevision'
  | 'desiredPodCount'
  | 'executionState'
  | 'id'
  | 'labels'
  | 'lastContainerRestart'
  | 'lastStateUpdatedOn'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'observedGeneration'
  | 'parent'
  | 'parent'
  | 'readyReplicas'
  | 'replicas'
  | 'runningPodCount'
  | 'service'
  | 'state'
  | 'updateRevision'
  | 'updatedReplicas'
  | 'uri';

export type TStatefulSetStatus_ExecutionState =
  | 'pendingCreate'
  | 'pendingDelete'
  | 'pendingResources'
  | 'pendingExecution'
  | 'none';

export type TStatefulSetStatus_State =
  | 'running'
  | 'failed'
  | 'degraded'
  | 'unknown'
  | 'stopped'
  | 'executing'
  | 'unreachable';

type TStatefulSetStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  collisionCount?: TMayBe<number>;
  conditions?: TMayBe<TMayBe<TStatefulCondition>[]>;
  currentReplicas?: TMayBe<number>;
  currentRevision?: TMayBe<string>;
  desiredPodCount?: TMayBe<number>;
  executionState?: TMayBe<TStatefulSetStatus_ExecutionState>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastContainerRestart?: TMayBe<number>;
  lastStateUpdatedOn?: TMayBe<number>;
  modelIndex?: 'StatefulSetStatus';
  observedGeneration?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  readyReplicas?: TMayBe<number>;
  replicas?: TMayBe<number>;
  runningPodCount?: TMayBe<number>;
  service?: 'environments';
  state?: TMayBe<TStatefulSetStatus_State>;
  updateRevision?: TMayBe<string>;
  updatedReplicas?: TMayBe<number>;
};

export default TStatefulSetStatus;
