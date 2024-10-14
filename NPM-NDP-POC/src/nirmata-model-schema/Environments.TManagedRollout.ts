/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TManagedUpdate from './Environments.TManagedUpdate';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'endTime'
  | 'environmentsSelector'
  | 'error'
  | 'id'
  | 'labels'
  | 'maxConcurrent'
  | 'maxFailure'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'startTime'
  | 'state'
  | 'updates'
  | 'uri'
  | 'yamls';

export type TManagedRollout_State = 'pending' | 'executing' | 'paused' | 'failed' | 'completed';

type TManagedRollout = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  endTime?: TMayBe<number>;
  environmentsSelector?: TMayBe<Record<string, string>>;
  error?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  maxConcurrent?: TMayBe<number>;
  maxFailure?: TMayBe<number>;
  modelIndex?: 'ManagedRollout';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  startTime?: TMayBe<number>;
  state?: TMayBe<TManagedRollout_State>;
  updates?: TMayBe<TMayBe<TManagedUpdate>[]>;
  yamls?: TMayBe<TMayBe<string>[]>;
};

export default TManagedRollout;
