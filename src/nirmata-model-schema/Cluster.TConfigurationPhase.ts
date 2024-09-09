/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'addonRef'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'endTime'
  | 'failureReason'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'startTime'
  | 'state'
  | 'uri';

export type TConfigurationPhase_State = 'pending' | 'inProgress' | 'failed' | 'completed' | 'pendingRetry' | 'deleted';

type TConfigurationPhase = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  addonRef?: TMayBe<TModelBase>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  endTime?: TMayBe<number>;
  failureReason?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ConfigurationPhase';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  startTime?: TMayBe<number>;
  state?: TMayBe<TConfigurationPhase_State>;
};

export default TConfigurationPhase;
