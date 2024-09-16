/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TDeploymentCondition from './Environments.TDeploymentCondition';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'availableReplicas'
  | 'collisionCount'
  | 'conditions'
  | 'createdBy'
  | 'createdOn'
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
  | 'unavailableReplicas'
  | 'updatedReplicas'
  | 'uri';

export type TDeploymentStatus_ExecutionState =
  | 'pendingCreate'
  | 'pendingDelete'
  | 'pendingResources'
  | 'pendingExecution'
  | 'none';

export type TDeploymentStatus_State =
  | 'running'
  | 'failed'
  | 'degraded'
  | 'unknown'
  | 'stopped'
  | 'executing'
  | 'unreachable';

type TDeploymentStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  availableReplicas?: TMayBe<number>;
  collisionCount?: TMayBe<number>;
  conditions?: TMayBe<TMayBe<TDeploymentCondition>[]>;
  desiredPodCount?: TMayBe<number>;
  executionState?: TMayBe<TDeploymentStatus_ExecutionState>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastContainerRestart?: TMayBe<number>;
  lastStateUpdatedOn?: TMayBe<number>;
  modelIndex?: 'DeploymentStatus';
  observedGeneration?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  readyReplicas?: TMayBe<number>;
  replicas?: TMayBe<number>;
  runningPodCount?: TMayBe<number>;
  service?: 'environments';
  state?: TMayBe<TDeploymentStatus_State>;
  unavailableReplicas?: TMayBe<number>;
  updatedReplicas?: TMayBe<number>;
};

export default TDeploymentStatus;
