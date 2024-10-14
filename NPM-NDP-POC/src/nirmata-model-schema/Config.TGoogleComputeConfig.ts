/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'diskSize'
  | 'diskType'
  | 'gceConfigType'
  | 'id'
  | 'image'
  | 'imageSize'
  | 'instanceGroup'
  | 'instanceType'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'network'
  | 'parent'
  | 'parent'
  | 'preemptibility'
  | 'region'
  | 'service'
  | 'subnetwork'
  | 'tags'
  | 'uri'
  | 'userData';

export type TGoogleComputeConfig_DiskType = 'standard' | 'ssd';

export type TGoogleComputeConfig_GceConfigType = 'images' | 'instanceGroup';

type TGoogleComputeConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  diskSize?: TMayBe<number>;
  diskType?: TMayBe<TGoogleComputeConfig_DiskType>;
  gceConfigType?: TMayBe<TGoogleComputeConfig_GceConfigType>;
  image?: TMayBe<string>;
  imageSize?: TMayBe<number>;
  instanceGroup?: TMayBe<string>;
  instanceType?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'GoogleComputeConfig';
  network?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  preemptibility?: TMayBe<boolean>;
  region?: TMayBe<string>;
  service?: 'config';
  subnetwork?: TMayBe<string>;
  tags?: TMayBe<TMayBe<string>[]>;
  userData?: TMayBe<string>;
};

export default TGoogleComputeConfig;
