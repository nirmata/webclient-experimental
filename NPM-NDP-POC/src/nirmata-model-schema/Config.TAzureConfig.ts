/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'attachPublicIp'
  | 'createdBy'
  | 'createdOn'
  | 'defaultPassword'
  | 'defaultUsername'
  | 'id'
  | 'image'
  | 'instanceType'
  | 'labels'
  | 'location'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'network'
  | 'parent'
  | 'parent'
  | 'resourceGroup'
  | 'routeTable'
  | 'securityGroups'
  | 'service'
  | 'storage'
  | 'subnet'
  | 'uri'
  | 'userData';

type TAzureConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  attachPublicIp?: TMayBe<boolean>;
  defaultPassword?: TMayBe<string>;
  defaultUsername?: TMayBe<string>;
  image?: TMayBe<string>;
  instanceType?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  location?: TMayBe<string>;
  modelIndex?: 'AzureConfig';
  network?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  resourceGroup?: TMayBe<string>;
  routeTable?: TMayBe<string>;
  securityGroups?: TMayBe<TMayBe<string>[]>;
  service?: 'config';
  storage?: TMayBe<string>;
  subnet?: TMayBe<string>;
  userData?: TMayBe<string>;
};

export default TAzureConfig;
