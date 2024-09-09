/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TAlarmScopeFilter from './Cluster.TAlarmScopeFilter';
import TAlarmCondition from './Cluster.TAlarmCondition';

export type TField =
  | 'actionIds'
  | 'additionalProperties'
  | 'alarmId'
  | 'alarms'
  | 'ancestors'
  | 'category'
  | 'clearCondition'
  | 'createdBy'
  | 'createdOn'
  | 'enabled'
  | 'filters'
  | 'id'
  | 'isBuiltIn'
  | 'labels'
  | 'modelField'
  | 'modelFieldType'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'severity'
  | 'triggerCondition'
  | 'uri';

export type TAlarmType_ModelFieldType = 'none' | 'counter' | 'gauge' | 'state' | 'condition' | 'other';

export type TAlarmType_Severity = 'critical' | 'major' | 'minor' | 'informational';

type TAlarmType = Omit<TModelBase, 'service' | 'modelIndex'> & {
  actionIds?: TMayBe<TMayBe<string>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarmId?: TMayBe<string>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  category?: TMayBe<string>;
  clearCondition?: TMayBe<TMayBe<TAlarmCondition>[]>;
  enabled?: TMayBe<boolean>;
  filters?: TMayBe<TMayBe<TAlarmScopeFilter>[]>;
  isBuiltIn?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelField?: TMayBe<Record<string, string>>;
  modelFieldType?: TMayBe<TAlarmType_ModelFieldType>;
  modelIndex?: 'AlarmType';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  severity?: TMayBe<TAlarmType_Severity>;
  triggerCondition?: TMayBe<TMayBe<TAlarmCondition>[]>;
};

export default TAlarmType;
