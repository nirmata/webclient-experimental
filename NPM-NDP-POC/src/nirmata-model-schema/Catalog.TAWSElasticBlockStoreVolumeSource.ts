/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

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
  | 'readOnly'
  | 'service'
  | 'uri'
  | 'volumeId';

type TAWSElasticBlockStoreVolumeSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  fsType?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AWSElasticBlockStoreVolumeSource';
  parent?: TMayBe<TModelBase>;
  partition?: TMayBe<number>;
  readOnly?: TMayBe<boolean>;
  service?: 'catalog';
  volumeId?: TMayBe<string>;
};

export default TAWSElasticBlockStoreVolumeSource;
