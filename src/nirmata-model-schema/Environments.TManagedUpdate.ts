/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'changes'
  | 'createdBy'
  | 'createdOn'
  | 'endTime'
  | 'error'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'startTime'
  | 'state'
  | 'targetId'
  | 'targetName'
  | 'uri';

export type TManagedUpdate_State = 'pending' | 'executing' | 'paused' | 'failed' | 'completed';

type TManagedUpdate = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  changes?: TMayBe<TMayBe<TModelBase>[]>;
  endTime?: TMayBe<number>;
  error?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ManagedUpdate';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  startTime?: TMayBe<number>;
  state?: TMayBe<TManagedUpdate_State>;
  targetId?: TMayBe<TModelBase>;
  targetName?: TMayBe<string>;
};

export default TManagedUpdate;
