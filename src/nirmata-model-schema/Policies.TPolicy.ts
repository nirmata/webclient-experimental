/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TPolicyRuleData from './Policies.TPolicyRuleData';
import TAlarm from './Policies.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'annotations'
  | 'apiVersion'
  | 'clusterRef'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kind'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'resourceVersion'
  | 'rules'
  | 'service'
  | 'uid'
  | 'uri'
  | 'yaml';

type TPolicy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  annotations?: TMayBe<Record<string, TMayBe<string>>>;
  apiVersion?: TMayBe<string>;
  clusterRef?: TMayBe<TModelBase>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Policy';
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  resourceVersion?: TMayBe<string>;
  rules?: TMayBe<TMayBe<TPolicyRuleData>[]>;
  service?: 'policies';
  uid?: TMayBe<string>;
  yaml?: TMayBe<string>;
};

export default TPolicy;
