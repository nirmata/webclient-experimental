/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'chainId'
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
  | 'type'
  | 'uri'
  | 'user';

export type TSystemSubTask_State = 'pending' | 'executing' | 'failed' | 'completed' | 'cleared';

type TSystemSubTask = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  chainId?: TMayBe<number>;
  data?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  endTime?: TMayBe<number>;
  error?: TMayBe<string>;
  executionTime?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'SystemSubTask';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  resource?: TMayBe<TModelBase>;
  resourceName?: TMayBe<string>;
  resourceType?: TMayBe<string>;
  sequenceId?: TMayBe<string>;
  service?: 'cluster';
  startTime?: TMayBe<number>;
  state?: TMayBe<TSystemSubTask_State>;
  type?: TMayBe<string>;
  user?: TMayBe<string>;
};

export default TSystemSubTask;
