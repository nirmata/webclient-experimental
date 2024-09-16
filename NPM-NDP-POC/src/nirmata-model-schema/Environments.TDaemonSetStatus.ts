/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TDaemonSetCondition from './Environments.TDaemonSetCondition';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'collisionCount'
  | 'conditions'
  | 'createdBy'
  | 'createdOn'
  | 'currentNumberScheduled'
  | 'desiredNumberScheduled'
  | 'desiredPodCount'
  | 'executionState'
  | 'id'
  | 'labels'
  | 'lastContainerRestart'
  | 'lastStateUpdatedOn'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'numberAvailable'
  | 'numberMisscheduled'
  | 'numberReady'
  | 'numberUnavailable'
  | 'observedGeneration'
  | 'parent'
  | 'parent'
  | 'runningPodCount'
  | 'service'
  | 'state'
  | 'updatedNumberScheduled'
  | 'uri';

export type TDaemonSetStatus_ExecutionState =
  | 'pendingCreate'
  | 'pendingDelete'
  | 'pendingResources'
  | 'pendingExecution'
  | 'none';

export type TDaemonSetStatus_State =
  | 'running'
  | 'failed'
  | 'degraded'
  | 'unknown'
  | 'stopped'
  | 'executing'
  | 'unreachable';

type TDaemonSetStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  collisionCount?: TMayBe<number>;
  conditions?: TMayBe<TMayBe<TDaemonSetCondition>[]>;
  currentNumberScheduled?: TMayBe<number>;
  desiredNumberScheduled?: TMayBe<number>;
  desiredPodCount?: TMayBe<number>;
  executionState?: TMayBe<TDaemonSetStatus_ExecutionState>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastContainerRestart?: TMayBe<number>;
  lastStateUpdatedOn?: TMayBe<number>;
  modelIndex?: 'DaemonSetStatus';
  numberAvailable?: TMayBe<number>;
  numberMisscheduled?: TMayBe<number>;
  numberReady?: TMayBe<number>;
  numberUnavailable?: TMayBe<number>;
  observedGeneration?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  runningPodCount?: TMayBe<number>;
  service?: 'environments';
  state?: TMayBe<TDaemonSetStatus_State>;
  updatedNumberScheduled?: TMayBe<number>;
};

export default TDaemonSetStatus;
