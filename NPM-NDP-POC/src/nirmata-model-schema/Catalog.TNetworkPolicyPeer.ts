/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TIPBlock from './Catalog.TIPBlock';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'ipBlock'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespaceSelector'
  | 'parent'
  | 'parent'
  | 'podSelector'
  | 'service'
  | 'uri';

type TNetworkPolicyPeer = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  ipBlock?: TMayBe<TMayBe<TIPBlock>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NetworkPolicyPeer';
  namespaceSelector?: TMayBe<Record<string, string>>;
  parent?: TMayBe<TModelBase>;
  podSelector?: TMayBe<Record<string, string>>;
  service?: 'catalog';
};

export default TNetworkPolicyPeer;
