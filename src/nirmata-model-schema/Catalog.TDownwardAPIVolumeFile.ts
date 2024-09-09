/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TObjectFieldSelector from './Catalog.TObjectFieldSelector';
import TResourceFieldSelector from './Catalog.TResourceFieldSelector';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'fieldRef'
  | 'id'
  | 'labels'
  | 'mode'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'path'
  | 'resourceFieldRef'
  | 'service'
  | 'uri';

type TDownwardAPIVolumeFile = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  fieldRef?: TMayBe<TMayBe<TObjectFieldSelector>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  mode?: TMayBe<string>;
  modelIndex?: 'DownwardAPIVolumeFile';
  parent?: TMayBe<TModelBase>;
  path?: TMayBe<string>;
  resourceFieldRef?: TMayBe<TMayBe<TResourceFieldSelector>[]>;
  service?: 'catalog';
};

export default TDownwardAPIVolumeFile;
