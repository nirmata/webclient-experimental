/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cloudProviders'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'lastSeen'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'registries'
  | 'service'
  | 'state'
  | 'status'
  | 'uri';

export type TPrivateCloud_State =
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

type TPrivateCloud = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSeen?: TMayBe<number>;
  modelIndex?: 'PrivateCloud';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  state?: TMayBe<TPrivateCloud_State>;
  status?: TMayBe<TMayBe<string>[]>;
};

export default TPrivateCloud;
