/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'dnsServiceIp'
  | 'dockerBridgeCidr'
  | 'enablePrivateCluster'
  | 'httpsApplicationRouting'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'monitoring'
  | 'networkPlugin'
  | 'networkPolicy'
  | 'networkProfile'
  | 'outboundType'
  | 'parameters'
  | 'parent'
  | 'parent'
  | 'podCidr'
  | 'region'
  | 'resourceGroup'
  | 'service'
  | 'serviceCidr'
  | 'template'
  | 'uri'
  | 'workspaceId';

export type TAksClusterConfig_NetworkProfile = 'basic' | 'advanced';

export type TAksClusterConfig_OutboundType = 'loadBalancer' | 'userDefinedRouting';

type TAksClusterConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  dnsServiceIp?: TMayBe<string>;
  dockerBridgeCidr?: TMayBe<string>;
  enablePrivateCluster?: TMayBe<boolean>;
  httpsApplicationRouting?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AksClusterConfig';
  monitoring?: TMayBe<boolean>;
  networkPlugin?: TMayBe<string>;
  networkPolicy?: TMayBe<string>;
  networkProfile?: TMayBe<TAksClusterConfig_NetworkProfile>;
  outboundType?: TMayBe<TAksClusterConfig_OutboundType>;
  parameters?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  podCidr?: TMayBe<string>;
  region?: TMayBe<string>;
  resourceGroup?: TMayBe<string>;
  service?: 'cluster';
  serviceCidr?: TMayBe<string>;
  template?: TMayBe<string>;
  workspaceId?: TMayBe<string>;
};

export default TAksClusterConfig;
