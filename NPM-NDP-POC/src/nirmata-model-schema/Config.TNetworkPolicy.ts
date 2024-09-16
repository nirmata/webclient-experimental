/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'allowICMP'
  | 'ancestors'
  | 'applications'
  | 'blockSize'
  | 'createdBy'
  | 'createdOn'
  | 'defaultAction'
  | 'driver'
  | 'gateway'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'subnetPool'
  | 'uri';

export type TNetworkPolicy_BlockSize =
  | 'size16'
  | 'size32'
  | 'size64'
  | 'size128'
  | 'size256'
  | 'size512'
  | 'size1024'
  | 'size2048'
  | 'size4096';

export type TNetworkPolicy_DefaultAction = 'allow' | 'deny';

export type TNetworkPolicy_Driver = 'contiv' | 'calico';

type TNetworkPolicy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  allowICMP?: TMayBe<boolean>;
  blockSize?: TMayBe<TNetworkPolicy_BlockSize>;
  defaultAction?: TMayBe<TNetworkPolicy_DefaultAction>;
  driver?: TMayBe<TNetworkPolicy_Driver>;
  gateway?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NetworkPolicy';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  subnetPool?: TMayBe<string>;
};

export default TNetworkPolicy;
