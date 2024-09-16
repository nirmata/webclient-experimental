/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import THTTPIngressRuleValue from './Environments.THTTPIngressRuleValue';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'host'
  | 'http'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TIngressRule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  host?: TMayBe<string>;
  http?: TMayBe<TMayBe<THTTPIngressRuleValue>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'IngressRule';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
};

export default TIngressRule;
