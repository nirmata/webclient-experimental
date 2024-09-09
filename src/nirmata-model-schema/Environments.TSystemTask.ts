/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TSystemSubTask from './Environments.TSystemSubTask';

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
  | 'source'
  | 'startTime'
  | 'state'
  | 'subtasks'
  | 'type'
  | 'uri'
  | 'user';

export type TSystemTask_Source = 'k8sCluster' | 'nirmata' | 'gitRepo' | 'user' | 'catalog';

export type TSystemTask_State = 'pending' | 'executing' | 'failed' | 'completed' | 'warning';

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
  service?: 'environments';
  source?: TMayBe<TSystemTask_Source>;
  startTime?: TMayBe<number>;
  state?: TMayBe<TSystemTask_State>;
  subtasks?: TMayBe<TMayBe<TSystemSubTask>[]>;
  type?: TMayBe<string>;
  user?: TMayBe<string>;
};

export default TSystemTask;
