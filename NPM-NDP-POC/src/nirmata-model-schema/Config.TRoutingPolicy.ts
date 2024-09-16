/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TRoutingRule from './Config.TRoutingRule';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'defaultAction'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'rules'
  | 'service'
  | 'target'
  | 'uri';

export type TRoutingPolicy_DefaultAction = 'allow' | 'deny';

type TRoutingPolicy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  defaultAction?: TMayBe<TRoutingPolicy_DefaultAction>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'RoutingPolicy';
  parent?: TMayBe<TModelBase>;
  rules?: TMayBe<TMayBe<TRoutingRule>[]>;
  service?: 'config';
  target?: TMayBe<string>;
};

export default TRoutingPolicy;
