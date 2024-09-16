/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TCustomResourceDefinitionNames from './Catalog.TCustomResourceDefinitionNames';
import TCustomResourceValidation from './Catalog.TCustomResourceValidation';
import TCustomResourceSubresources from './Catalog.TCustomResourceSubresources';
import TCustomResourceDefinitionVersion from './Catalog.TCustomResourceDefinitionVersion';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'group'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'names'
  | 'parent'
  | 'parent'
  | 'scope'
  | 'service'
  | 'subresources'
  | 'uri'
  | 'validation'
  | 'version'
  | 'versions';

type TCustomResourceDefinitionSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  group?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CustomResourceDefinitionSpec';
  names?: TMayBe<TMayBe<TCustomResourceDefinitionNames>[]>;
  parent?: TMayBe<TModelBase>;
  scope?: TMayBe<string>;
  service?: 'catalog';
  subresources?: TMayBe<TMayBe<TCustomResourceSubresources>[]>;
  validation?: TMayBe<TMayBe<TCustomResourceValidation>[]>;
  version?: TMayBe<string>;
  versions?: TMayBe<TMayBe<TCustomResourceDefinitionVersion>[]>;
};

export default TCustomResourceDefinitionSpec;
