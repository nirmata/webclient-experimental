/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TDeploymentStrategy from './Environments.TDeploymentStrategy';
import TPodTemplateSpec from './Environments.TPodTemplateSpec';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'minReadySeconds'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'paused'
  | 'progressDeadlineSeconds'
  | 'replicas'
  | 'revisionHistoryLimit'
  | 'selector'
  | 'service'
  | 'strategy'
  | 'template'
  | 'uri';

type TDeploymentSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  minReadySeconds?: TMayBe<number>;
  modelIndex?: 'DeploymentSpec';
  parent?: TMayBe<TModelBase>;
  paused?: TMayBe<boolean>;
  progressDeadlineSeconds?: TMayBe<number>;
  replicas?: TMayBe<number>;
  revisionHistoryLimit?: TMayBe<number>;
  selector?: TMayBe<Record<string, string>>;
  service?: 'environments';
  strategy?: TMayBe<TMayBe<TDeploymentStrategy>[]>;
  template?: TMayBe<TMayBe<TPodTemplateSpec>[]>;
};

export default TDeploymentSpec;
