/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TContainer from './Config.TContainer';
import THostAction from './Config.THostAction';
import THostStats from './Config.THostStats';
import TVolume from './Config.TVolume';

export type TField =
  | 'actions'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterState'
  | 'containers'
  | 'createdBy'
  | 'createdOn'
  | 'dockerVersion'
  | 'hostAgentBuildId'
  | 'hostAgentBuildTime'
  | 'hostAgentProtocolVersion'
  | 'hostAgentVersion'
  | 'hostId'
  | 'hostStats'
  | 'id'
  | 'imageId'
  | 'info'
  | 'instanceType'
  | 'ipAddresses'
  | 'labels'
  | 'lastSeen'
  | 'lastStateChange'
  | 'launchTime'
  | 'macAddress'
  | 'memory'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'networks'
  | 'nodeRef'
  | 'parent'
  | 'parent'
  | 'privateDnsName'
  | 'privateIpAddress'
  | 'publicDnsName'
  | 'publicIpAddress'
  | 'service'
  | 'serviceState'
  | 'state'
  | 'status'
  | 'tags'
  | 'uri'
  | 'volumes';

export type THost_ClusterState = 'ready' | 'notReady';

export type THost_ServiceState = 'enabled' | 'disabled' | 'preparing' | 'pollingDisabled';

export type THost_State =
  | 'connected'
  | 'notConnected'
  | 'failed'
  | 'unknown'
  | 'shuttingDown'
  | 'pendingCreate'
  | 'pendingConnect'
  | 'deleted'
  | 'terminating'
  | 'degraded';

type THost = Omit<TModelBase, 'service' | 'modelIndex'> & {
  actions?: TMayBe<TMayBe<THostAction>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterState?: TMayBe<THost_ClusterState>;
  containers?: TMayBe<TMayBe<TContainer>[]>;
  dockerVersion?: TMayBe<string>;
  hostAgentBuildId?: TMayBe<string>;
  hostAgentBuildTime?: TMayBe<string>;
  hostAgentProtocolVersion?: TMayBe<string>;
  hostAgentVersion?: TMayBe<string>;
  hostId?: TMayBe<string>;
  hostStats?: TMayBe<TMayBe<THostStats>[]>;
  imageId?: TMayBe<string>;
  info?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  instanceType?: TMayBe<string>;
  ipAddresses?: TMayBe<TMayBe<string>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSeen?: TMayBe<number>;
  lastStateChange?: TMayBe<number>;
  launchTime?: TMayBe<number>;
  macAddress?: TMayBe<string>;
  memory?: TMayBe<number>;
  modelIndex?: 'Host';
  name?: TMayBe<string>;
  nodeRef?: TMayBe<TModelBase>;
  parent?: TMayBe<TModelBase>;
  privateDnsName?: TMayBe<string>;
  privateIpAddress?: TMayBe<string>;
  publicDnsName?: TMayBe<string>;
  publicIpAddress?: TMayBe<string>;
  service?: 'config';
  serviceState?: TMayBe<THost_ServiceState>;
  state?: TMayBe<THost_State>;
  status?: TMayBe<TMayBe<string>[]>;
  tags?: TMayBe<string>;
  volumes?: TMayBe<TMayBe<TVolume>[]>;
};

export default THost;
