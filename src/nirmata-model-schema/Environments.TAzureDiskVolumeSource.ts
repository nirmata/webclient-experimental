/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cachingMode'
  | 'createdBy'
  | 'createdOn'
  | 'diskName'
  | 'diskURI'
  | 'fsType'
  | 'id'
  | 'kind'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'readOnly'
  | 'service'
  | 'uri';

type TAzureDiskVolumeSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cachingMode?: TMayBe<string>;
  diskName?: TMayBe<string>;
  diskURI?: TMayBe<string>;
  fsType?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AzureDiskVolumeSource';
  parent?: TMayBe<TModelBase>;
  readOnly?: TMayBe<boolean>;
  service?: 'environments';
};

export default TAzureDiskVolumeSource;
