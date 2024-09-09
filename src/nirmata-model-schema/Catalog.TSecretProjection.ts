/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TKeyToPath from './Catalog.TKeyToPath';

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
  | 'name'
  | 'optional'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TSecretProjection = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  items?: TMayBe<TMayBe<TKeyToPath>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'SecretProjection';
  name?: TMayBe<string>;
  optional?: TMayBe<boolean>;
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
};

export default TSecretProjection;
