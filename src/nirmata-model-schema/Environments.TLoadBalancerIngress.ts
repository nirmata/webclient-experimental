/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TPortStatus from './Environments.TPortStatus';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'hostname'
  | 'id'
  | 'ip'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'ports'
  | 'service'
  | 'uri';

type TLoadBalancerIngress = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  hostname?: TMayBe<string>;
  ip?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'LoadBalancerIngress';
  parent?: TMayBe<TModelBase>;
  ports?: TMayBe<TMayBe<TPortStatus>[]>;
  service?: 'environments';
};

export default TLoadBalancerIngress;
