/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TRolloutTask from './Catalog.TRolloutTask';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'channelId'
  | 'clusterId'
  | 'createdBy'
  | 'createdOn'
  | 'dependentAppDetails'
  | 'envId'
  | 'errorInfo'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'rolloutTasks'
  | 'runName'
  | 'service'
  | 'state'
  | 'taskRunId'
  | 'uri'
  | 'userId'
  | 'version'
  | 'waitTimeInMin';

export type TRolloutPlan_State = 'pending' | 'executing' | 'completed' | 'failed' | 'cancelled';

type TRolloutPlan = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  channelId?: TMayBe<TModelBase>;
  clusterId?: TMayBe<TModelBase>;
  dependentAppDetails?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  envId?: TMayBe<TModelBase>;
  errorInfo?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'RolloutPlan';
  parent?: TMayBe<TModelBase>;
  rolloutTasks?: TMayBe<TMayBe<TRolloutTask>[]>;
  runName?: TMayBe<string>;
  service?: 'catalog';
  state?: TMayBe<TRolloutPlan_State>;
  taskRunId?: TMayBe<string>;
  userId?: TMayBe<string>;
  version?: TMayBe<TModelBase>;
  waitTimeInMin?: TMayBe<number>;
};

export default TRolloutPlan;
