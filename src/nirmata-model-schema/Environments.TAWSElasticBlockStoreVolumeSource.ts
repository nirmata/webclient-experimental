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
  | 'readvolumeIDOnly'
  | 'service'
  | 'uri';

type TAWSElasticBlockStoreVolumeSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  fsType?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AWSElasticBlockStoreVolumeSource';
  parent?: TMayBe<TModelBase>;
  partition?: TMayBe<number>;
  readvolumeIDOnly?: TMayBe<string>;
  service?: 'environments';
};

export default TAWSElasticBlockStoreVolumeSource;
