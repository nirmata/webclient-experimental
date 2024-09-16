/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TDownwardAPIVolumeFile from './Environments.TDownwardAPIVolumeFile';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'items'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TDownwardAPIProjection = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  items?: TMayBe<TMayBe<TDownwardAPIVolumeFile>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'DownwardAPIProjection';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
};

export default TDownwardAPIProjection;
