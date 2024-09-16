/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectReference from './Environments.TObjectReference';

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
  | 'nodeName'
  | 'parent'
  | 'parent'
  | 'service'
  | 'targetRef'
  | 'uri';

type TEndpointAddress = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  hostname?: TMayBe<string>;
  ip?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'EndpointAddress';
  nodeName?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  targetRef?: TMayBe<TMayBe<TObjectReference>[]>;
};

export default TEndpointAddress;
