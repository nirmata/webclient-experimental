/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectReference from './Environments.TObjectReference';

export type TField =
  | 'active'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'executionState'
  | 'id'
  | 'labels'
  | 'lastScheduleTime'
  | 'lastStateUpdatedOn'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'state'
  | 'uri';

export type TCronJobStatus_ExecutionState = 'pendingCreate' | 'pendingDelete' | 'active' | 'none' | 'pendingResource';

export type TCronJobStatus_State =
  | 'pendingCreate'
  | 'pendingDelete'
  | 'active'
  | 'finished'
  | 'scheduled'
  | 'executing';

type TCronJobStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  active?: TMayBe<TMayBe<TObjectReference>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  executionState?: TMayBe<TCronJobStatus_ExecutionState>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastScheduleTime?: TMayBe<string>;
  lastStateUpdatedOn?: TMayBe<number>;
  modelIndex?: 'CronJobStatus';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  state?: TMayBe<TCronJobStatus_State>;
};

export default TCronJobStatus;
