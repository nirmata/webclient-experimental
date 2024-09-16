/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TConfigMapKeySelector from './Catalog.TConfigMapKeySelector';
import TSecretKeySelector from './Catalog.TSecretKeySelector';
import TObjectFieldSelector from './Catalog.TObjectFieldSelector';
import TResourceFieldSelector from './Catalog.TResourceFieldSelector';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'configMapKeyRef'
  | 'createdBy'
  | 'createdOn'
  | 'fieldRef'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'resourceFieldRef'
  | 'secretKeyRef'
  | 'service'
  | 'uri';

type TEnvVarSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  configMapKeyRef?: TMayBe<TMayBe<TConfigMapKeySelector>[]>;
  fieldRef?: TMayBe<TMayBe<TObjectFieldSelector>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'EnvVarSource';
  parent?: TMayBe<TModelBase>;
  resourceFieldRef?: TMayBe<TMayBe<TResourceFieldSelector>[]>;
  secretKeyRef?: TMayBe<TMayBe<TSecretKeySelector>[]>;
  service?: 'catalog';
};

export default TEnvVarSource;
