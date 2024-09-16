/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'categories'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kind'
  | 'labels'
  | 'listKind'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'plural'
  | 'service'
  | 'shortNames'
  | 'singular'
  | 'uri';

type TCustomResourceDefinitionNames = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  categories?: TMayBe<TMayBe<string>[]>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  listKind?: TMayBe<string>;
  modelIndex?: 'CustomResourceDefinitionNames';
  parent?: TMayBe<TModelBase>;
  plural?: TMayBe<string>;
  service?: 'catalog';
  shortNames?: TMayBe<TMayBe<string>[]>;
  singular?: TMayBe<string>;
};

export default TCustomResourceDefinitionNames;
