/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'addons'
  | 'alarms'
  | 'ancestors'
  | 'channel'
  | 'clusterIpv4Cidr'
  | 'createdBy'
  | 'createdOn'
  | 'defaultNodeLocations'
  | 'duration'
  | 'enableMaintenancePolicy'
  | 'enableNetworkPolicy'
  | 'enableSecretsEncryption'
  | 'enableVerticalPodAutoscaling'
  | 'enableWorkloadIdentity'
  | 'endTime'
  | 'exclusionTimeWindow'
  | 'id'
  | 'labels'
  | 'locationType'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'network'
  | 'parent'
  | 'parent'
  | 'project'
  | 'recurrence'
  | 'region'
  | 'secretsEncryptionKey'
  | 'service'
  | 'servicesIpv4Cidr'
  | 'startTime'
  | 'subnetwork'
  | 'uri'
  | 'workloadPool'
  | 'zone';

export type TGkeClusterConfig_Channel = 'RAPID' | 'REGULAR' | 'STABLE';

export type TGkeClusterConfig_LocationType = 'Zonal' | 'Regional';

type TGkeClusterConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  addons?: TMayBe<TMayBe<string>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  channel?: TMayBe<TGkeClusterConfig_Channel>;
  clusterIpv4Cidr?: TMayBe<string>;
  defaultNodeLocations?: TMayBe<TMayBe<string>[]>;
  duration?: TMayBe<string>;
  enableMaintenancePolicy?: TMayBe<boolean>;
  enableNetworkPolicy?: TMayBe<boolean>;
  enableSecretsEncryption?: TMayBe<boolean>;
  enableVerticalPodAutoscaling?: TMayBe<boolean>;
  enableWorkloadIdentity?: TMayBe<boolean>;
  endTime?: TMayBe<string>;
  exclusionTimeWindow?: TMayBe<Record<string, TMayBe<string>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  locationType?: TMayBe<TGkeClusterConfig_LocationType>;
  modelIndex?: 'GkeClusterConfig';
  network?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  project?: TMayBe<string>;
  recurrence?: TMayBe<string>;
  region?: TMayBe<string>;
  secretsEncryptionKey?: TMayBe<string>;
  service?: 'cluster';
  servicesIpv4Cidr?: TMayBe<string>;
  startTime?: TMayBe<string>;
  subnetwork?: TMayBe<string>;
  workloadPool?: TMayBe<string>;
  zone?: TMayBe<string>;
};

export default TGkeClusterConfig;
