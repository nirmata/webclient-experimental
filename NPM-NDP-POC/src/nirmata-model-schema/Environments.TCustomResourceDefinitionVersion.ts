/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TCustomResourceValidation from './Environments.TCustomResourceValidation';
import TCustomResourceSubresources from './Environments.TCustomResourceSubresources';

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
  | 'name'
  | 'parent'
  | 'parent'
  | 'schema'
  | 'served'
  | 'service'
  | 'storage'
  | 'subresources'
  | 'uri';

type TCustomResourceDefinitionVersion = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CustomResourceDefinitionVersion';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  schema?: TMayBe<TMayBe<TCustomResourceValidation>[]>;
  served?: TMayBe<boolean>;
  service?: 'environments';
  storage?: TMayBe<boolean>;
  subresources?: TMayBe<TMayBe<TCustomResourceSubresources>[]>;
};

export default TCustomResourceDefinitionVersion;
