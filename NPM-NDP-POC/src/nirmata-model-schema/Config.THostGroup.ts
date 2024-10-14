/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import THost from './Config.THost';
import TVSphereConfig from './Config.TVSphereConfig';
import TOpenStackConfig from './Config.TOpenStackConfig';
import TVCloudConfig from './Config.TVCloudConfig';
import TAzureConfig from './Config.TAzureConfig';
import TCiscoIcfConfig from './Config.TCiscoIcfConfig';
import TCiscoUcsdConfig from './Config.TCiscoUcsdConfig';
import TDigitalOceanConfig from './Config.TDigitalOceanConfig';
import TProfitBricksConfig from './Config.TProfitBricksConfig';
import TAwsConfig from './Config.TAwsConfig';
import TGoogleComputeConfig from './Config.TGoogleComputeConfig';
import TSoftLayerConfig from './Config.TSoftLayerConfig';
import TOcsConfig from './Config.TOcsConfig';
import THostGroupStats from './Config.THostGroupStats';
import THostGroupAction from './Config.THostGroupAction';

export type TField =
  | 'action'
  | 'actions'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'awsConfig'
  | 'azureConfig'
  | 'ciscoIcfConfig'
  | 'ciscoUcsdConfig'
  | 'cluster'
  | 'createdBy'
  | 'createdOn'
  | 'desiredCount'
  | 'digitalOceanConfig'
  | 'googleComputeConfig'
  | 'hostGroupStats'
  | 'hosts'
  | 'id'
  | 'isAutoscalable'
  | 'isClusterManaged'
  | 'labels'
  | 'maxHosts'
  | 'minHosts'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'ocsConfig'
  | 'openStackConfig'
  | 'orchestrator'
  | 'parent'
  | 'parent'
  | 'profitBricksConfig'
  | 'resourceSelectionRules'
  | 'service'
  | 'serviceState'
  | 'softLayerConfig'
  | 'state'
  | 'status'
  | 'uri'
  | 'vCloudConfig'
  | 'vSphereConfig';

export type THostGroup_Action = 'none' | 'delete';

export type THostGroup_Orchestrator = 'nirmata' | 'kubernetes';

export type THostGroup_ServiceState = 'enabled' | 'disabled' | 'preparing' | 'pollingDisabled';

export type THostGroup_State =
  | 'connected'
  | 'notConnected'
  | 'unknown'
  | 'shuttingDown'
  | 'deleted'
  | 'failed'
  | 'pendingCreate'
  | 'pending';

type THostGroup = Omit<TModelBase, 'service' | 'modelIndex'> & {
  action?: TMayBe<THostGroup_Action>;
  actions?: TMayBe<TMayBe<THostGroupAction>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  awsConfig?: TMayBe<TMayBe<TAwsConfig>[]>;
  azureConfig?: TMayBe<TMayBe<TAzureConfig>[]>;
  ciscoIcfConfig?: TMayBe<TMayBe<TCiscoIcfConfig>[]>;
  ciscoUcsdConfig?: TMayBe<TMayBe<TCiscoUcsdConfig>[]>;
  cluster?: TMayBe<TModelBase>;
  desiredCount?: TMayBe<number>;
  digitalOceanConfig?: TMayBe<TMayBe<TDigitalOceanConfig>[]>;
  googleComputeConfig?: TMayBe<TMayBe<TGoogleComputeConfig>[]>;
  hostGroupStats?: TMayBe<TMayBe<THostGroupStats>[]>;
  hosts?: TMayBe<TMayBe<THost>[]>;
  isAutoscalable?: TMayBe<boolean>;
  isClusterManaged?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  maxHosts?: TMayBe<number>;
  minHosts?: TMayBe<number>;
  modelIndex?: 'HostGroup';
  name?: TMayBe<string>;
  ocsConfig?: TMayBe<TMayBe<TOcsConfig>[]>;
  openStackConfig?: TMayBe<TMayBe<TOpenStackConfig>[]>;
  orchestrator?: TMayBe<THostGroup_Orchestrator>;
  parent?: TMayBe<TModelBase>;
  profitBricksConfig?: TMayBe<TMayBe<TProfitBricksConfig>[]>;
  service?: 'config';
  serviceState?: TMayBe<THostGroup_ServiceState>;
  softLayerConfig?: TMayBe<TMayBe<TSoftLayerConfig>[]>;
  state?: TMayBe<THostGroup_State>;
  status?: TMayBe<TMayBe<string>[]>;
  vCloudConfig?: TMayBe<TMayBe<TVCloudConfig>[]>;
  vSphereConfig?: TMayBe<TMayBe<TVSphereConfig>[]>;
};

export default THostGroup;
