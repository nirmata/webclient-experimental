/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import THTTPIngressPath from './Catalog.THTTPIngressPath';

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
  | 'parent'
  | 'parent'
  | 'paths'
  | 'service'
  | 'uri';

type THTTPIngressRuleValue = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'HTTPIngressRuleValue';
  parent?: TMayBe<TModelBase>;
  paths?: TMayBe<TMayBe<THTTPIngressPath>[]>;
  service?: 'catalog';
};

export default THTTPIngressRuleValue;
