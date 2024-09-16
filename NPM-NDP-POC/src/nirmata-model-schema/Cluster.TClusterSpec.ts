/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TAuthorizationSpec from './Cluster.TAuthorizationSpec';
import TComponentSpec from './Cluster.TComponentSpec';
import TNetworkSpec from './Cluster.TNetworkSpec';
import TNetworkPolicySpec from './Cluster.TNetworkPolicySpec';
import TAddOns from './Cluster.TAddOns';
import TStorageClassSpec from './Cluster.TStorageClassSpec';
import TIngressControllerSpec from './Cluster.TIngressControllerSpec';
import TStorageSpec from './Cluster.TStorageSpec';
import TControllerSpec from './Cluster.TControllerSpec';
import TProxySettingsSpec from './Cluster.TProxySettingsSpec';
import TSecuritySpec from './Cluster.TSecuritySpec';
import TAuditLogSpec from './Cluster.TAuditLogSpec';
import TCloudConfigSpec from './Cluster.TCloudConfigSpec';
import TDnsSpec from './Cluster.TDnsSpec';
import TVaultKubernetesAuthSpec from './Cluster.TVaultKubernetesAuthSpec';
import TIAMSpec from './Cluster.TIAMSpec';

export type TField =
  | 'additionalProperties'
  | 'addons'
  | 'alarms'
  | 'ancestors'
  | 'auditLog'
  | 'auditLogPath'
  | 'authorization'
  | 'autoSyncNamespaces'
  | 'cloud'
  | 'cloudConfigSpec'
  | 'clusterMode'
  | 'components'
  | 'controller'
  | 'createdBy'
  | 'createdOn'
  | 'disableSchedulingOnMasters'
  | 'dns'
  | 'enableEncryption'
  | 'enableLogging'
  | 'iam'
  | 'id'
  | 'ingressController'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'network'
  | 'networkPolicy'
  | 'parent'
  | 'parent'
  | 'postCreateYaml'
  | 'proxySettings'
  | 'security'
  | 'service'
  | 'storage'
  | 'storageClasses'
  | 'systemMetadata'
  | 'uri'
  | 'vault'
  | 'version';

export type TClusterSpec_ClusterMode = 'managed' | 'discovered' | 'providerManaged';

type TClusterSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  addons?: TMayBe<TMayBe<TAddOns>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  auditLog?: TMayBe<TMayBe<TAuditLogSpec>[]>;
  auditLogPath?: TMayBe<string>;
  authorization?: TMayBe<TMayBe<TAuthorizationSpec>[]>;
  autoSyncNamespaces?: TMayBe<boolean>;
  cloud?: TMayBe<string>;
  cloudConfigSpec?: TMayBe<TMayBe<TCloudConfigSpec>[]>;
  clusterMode?: TMayBe<TClusterSpec_ClusterMode>;
  components?: TMayBe<TMayBe<TComponentSpec>[]>;
  controller?: TMayBe<TMayBe<TControllerSpec>[]>;
  disableSchedulingOnMasters?: TMayBe<boolean>;
  dns?: TMayBe<TMayBe<TDnsSpec>[]>;
  enableEncryption?: TMayBe<boolean>;
  enableLogging?: TMayBe<boolean>;
  iam?: TMayBe<TMayBe<TIAMSpec>[]>;
  ingressController?: TMayBe<TMayBe<TIngressControllerSpec>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ClusterSpec';
  network?: TMayBe<TMayBe<TNetworkSpec>[]>;
  networkPolicy?: TMayBe<TMayBe<TNetworkPolicySpec>[]>;
  parent?: TMayBe<TModelBase>;
  postCreateYaml?: TMayBe<string>;
  proxySettings?: TMayBe<TMayBe<TProxySettingsSpec>[]>;
  security?: TMayBe<TMayBe<TSecuritySpec>[]>;
  service?: 'cluster';
  storage?: TMayBe<TMayBe<TStorageSpec>[]>;
  storageClasses?: TMayBe<TMayBe<TStorageClassSpec>[]>;
  systemMetadata?: TMayBe<Record<string, TMayBe<string>>>;
  vault?: TMayBe<TMayBe<TVaultKubernetesAuthSpec>[]>;
  version?: TMayBe<string>;
};

export default TClusterSpec;
