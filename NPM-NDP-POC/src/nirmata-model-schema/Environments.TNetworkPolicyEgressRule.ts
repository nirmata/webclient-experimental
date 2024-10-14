/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TNetworkPolicyPort from './Environments.TNetworkPolicyPort';
import TNetworkPolicyPeer from './Environments.TNetworkPolicyPeer';

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
  | 'ports'
  | 'service'
  | 'to'
  | 'uri';

type TNetworkPolicyEgressRule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NetworkPolicyEgressRule';
  parent?: TMayBe<TModelBase>;
  ports?: TMayBe<TMayBe<TNetworkPolicyPort>[]>;
  service?: 'environments';
  to?: TMayBe<TMayBe<TNetworkPolicyPeer>[]>;
};

export default TNetworkPolicyEgressRule;
