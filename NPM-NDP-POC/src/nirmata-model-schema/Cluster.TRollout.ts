/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'endTime'
  | 'error'
  | 'id'
  | 'labels'
  | 'lastClustersRollout'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'rolloutRef'
  | 'service'
  | 'startTime'
  | 'state'
  | 'uri';

export type TRollout_State = 'pending' | 'executing' | 'completed' | 'failed';

type TRollout = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  endTime?: TMayBe<number>;
  error?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastClustersRollout?: TMayBe<TMayBe<TModelBase>[]>;
  modelIndex?: 'Rollout';
  parent?: TMayBe<TModelBase>;
  rolloutRef?: TMayBe<TModelBase>;
  service?: 'cluster';
  startTime?: TMayBe<number>;
  state?: TMayBe<TRollout_State>;
};

export default TRollout;
