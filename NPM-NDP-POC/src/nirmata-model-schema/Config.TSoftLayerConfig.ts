/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'autoScaleGroup'
  | 'cpu'
  | 'createdBy'
  | 'createdOn'
  | 'diskSize'
  | 'diskType'
  | 'id'
  | 'image'
  | 'keypair'
  | 'labels'
  | 'location'
  | 'memory'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'network'
  | 'parent'
  | 'parent'
  | 'service'
  | 'softLayerConfigType'
  | 'uri';

export type TSoftLayerConfig_DiskType = 'local' | 'san';

export type TSoftLayerConfig_SoftLayerConfigType = 'image' | 'autoscalegroup';

type TSoftLayerConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  autoScaleGroup?: TMayBe<string>;
  cpu?: TMayBe<number>;
  diskSize?: TMayBe<number>;
  diskType?: TMayBe<TSoftLayerConfig_DiskType>;
  image?: TMayBe<string>;
  keypair?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  location?: TMayBe<string>;
  memory?: TMayBe<number>;
  modelIndex?: 'SoftLayerConfig';
  network?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  softLayerConfigType?: TMayBe<TSoftLayerConfig_SoftLayerConfigType>;
};

export default TSoftLayerConfig;
