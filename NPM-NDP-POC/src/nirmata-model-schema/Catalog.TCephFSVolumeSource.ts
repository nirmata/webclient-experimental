/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TLocalObjectReference from './Catalog.TLocalObjectReference';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'monitors'
  | 'parent'
  | 'parent'
  | 'path'
  | 'readOnly'
  | 'secretFile'
  | 'secretRef'
  | 'service'
  | 'uri'
  | 'user';

type TCephFSVolumeSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CephFSVolumeSource';
  monitors?: TMayBe<TMayBe<string>[]>;
  parent?: TMayBe<TModelBase>;
  path?: TMayBe<string>;
  readOnly?: TMayBe<boolean>;
  secretFile?: TMayBe<string>;
  secretRef?: TMayBe<TMayBe<TLocalObjectReference>[]>;
  service?: 'catalog';
  user?: TMayBe<string>;
};

export default TCephFSVolumeSource;
