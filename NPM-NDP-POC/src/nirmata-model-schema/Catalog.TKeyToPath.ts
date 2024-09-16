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
  | 'id'
  | 'key'
  | 'labels'
  | 'mode'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'path'
  | 'service'
  | 'uri';

type TKeyToPath = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  key?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  mode?: TMayBe<string>;
  modelIndex?: 'KeyToPath';
  parent?: TMayBe<TModelBase>;
  path?: TMayBe<string>;
  service?: 'catalog';
};

export default TKeyToPath;
