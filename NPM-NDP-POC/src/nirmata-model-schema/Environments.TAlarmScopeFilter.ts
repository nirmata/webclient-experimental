/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

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
  | 'targetFieldIndex'
  | 'targetModelIndex'
  | 'uri'
  | 'value';

export type TAlarmScopeFilter_Operator =
  | 'equals'
  | 'notEquals'
  | 'lessThanOrEquals'
  | 'lessThan'
  | 'greaterThanOrEquals'
  | 'greaterThan'
  | 'containsString'
  | 'startsWithString'
  | 'endsWithString';

type TAlarmScopeFilter = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AlarmScopeFilter';
  operator?: TMayBe<TAlarmScopeFilter_Operator>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  targetFieldIndex?: TMayBe<string>;
  targetModelIndex?: TMayBe<string>;
  value?: TMayBe<object>;
};

export default TAlarmScopeFilter;
