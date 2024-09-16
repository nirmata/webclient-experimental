/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TContainerAction from './Config.TContainerAction';
import TContainerDataStream from './Config.TContainerDataStream';
import TContainerStats from './Config.TContainerStats';

export type TField =
  | 'actions'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'containerId'
  | 'containerStats'
  | 'createdBy'
  | 'createdOn'
  | 'dataStream'
  | 'id'
  | 'info'
  | 'ipAddress'
  | 'labels'
  | 'lastSeen'
  | 'managementType'
  | 'memory'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'serviceInstance'
  | 'state'
  | 'uri'
  | 'volumes';

export type TContainer_ManagementType = 'managed' | 'unmanaged' | 'orphan' | 'system' | 'kubernetesManaged';

export type TContainer_State =
  | 'failed'
  | 'imageDownloadFailed'
  | 'unreachable'
  | 'pending'
  | 'pendingDependency'
  | 'pendingCreate'
  | 'pendingConnect'
  | 'pendingChanges'
  | 'pendingHealthCheck'
  | 'executingChanges'
  | 'changesExecuted'
  | 'downloadingImage'
  | 'downloadingImageComplete'
  | 'rebooting'
  | 'running'
  | 'stopping'
  | 'shuttingDown'
  | 'stopped'
  | 'notConnected'
  | 'connected'
  | 'available'
  | 'notAvailable'
  | 'deleted'
  | 'unknown'
  | 'idle'
  | 'ignored'
  | 'terminating'
  | 'degraded'
  | 'executing';

type TContainer = Omit<TModelBase, 'service' | 'modelIndex'> & {
  actions?: TMayBe<TMayBe<TContainerAction>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  containerId?: TMayBe<string>;
  containerStats?: TMayBe<TMayBe<TContainerStats>[]>;
  dataStream?: TMayBe<TMayBe<TContainerDataStream>[]>;
  info?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  ipAddress?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSeen?: TMayBe<number>;
  managementType?: TMayBe<TContainer_ManagementType>;
  memory?: TMayBe<number>;
  modelIndex?: 'Container';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  state?: TMayBe<TContainer_State>;
  volumes?: TMayBe<TMayBe<TModelBase>[]>;
};

export default TContainer;
