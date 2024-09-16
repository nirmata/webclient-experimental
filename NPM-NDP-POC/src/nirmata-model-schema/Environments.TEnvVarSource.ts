/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TConfigMapKeySelector from './Environments.TConfigMapKeySelector';
import TSecretKeySelector from './Environments.TSecretKeySelector';
import TObjectFieldSelector from './Environments.TObjectFieldSelector';
import TResourceFieldSelector from './Environments.TResourceFieldSelector';

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
  service?: 'environments';
};

export default TEnvVarSource;
