/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'containerMountPoint'
  | 'createdBy'
  | 'createdOn'
  | 'hostPath'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'size'
  | 'storagePolicy'
  | 'type'
  | 'uri'
  | 'volumeName';

export type TVolumeSpec_Type = 'hostDirectory' | 'namedVolume';

type TVolumeSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  containerMountPoint?: TMayBe<string>;
  hostPath?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'VolumeSpec';
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  size?: TMayBe<number>;
  type?: TMayBe<TVolumeSpec_Type>;
  volumeName?: TMayBe<string>;
};

export default TVolumeSpec;
