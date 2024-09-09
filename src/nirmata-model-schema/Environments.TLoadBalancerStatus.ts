/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TLoadBalancerIngress from './Environments.TLoadBalancerIngress';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'ingress'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TLoadBalancerStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  ingress?: TMayBe<TMayBe<TLoadBalancerIngress>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'LoadBalancerStatus';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
};

export default TLoadBalancerStatus;
