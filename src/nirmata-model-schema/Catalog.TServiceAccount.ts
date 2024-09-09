/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TObjectMeta from './Catalog.TObjectMeta';
import TLocalObjectReference from './Catalog.TLocalObjectReference';
import TObjectReference from './Catalog.TObjectReference';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'automountServiceAccountToken'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'imagePullSecrets'
  | 'kind'
  | 'labels'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'secrets'
  | 'service'
  | 'uri';

type TServiceAccount = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  automountServiceAccountToken?: TMayBe<boolean>;
  imagePullSecrets?: TMayBe<TMayBe<TLocalObjectReference>[]>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'ServiceAccount';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  secrets?: TMayBe<TMayBe<TObjectReference>[]>;
  service?: 'catalog';
};

export default TServiceAccount;
