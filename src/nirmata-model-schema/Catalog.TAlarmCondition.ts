/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'operator'
  | 'parent'
  | 'parent'
  | 'service'
  | 'timeInSeconds'
  | 'uri'
  | 'value';

export type TAlarmCondition_Operator =
  | 'equals'
  | 'notEquals'
  | 'lessThanOrEquals'
  | 'lessThan'
  | 'greaterThanOrEquals'
  | 'greaterThan'
  | 'containsString'
  | 'startsWithString'
  | 'endsWithString';

type TAlarmCondition = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AlarmCondition';
  operator?: TMayBe<TAlarmCondition_Operator>;
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
  timeInSeconds?: TMayBe<number>;
  value?: TMayBe<object>;
};

export default TAlarmCondition;
