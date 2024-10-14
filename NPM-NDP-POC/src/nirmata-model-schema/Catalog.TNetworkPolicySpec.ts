/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TNetworkPolicyIngressRule from './Catalog.TNetworkPolicyIngressRule';
import TNetworkPolicyEgressRule from './Catalog.TNetworkPolicyEgressRule';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'egress'
  | 'id'
  | 'ingress'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'podSelector'
  | 'policyTypes'
  | 'service'
  | 'uri';

type TNetworkPolicySpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  egress?: TMayBe<TMayBe<TNetworkPolicyEgressRule>[]>;
  ingress?: TMayBe<TMayBe<TNetworkPolicyIngressRule>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NetworkPolicySpec';
  parent?: TMayBe<TModelBase>;
  podSelector?: TMayBe<Record<string, string>>;
  policyTypes?: TMayBe<TMayBe<string>[]>;
  service?: 'catalog';
};

export default TNetworkPolicySpec;
