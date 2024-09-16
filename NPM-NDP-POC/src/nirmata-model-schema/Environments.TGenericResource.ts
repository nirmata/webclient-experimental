/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'application'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'isNamespaced'
  | 'kind'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'properties'
  | 'service'
  | 'uri';

type TGenericResource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  isNamespaced?: TMayBe<boolean>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'GenericResource';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  properties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  service?: 'environments';
};

export default TGenericResource;
