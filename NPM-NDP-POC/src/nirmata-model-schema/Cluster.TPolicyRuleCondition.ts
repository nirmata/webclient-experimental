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
  | 'id'
  | 'key'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'operator'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri'
  | 'value';

export type TPolicyRuleCondition_Operator =
  | 'Equal'
  | 'NotEqual'
  | 'In'
  | 'NotIn'
  | 'Equals'
  | 'NotEquals'
  | 'AnyIn'
  | 'AllIn'
  | 'AnyNotIn'
  | 'AllNotIn'
  | 'GreaterThan'
  | 'GreaterThanOrEquals'
  | 'LessThan'
  | 'LessThanOrEquals'
  | 'DurationGreaterThan'
  | 'DurationGreaterThanOrEquals'
  | 'DurationLessThan'
  | 'DurationLessThanOrEquals';

type TPolicyRuleCondition = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  key?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PolicyRuleCondition';
  operator?: TMayBe<TPolicyRuleCondition_Operator>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  value?: TMayBe<string>;
};

export default TPolicyRuleCondition;
