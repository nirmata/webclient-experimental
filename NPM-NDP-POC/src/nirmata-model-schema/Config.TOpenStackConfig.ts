/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'attachFloatingIp'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'image'
  | 'instanceType'
  | 'keypair'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'network'
  | 'parent'
  | 'parent'
  | 'securityGroups'
  | 'service'
  | 'uri'
  | 'userData';

type TOpenStackConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  attachFloatingIp?: TMayBe<boolean>;
  image?: TMayBe<string>;
  instanceType?: TMayBe<string>;
  keypair?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'OpenStackConfig';
  network?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  securityGroups?: TMayBe<TMayBe<string>[]>;
  service?: 'config';
  userData?: TMayBe<string>;
};

export default TOpenStackConfig;
