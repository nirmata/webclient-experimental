/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TSystemSubTask from './Cluster.TSystemSubTask';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'data'
  | 'endTime'
  | 'error'
  | 'executionTime'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'resource'
  | 'resourceName'
  | 'resourceType'
  | 'sequenceId'
  | 'service'
  | 'startTime'
  | 'state'
  | 'subtasks'
  | 'type'
  | 'uri'
  | 'user';

export type TSystemTask_State = 'pending' | 'executing' | 'failed' | 'completed' | 'cleared';

type TSystemTask = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  data?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  endTime?: TMayBe<number>;
  error?: TMayBe<string>;
  executionTime?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'SystemTask';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  resource?: TMayBe<TModelBase>;
  resourceName?: TMayBe<string>;
  resourceType?: TMayBe<string>;
  sequenceId?: TMayBe<string>;
  service?: 'cluster';
  startTime?: TMayBe<number>;
  state?: TMayBe<TSystemTask_State>;
  subtasks?: TMayBe<TMayBe<TSystemSubTask>[]>;
  type?: TMayBe<string>;
  user?: TMayBe<string>;
};

export default TSystemTask;
