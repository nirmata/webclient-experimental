/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TServicePort from './Config.TServicePort';
import TServiceInstanceAction from './Config.TServiceInstanceAction';
import TServiceInstanceStats from './Config.TServiceInstanceStats';
import TLaunchConfiguration from './Config.TLaunchConfiguration';

export type TField =
  | 'actions'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterNode'
  | 'container'
  | 'containerName'
  | 'createdBy'
  | 'createdOn'
  | 'errorCode'
  | 'errorReason'
  | 'executionState'
  | 'failureReason'
  | 'healthCheckState'
  | 'id'
  | 'image'
  | 'imageCreationTime'
  | 'imageDigest'
  | 'imageId'
  | 'ipAddress'
  | 'labels'
  | 'launchConfiguration'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'ports'
  | 'service'
  | 'serviceInstanceStats'
  | 'state'
  | 'status'
  | 'tag'
  | 'uri';

export type TServiceInstance_ErrorCode =
  | 'MemoryLimitReached'
  | 'InternalError'
  | 'NoSuitableHost'
  | 'DependencyInjectionError'
  | 'HostNotConnectedAndUnreachable'
  | 'HostNotConnected'
  | 'ContainerCreationError'
  | 'ContainerNotRunning'
  | 'ContainerNotFound'
  | 'ContainerFailed'
  | 'NoSpaceLeftOnHost'
  | 'NoError'
  | 'UnknownError'
  | 'ServiceInstanceFailure'
  | 'ServiceInstanceRestartFailureContainerDeleteFailed'
  | 'ServiceInstanceRestartFailureUnexpectedException'
  | 'ContainerCreationFailedOnHost'
  | 'ContainerCreationFailedUnexpectedException'
  | 'ContainerCreationTimeout'
  | 'ContainerStoppedOnHost'
  | 'ContainerNotRunningOnHost'
  | 'ContainerNotFoundOnHost'
  | 'ServiceInstancePlacementFailedUnexpectedException'
  | 'ServiceInstancePlacementFailedNoSuitableHost'
  | 'ServiceInstancePlacementFailedDependencyInjectionError'
  | 'VolumeCreationFailed'
  | 'VolumeCreationFailedUnexpectedException'
  | 'ContainerExitedAbruptly'
  | 'ContainerExistedAbruptlyMemoryLimitReached'
  | 'ContainerStartFailed'
  | 'ContainerStartFailedUnexpectedException'
  | 'ContainerStopFailed'
  | 'ContainerStopFailedUnexpectedException'
  | 'ContainerDeleteFailed'
  | 'ContainerDeleteFailedUnexpectedException'
  | 'FailedToRetrieveContainerOnHost'
  | 'ContainerMissingInDatabase'
  | 'ServiceInstanceRestartFailedUnexpectedException'
  | 'ServiceInstanceFailedHostNotConnectedAndUnreachable'
  | 'ServiceInstanceFailedHostNotConnected'
  | 'PullImageFailed'
  | 'PullImageFailedNoSpaceLeftOnHost'
  | 'HealthCheckFailed'
  | 'HealthCheckFailedConnectionReset'
  | 'HealthCheckFailedProxyError'
  | 'HealthCheckFailedInternalServerError'
  | 'HealthCheckFailedEOF'
  | 'HealthCheckFailedNotFound'
  | 'HealthCheckFailedTimeout';

export type TServiceInstance_ErrorReason = 'noHostAvailable' | 'noResourceSelectionRule' | 'none';

export type TServiceInstance_ExecutionState =
  | 'pendingCreate'
  | 'pendingDelete'
  | 'pendingHealthCheck'
  | 'pendingVolumeCreation'
  | 'volumeCreationComplete'
  | 'pendingRouteCheck'
  | 'downloadingImage'
  | 'downloadingImageComplete'
  | 'pendingDependency'
  | 'pendingResources'
  | 'pendingStop'
  | 'none';

export type TServiceInstance_FailureReason =
  | 'none'
  | 'imageDownloadFailed'
  | 'unreachable'
  | 'healthCheckFailed'
  | 'containerCreateFailed'
  | 'containerStartFailed';

export type TServiceInstance_HealthCheckState = 'notApplicable' | 'failed' | 'completed' | 'pending';

export type TServiceInstance_State = 'running' | 'failed' | 'unreachable' | 'stopped' | 'unknown' | 'executing';

type TServiceInstance = Omit<TModelBase, 'service' | 'modelIndex'> & {
  actions?: TMayBe<TMayBe<TServiceInstanceAction>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  containerName?: TMayBe<string>;
  errorCode?: TMayBe<TServiceInstance_ErrorCode>;
  errorReason?: TMayBe<TServiceInstance_ErrorReason>;
  executionState?: TMayBe<TServiceInstance_ExecutionState>;
  failureReason?: TMayBe<TServiceInstance_FailureReason>;
  healthCheckState?: TMayBe<TServiceInstance_HealthCheckState>;
  image?: TMayBe<string>;
  imageCreationTime?: TMayBe<string>;
  imageDigest?: TMayBe<string>;
  imageId?: TMayBe<string>;
  ipAddress?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  launchConfiguration?: TMayBe<TMayBe<TLaunchConfiguration>[]>;
  modelIndex?: 'ServiceInstance';
  parent?: TMayBe<TModelBase>;
  ports?: TMayBe<TMayBe<TServicePort>[]>;
  service?: 'config';
  serviceInstanceStats?: TMayBe<TMayBe<TServiceInstanceStats>[]>;
  state?: TMayBe<TServiceInstance_State>;
  status?: TMayBe<TMayBe<string>[]>;
  tag?: TMayBe<string>;
};

export default TServiceInstance;
