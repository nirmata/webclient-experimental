/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import THostGroup from './Config.THostGroup';
import TVolume from './Config.TVolume';
import TAccessControlList from './Config.TAccessControlList';

export type TField =
  | 'accessControlList'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiKey'
  | 'awsAccessKeyId'
  | 'awsExternalId'
  | 'awsRoleArn'
  | 'awsSecretKey'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'email'
  | 'endpoint'
  | 'hostGroups'
  | 'id'
  | 'isDirectConnect'
  | 'labels'
  | 'lastSeen'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'password'
  | 'privateCloud'
  | 'region'
  | 'registry'
  | 'service'
  | 'serviceState'
  | 'state'
  | 'status'
  | 'subscriptionId'
  | 'tenant'
  | 'type'
  | 'uri'
  | 'username'
  | 'volumes';

export type TCloudProvider_ServiceState = 'enabled' | 'disabled' | 'preparing' | 'pollingDisabled';

export type TCloudProvider_State =
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

export type TCloudProvider_Type =
  | 'AWS'
  | 'vSphere'
  | 'OpenStack'
  | 'Azure'
  | 'Other'
  | 'DigitalOcean'
  | 'GoogleCloudPlatform'
  | 'OracleCloudServices'
  | 'Diamanti'
  | 'HyperFlex'
  | 'IBMCloud'
  | 'Pivotal'
  | 'Nutanix';

type TCloudProvider = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiKey?: TMayBe<string>;
  awsAccessKeyId?: TMayBe<string>;
  awsExternalId?: TMayBe<string>;
  awsRoleArn?: TMayBe<string>;
  awsSecretKey?: TMayBe<string>;
  description?: TMayBe<string>;
  email?: TMayBe<string>;
  endpoint?: TMayBe<string>;
  hostGroups?: TMayBe<TMayBe<THostGroup>[]>;
  isDirectConnect?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSeen?: TMayBe<number>;
  modelIndex?: 'CloudProvider';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  password?: TMayBe<string>;
  region?: TMayBe<string>;
  service?: 'config';
  serviceState?: TMayBe<TCloudProvider_ServiceState>;
  state?: TMayBe<TCloudProvider_State>;
  status?: TMayBe<TMayBe<string>[]>;
  subscriptionId?: TMayBe<string>;
  tenant?: TMayBe<string>;
  type?: TMayBe<TCloudProvider_Type>;
  username?: TMayBe<string>;
  volumes?: TMayBe<TMayBe<TVolume>[]>;
};

export default TCloudProvider;
