/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';

export type TField =
  | 'additionalProperties'
  | 'alarmId'
  | 'alarms'
  | 'ancestors'
  | 'category'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'id'
  | 'isDismissed'
  | 'labels'
  | 'message'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'severity'
  | 'state'
  | 'stateChangedOn'
  | 'subject'
  | 'type'
  | 'uri'
  | 'wasActivated';

export type TAlarm_Severity = 'critical' | 'major' | 'minor' | 'informational';

export type TAlarm_State = 'pending' | 'active' | 'clearing' | 'cleared';

type TAlarm = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarmId?: TMayBe<string>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  category?: TMayBe<string>;
  description?: TMayBe<string>;
  isDismissed?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  message?: TMayBe<string>;
  modelIndex?: 'Alarm';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
  severity?: TMayBe<TAlarm_Severity>;
  state?: TMayBe<TAlarm_State>;
  stateChangedOn?: TMayBe<number>;
  subject?: TMayBe<TModelBase>;
  type?: TMayBe<TModelBase>;
  wasActivated?: TMayBe<boolean>;
};

export default TAlarm;
