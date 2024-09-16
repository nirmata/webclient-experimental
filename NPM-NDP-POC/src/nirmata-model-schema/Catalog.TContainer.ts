/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TContainerPort from './Catalog.TContainerPort';
import TEnvVar from './Catalog.TEnvVar';
import TVolumeMount from './Catalog.TVolumeMount';
import TProbe from './Catalog.TProbe';
import TLifecycle from './Catalog.TLifecycle';
import TSecurityContext from './Catalog.TSecurityContext';
import TContainerResourceRequirements from './Catalog.TContainerResourceRequirements';
import TEnvFromSource from './Catalog.TEnvFromSource';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'args'
  | 'command'
  | 'createdBy'
  | 'createdOn'
  | 'env'
  | 'envFrom'
  | 'id'
  | 'image'
  | 'imagePullPolicy'
  | 'labels'
  | 'lifecycle'
  | 'livenessProbe'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'ports'
  | 'readinessProbe'
  | 'resources'
  | 'securityContext'
  | 'service'
  | 'startupProbe'
  | 'stdin'
  | 'stdinOnce'
  | 'terminationMessagePath'
  | 'terminationMessagePolicy'
  | 'tty'
  | 'uri'
  | 'volumeMounts'
  | 'workDir';

export type TContainer_ImagePullPolicy = 'Always' | 'Never' | 'IfNotPresent';

type TContainer = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  args?: TMayBe<TMayBe<string>[]>;
  command?: TMayBe<TMayBe<string>[]>;
  env?: TMayBe<TMayBe<TEnvVar>[]>;
  envFrom?: TMayBe<TMayBe<TEnvFromSource>[]>;
  image?: TMayBe<string>;
  imagePullPolicy?: TMayBe<TContainer_ImagePullPolicy>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lifecycle?: TMayBe<TMayBe<TLifecycle>[]>;
  livenessProbe?: TMayBe<TMayBe<TProbe>[]>;
  modelIndex?: 'Container';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  ports?: TMayBe<TMayBe<TContainerPort>[]>;
  readinessProbe?: TMayBe<TMayBe<TProbe>[]>;
  resources?: TMayBe<TMayBe<TContainerResourceRequirements>[]>;
  securityContext?: TMayBe<TMayBe<TSecurityContext>[]>;
  service?: 'catalog';
  startupProbe?: TMayBe<TMayBe<TProbe>[]>;
  stdin?: TMayBe<boolean>;
  stdinOnce?: TMayBe<boolean>;
  terminationMessagePath?: TMayBe<string>;
  terminationMessagePolicy?: TMayBe<string>;
  tty?: TMayBe<boolean>;
  volumeMounts?: TMayBe<TMayBe<TVolumeMount>[]>;
  workDir?: TMayBe<string>;
};

export default TContainer;
