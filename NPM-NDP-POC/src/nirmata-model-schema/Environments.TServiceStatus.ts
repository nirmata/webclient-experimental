/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TLoadBalancerStatus from './Environments.TLoadBalancerStatus';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'availablePodCount'
  | 'createdBy'
  | 'createdOn'
  | 'currentPodCount'
  | 'desiredPodCount'
  | 'executionState'
  | 'id'
  | 'labels'
  | 'lastFailure'
  | 'loadBalancer'
  | 'missingPodCount'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'runningSince'
  | 'service'
  | 'state'
  | 'upToDatePodCount'
  | 'uri';

export type TServiceStatus_ExecutionState =
  | 'pendingCreate'
  | 'pendingDelete'
  | 'pendingResources'
  | 'pendingExecution'
  | 'none';

export type TServiceStatus_State =
  | 'running'
  | 'failed'
  | 'degraded'
  | 'unknown'
  | 'stopped'
  | 'executing'
  | 'unreachable';

type TServiceStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  availablePodCount?: TMayBe<number>;
  currentPodCount?: TMayBe<number>;
  desiredPodCount?: TMayBe<number>;
  executionState?: TMayBe<TServiceStatus_ExecutionState>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastFailure?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  loadBalancer?: TMayBe<TMayBe<TLoadBalancerStatus>[]>;
  missingPodCount?: TMayBe<number>;
  modelIndex?: 'ServiceStatus';
  parent?: TMayBe<TModelBase>;
  runningSince?: TMayBe<number>;
  service?: 'environments';
  state?: TMayBe<TServiceStatus_State>;
  upToDatePodCount?: TMayBe<number>;
};

export default TServiceStatus;
