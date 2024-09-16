/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TPodConditionData from './Environments.TPodConditionData';
import TAlarm from './Environments.TAlarm';
import TContainerStatus from './Environments.TContainerStatus';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'conditions'
  | 'containerStatuses'
  | 'createdBy'
  | 'createdOn'
  | 'executionState'
  | 'hostIP'
  | 'id'
  | 'initContainerStatuses'
  | 'initStatus'
  | 'labels'
  | 'lastContainerRestart'
  | 'message'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'nominatedNodeName'
  | 'parent'
  | 'parent'
  | 'phase'
  | 'podIP'
  | 'qosClass'
  | 'reason'
  | 'service'
  | 'startTime'
  | 'state'
  | 'uri';

export type TPodStatus_ExecutionState =
  | 'pendingCreate'
  | 'pendingDelete'
  | 'pendingReadinessCheck'
  | 'pendingVolumeCreation'
  | 'volumeCreationComplete'
  | 'pendingRouteCheck'
  | 'downloadingImage'
  | 'downloadingImageComplete'
  | 'pendingDependency'
  | 'pendingResources'
  | 'pendingStop'
  | 'none'
  | 'failedScheduling';

export type TPodStatus_State =
  | 'running'
  | 'failed'
  | 'unreachable'
  | 'stopped'
  | 'unknown'
  | 'executing'
  | 'completed'
  | 'evicted';

type TPodStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  conditions?: TMayBe<TMayBe<TPodConditionData>[]>;
  containerStatuses?: TMayBe<TMayBe<TContainerStatus>[]>;
  executionState?: TMayBe<TPodStatus_ExecutionState>;
  hostIP?: TMayBe<string>;
  initContainerStatuses?: TMayBe<TMayBe<TContainerStatus>[]>;
  initStatus?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastContainerRestart?: TMayBe<number>;
  message?: TMayBe<string>;
  modelIndex?: 'PodStatus';
  nominatedNodeName?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  phase?: TMayBe<string>;
  podIP?: TMayBe<string>;
  qosClass?: TMayBe<string>;
  reason?: TMayBe<string>;
  service?: 'environments';
  startTime?: TMayBe<string>;
  state?: TMayBe<TPodStatus_State>;
};

export default TPodStatus;
