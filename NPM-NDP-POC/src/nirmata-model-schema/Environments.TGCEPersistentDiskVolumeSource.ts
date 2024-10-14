/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'fsType'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'partition'
  | 'pdName'
  | 'readOnly'
  | 'service'
  | 'uri';

type TGCEPersistentDiskVolumeSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  fsType?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'GCEPersistentDiskVolumeSource';
  parent?: TMayBe<TModelBase>;
  partition?: TMayBe<number>;
  pdName?: TMayBe<string>;
  readOnly?: TMayBe<boolean>;
  service?: 'environments';
};

export default TGCEPersistentDiskVolumeSource;
