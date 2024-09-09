/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cloudProvider'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'isNirmataPreferred'
  | 'labels'
  | 'lastSeen'
  | 'location'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'password'
  | 'privateCloud'
  | 'provider'
  | 'service'
  | 'state'
  | 'status'
  | 'uri'
  | 'username'
  | 'version';

export type TRegistry_Provider = 'docker' | 'ecr' | 'artifactory' | 'nexus' | 'harbor' | 'ocr' | 'gcr' | 'acr';

export type TRegistry_State =
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

export type TRegistry_Version = 'v1' | 'v2';

type TRegistry = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  isNirmataPreferred?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSeen?: TMayBe<number>;
  location?: TMayBe<string>;
  modelIndex?: 'Registry';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  password?: TMayBe<string>;
  provider?: TMayBe<TRegistry_Provider>;
  service?: 'config';
  state?: TMayBe<TRegistry_State>;
  status?: TMayBe<TMayBe<string>[]>;
  username?: TMayBe<string>;
  version?: TMayBe<TRegistry_Version>;
};

export default TRegistry;
