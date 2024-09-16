/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TConfigMapEnvSource from './Catalog.TConfigMapEnvSource';
import TSecretEnvSource from './Catalog.TSecretEnvSource';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'configMapRef'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'prefix'
  | 'secretRef'
  | 'service'
  | 'uri';

type TEnvFromSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  configMapRef?: TMayBe<TMayBe<TConfigMapEnvSource>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'EnvFromSource';
  parent?: TMayBe<TModelBase>;
  prefix?: TMayBe<string>;
  secretRef?: TMayBe<TMayBe<TSecretEnvSource>[]>;
  service?: 'catalog';
};

export default TEnvFromSource;
