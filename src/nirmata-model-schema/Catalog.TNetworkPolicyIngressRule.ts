/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TNetworkPolicyPort from './Catalog.TNetworkPolicyPort';
import TNetworkPolicyPeer from './Catalog.TNetworkPolicyPeer';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'from'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'ports'
  | 'service'
  | 'uri';

type TNetworkPolicyIngressRule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  from?: TMayBe<TMayBe<TNetworkPolicyPeer>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NetworkPolicyIngressRule';
  parent?: TMayBe<TModelBase>;
  ports?: TMayBe<TMayBe<TNetworkPolicyPort>[]>;
  service?: 'catalog';
};

export default TNetworkPolicyIngressRule;
