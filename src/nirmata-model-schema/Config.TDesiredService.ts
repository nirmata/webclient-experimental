/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TDesiredServiceAction from './Config.TDesiredServiceAction';
import TImageUpdateEvent from './Config.TImageUpdateEvent';
import TServiceSpec from './Config.TServiceSpec';
import TDesiredServiceStats from './Config.TDesiredServiceStats';
import TServiceInstance from './Config.TServiceInstance';

export type TField =
  | 'actions'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cluster'
  | 'createdBy'
  | 'createdOn'
  | 'dependsOn'
  | 'desiredServiceStats'
  | 'executionState'
  | 'gatewayEnvironment'
  | 'hasNewConfiguration'
  | 'id'
  | 'imageCreationTime'
  | 'imageDigest'
  | 'imageRepository'
  | 'imageUpdateEvent'
  | 'ipAddress'
  | 'isCluster'
  | 'labelSelectors'
  | 'labels'
  | 'lastFailure'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'notUpdateSince'
  | 'parent'
  | 'parent'
  | 'requiredBy'
  | 'runningCount'
  | 'runningSince'
  | 'scalingRule'
  | 'service'
  | 'serviceId'
  | 'serviceInstances'
  | 'serviceName'
  | 'serviceRef'
  | 'serviceSpec'
  | 'startedOn'
  | 'state'
  | 'status'
  | 'tag'
  | 'uri'
  | 'version';

export type TDesiredService_ExecutionState =
  | 'pendingCreate'
  | 'pendingDelete'
  | 'pendingResources'
  | 'pendingExecution'
  | 'none';

export type TDesiredService_State =
  | 'running'
  | 'failed'
  | 'degraded'
  | 'unknown'
  | 'stopped'
  | 'executing'
  | 'unreachable';

type TDesiredService = Omit<TModelBase, 'service' | 'modelIndex'> & {
  actions?: TMayBe<TMayBe<TDesiredServiceAction>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  desiredServiceStats?: TMayBe<TMayBe<TDesiredServiceStats>[]>;
  executionState?: TMayBe<TDesiredService_ExecutionState>;
  hasNewConfiguration?: TMayBe<boolean>;
  imageCreationTime?: TMayBe<string>;
  imageDigest?: TMayBe<string>;
  imageRepository?: TMayBe<string>;
  imageUpdateEvent?: TMayBe<TMayBe<TImageUpdateEvent>[]>;
  ipAddress?: TMayBe<string>;
  isCluster?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastFailure?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  modelIndex?: 'DesiredService';
  name?: TMayBe<string>;
  notUpdateSince?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  runningCount?: TMayBe<number>;
  runningSince?: TMayBe<number>;
  service?: 'config';
  serviceId?: TMayBe<string>;
  serviceInstances?: TMayBe<TMayBe<TServiceInstance>[]>;
  serviceName?: TMayBe<string>;
  serviceSpec?: TMayBe<TMayBe<TServiceSpec>[]>;
  startedOn?: TMayBe<number>;
  state?: TMayBe<TDesiredService_State>;
  status?: TMayBe<TMayBe<string>[]>;
  tag?: TMayBe<string>;
  version?: TMayBe<string>;
};

export default TDesiredService;
