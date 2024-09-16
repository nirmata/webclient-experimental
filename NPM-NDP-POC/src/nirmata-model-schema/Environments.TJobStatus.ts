/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TJobCondition from './Environments.TJobCondition';

export type TField =
  | 'active'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'completionTime'
  | 'conditions'
  | 'createdBy'
  | 'createdOn'
  | 'desiredPodCompletions'
  | 'executionState'
  | 'failed'
  | 'id'
  | 'labels'
  | 'lastStateUpdatedOn'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'startTime'
  | 'state'
  | 'succeeded'
  | 'uri';

export type TJobStatus_ExecutionState = 'pendingCreate' | 'pendingDelete' | 'active' | 'none' | 'pendingResource';

export type TJobStatus_State = 'pendingCreate' | 'pendingDelete' | 'active' | 'failed' | 'completed' | 'executing';

type TJobStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  active?: TMayBe<number>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  completionTime?: TMayBe<string>;
  conditions?: TMayBe<TMayBe<TJobCondition>[]>;
  desiredPodCompletions?: TMayBe<number>;
  executionState?: TMayBe<TJobStatus_ExecutionState>;
  failed?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastStateUpdatedOn?: TMayBe<number>;
  modelIndex?: 'JobStatus';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  startTime?: TMayBe<string>;
  state?: TMayBe<TJobStatus_State>;
  succeeded?: TMayBe<number>;
};

export default TJobStatus;
