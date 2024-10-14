/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'action'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'fromService'
  | 'fromTag'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'ruleNumber'
  | 'service'
  | 'toService'
  | 'toTag'
  | 'uri';

export type TRoutingRule_Action = 'allow' | 'deny';

type TRoutingRule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  action?: TMayBe<TRoutingRule_Action>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  fromService?: TMayBe<string>;
  fromTag?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'RoutingRule';
  parent?: TMayBe<TModelBase>;
  ruleNumber?: TMayBe<number>;
  service?: 'config';
  toService?: TMayBe<string>;
  toTag?: TMayBe<string>;
};

export default TRoutingRule;
