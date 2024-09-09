/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TDesiredService from './Config.TDesiredService';
import TScalingPolicy from './Config.TScalingPolicy';
import TGatewayPolicy from './Config.TGatewayPolicy';
import TCluster from './Config.TCluster';
import TUpdatePolicy from './Config.TUpdatePolicy';
import TDesiredServiceLabelSelector from './Config.TDesiredServiceLabelSelector';
import TEnvironmentVariable from './Config.TEnvironmentVariable';
import TEnvironmentAction from './Config.TEnvironmentAction';
import TAccessControlList from './Config.TAccessControlList';
import TRoutingPolicy from './Config.TRoutingPolicy';
import TNetwork from './Config.TNetwork';
import TAvailabilityStats from './Config.TAvailabilityStats';

export type TField =
  | 'accessControlList'
  | 'action'
  | 'actions'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'application'
  | 'applicationId'
  | 'applicationName'
  | 'availabilityStats'
  | 'clusters'
  | 'createdBy'
  | 'createdOn'
  | 'dependsOn'
  | 'desiredServices'
  | 'environmentHostCluster'
  | 'environmentType'
  | 'environmentVariables'
  | 'executionState'
  | 'gateway'
  | 'gatewayPolicy'
  | 'hostCluster'
  | 'id'
  | 'labelSelectors'
  | 'labels'
  | 'lastFailure'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'network'
  | 'notUpdateSince'
  | 'orchestrator'
  | 'parent'
  | 'parent'
  | 'requiredBy'
  | 'routingPolicy'
  | 'scalingPolicy'
  | 'secondaryState'
  | 'service'
  | 'startedOn'
  | 'state'
  | 'status'
  | 'updatePolicy'
  | 'uri';

export type TEnvironment_Action = 'none' | 'delete';

export type TEnvironment_ExecutionState =
  | 'pendingCreate'
  | 'pendingDelete'
  | 'pendingResources'
  | 'pendingExecution'
  | 'pendingUpgrade'
  | 'none';

export type TEnvironment_Orchestrator = 'nirmata' | 'kubernetes';

export type TEnvironment_SecondaryState =
  | 'none'
  | 'executingPostCreateWebHook'
  | 'executingPostDeleteWebHook'
  | 'postCreateWebHookFailed'
  | 'postDeleteWebHookFailed';

export type TEnvironment_State = 'running' | 'failed' | 'unknown' | 'stopped' | 'degraded' | 'executing';

type TEnvironment = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  action?: TMayBe<TEnvironment_Action>;
  actions?: TMayBe<TMayBe<TEnvironmentAction>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  applicationId?: TMayBe<string>;
  applicationName?: TMayBe<string>;
  availabilityStats?: TMayBe<TMayBe<TAvailabilityStats>[]>;
  clusters?: TMayBe<TMayBe<TCluster>[]>;
  desiredServices?: TMayBe<TMayBe<TDesiredService>[]>;
  environmentHostCluster?: TMayBe<TModelBase>;
  environmentVariables?: TMayBe<TMayBe<TEnvironmentVariable>[]>;
  executionState?: TMayBe<TEnvironment_ExecutionState>;
  gatewayPolicy?: TMayBe<TMayBe<TGatewayPolicy>[]>;
  hostCluster?: TMayBe<TModelBase>;
  labelSelectors?: TMayBe<TMayBe<TDesiredServiceLabelSelector>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastFailure?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  modelIndex?: 'Environment';
  name?: TMayBe<string>;
  network?: TMayBe<TMayBe<TNetwork>[]>;
  notUpdateSince?: TMayBe<number>;
  orchestrator?: TMayBe<TEnvironment_Orchestrator>;
  parent?: TMayBe<TModelBase>;
  routingPolicy?: TMayBe<TMayBe<TRoutingPolicy>[]>;
  scalingPolicy?: TMayBe<TMayBe<TScalingPolicy>[]>;
  secondaryState?: TMayBe<TEnvironment_SecondaryState>;
  service?: 'config';
  startedOn?: TMayBe<number>;
  state?: TMayBe<TEnvironment_State>;
  status?: TMayBe<TMayBe<string>[]>;
  updatePolicy?: TMayBe<TMayBe<TUpdatePolicy>[]>;
};

export default TEnvironment;
