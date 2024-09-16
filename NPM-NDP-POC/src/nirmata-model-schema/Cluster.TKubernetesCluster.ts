/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TClusterStats from './Cluster.TClusterStats';
import TPendingPod from './Cluster.TPendingPod';
import TClusterAction from './Cluster.TClusterAction';
import TIngressController from './Cluster.TIngressController';
import TVaultSettings from './Cluster.TVaultSettings';
import TResourceCounts from './Cluster.TResourceCounts';
import TVeleroConfig from './Cluster.TVeleroConfig';
import TNodePool from './Cluster.TNodePool';
import TClusterConfig from './Cluster.TClusterConfig';
import TClusterResources from './Cluster.TClusterResources';
import TClusterAddOns from './Cluster.TClusterAddOns';
import TClusterSystemTasks from './Cluster.TClusterSystemTasks';
import TAccessControlList from './Cluster.TAccessControlList';
import TPolicyReport from './Cluster.TPolicyReport';
import TAggregatePolicyReport from './Cluster.TAggregatePolicyReport';
import TConfigurationPhase from './Cluster.TConfigurationPhase';
import TPolicyReportSchedule from './Cluster.TPolicyReportSchedule';
import TReportSchedule from './Cluster.TReportSchedule';
import TClusterMetrics from './Cluster.TClusterMetrics';
import TClusterComplianceReport from './Cluster.TClusterComplianceReport';
import TPolicyHealthDetails from './Cluster.TPolicyHealthDetails';
import TClusterEvents from './Cluster.TClusterEvents';

export type TField =
  | 'accessControlList'
  | 'action'
  | 'addOns'
  | 'additionalProperties'
  | 'adminState'
  | 'aggregatePolicyReport'
  | 'alarms'
  | 'ancestors'
  | 'availableEnterpriseKyvernoVersions'
  | 'availableKubeControllerVersion'
  | 'clusterAction'
  | 'clusterEnvironment'
  | 'clusterEvents'
  | 'clusterMetrics'
  | 'clusterRegistrationParams'
  | 'clusterResourcesPolicyReports'
  | 'clusterStats'
  | 'complianceReports'
  | 'config'
  | 'configurationPhases'
  | 'configurationState'
  | 'connectionState'
  | 'createdBy'
  | 'createdOn'
  | 'credentialsSelector'
  | 'description'
  | 'environments'
  | 'executionState'
  | 'hostGroups'
  | 'id'
  | 'ingressControllers'
  | 'initialKyvernoMonitorTaskExecutionTime'
  | 'isInitialized'
  | 'isKyvernoAutoInstall'
  | 'isKyvernoExist'
  | 'isMetricsAgentInstall'
  | 'isOperatorInstall'
  | 'kubeSystemUid'
  | 'kyvernoConfigSelector'
  | 'labels'
  | 'lastFailureTime'
  | 'lastSyncTime'
  | 'masterHostSelector'
  | 'mode'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'nodePools'
  | 'notConnectedSince'
  | 'parent'
  | 'parent'
  | 'pendingPods'
  | 'policyHealthDetails'
  | 'policyReportSchedule'
  | 'policyTamperMigrationRequired'
  | 'progressState'
  | 'reportSchedule'
  | 'resourceCounts'
  | 'resources'
  | 'service'
  | 'state'
  | 'status'
  | 'systemTasks'
  | 'typeSelector'
  | 'uri'
  | 'vaultSettings'
  | 'veleroConfig';

export type TKubernetesCluster_AdminState = 'enabled' | 'disabled';

export type TKubernetesCluster_ClusterAction =
  | 'delete'
  | 'remove'
  | 'discover'
  | 'sync'
  | 'backup'
  | 'restore'
  | 'setup'
  | 'install'
  | 'none';

export type TKubernetesCluster_ConfigurationState = 'pending' | 'inProgress' | 'completed' | 'failed';

export type TKubernetesCluster_ConnectionState = 'connected' | 'notConnected' | 'unknown';

export type TKubernetesCluster_ExecutionState =
  | 'none'
  | 'pendingCreate'
  | 'pendingClusterDeploy'
  | 'pendingControllerDeploy'
  | 'pendingControllerConnect'
  | 'pendingAgentDeploy'
  | 'pendingClusterDiscovery'
  | 'pendingClusterUpgrade'
  | 'pendingClusterScaleUp'
  | 'pendingClusterScaleDown'
  | 'pendingClusterValidation'
  | 'pendingClusterConfiguration'
  | 'pendingDelete'
  | 'ClusterUpdateInProgress';

export type TKubernetesCluster_Mode = 'managed' | 'discovered' | 'providerManaged';

export type TKubernetesCluster_ProgressState = 'polling' | 'startInstallation' | 'installing' | 'completed';

export type TKubernetesCluster_State =
  | 'ready'
  | 'notReady'
  | 'degraded'
  | 'deployed'
  | 'failed'
  | 'pendingCreate'
  | 'created'
  | 'configuring'
  | 'shuttingDown'
  | 'deleted'
  | 'unknown'
  | 'removing'
  | 'removed';

type TKubernetesCluster = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  action?: TMayBe<TMayBe<TClusterAction>[]>;
  addOns?: TMayBe<TMayBe<TClusterAddOns>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  adminState?: TMayBe<TKubernetesCluster_AdminState>;
  aggregatePolicyReport?: TMayBe<TMayBe<TAggregatePolicyReport>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  availableEnterpriseKyvernoVersions?: TMayBe<TMayBe<string>[]>;
  availableKubeControllerVersion?: TMayBe<string>;
  clusterAction?: TMayBe<TKubernetesCluster_ClusterAction>;
  clusterEnvironment?: TMayBe<TModelBase>;
  clusterEvents?: TMayBe<TMayBe<TClusterEvents>[]>;
  clusterMetrics?: TMayBe<TMayBe<TClusterMetrics>[]>;
  clusterRegistrationParams?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  clusterResourcesPolicyReports?: TMayBe<TMayBe<TPolicyReport>[]>;
  clusterStats?: TMayBe<TMayBe<TClusterStats>[]>;
  complianceReports?: TMayBe<TMayBe<TClusterComplianceReport>[]>;
  config?: TMayBe<TMayBe<TClusterConfig>[]>;
  configurationPhases?: TMayBe<TMayBe<TConfigurationPhase>[]>;
  configurationState?: TMayBe<TKubernetesCluster_ConfigurationState>;
  connectionState?: TMayBe<TKubernetesCluster_ConnectionState>;
  credentialsSelector?: TMayBe<string>;
  description?: TMayBe<string>;
  environments?: TMayBe<TMayBe<TModelBase>[]>;
  executionState?: TMayBe<TKubernetesCluster_ExecutionState>;
  hostGroups?: TMayBe<TMayBe<TModelBase>[]>;
  ingressControllers?: TMayBe<TMayBe<TIngressController>[]>;
  initialKyvernoMonitorTaskExecutionTime?: TMayBe<number>;
  isInitialized?: TMayBe<boolean>;
  isKyvernoAutoInstall?: TMayBe<boolean>;
  isKyvernoExist?: TMayBe<boolean>;
  isMetricsAgentInstall?: TMayBe<boolean>;
  isOperatorInstall?: TMayBe<boolean>;
  kubeSystemUid?: TMayBe<string>;
  kyvernoConfigSelector?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastFailureTime?: TMayBe<number>;
  lastSyncTime?: TMayBe<number>;
  masterHostSelector?: TMayBe<TMayBe<string>[]>;
  mode?: TMayBe<TKubernetesCluster_Mode>;
  modelIndex?: 'KubernetesCluster';
  name?: TMayBe<string>;
  nodePools?: TMayBe<TMayBe<TNodePool>[]>;
  notConnectedSince?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  pendingPods?: TMayBe<TMayBe<TPendingPod>[]>;
  policyHealthDetails?: TMayBe<TMayBe<TPolicyHealthDetails>[]>;
  policyReportSchedule?: TMayBe<TMayBe<TPolicyReportSchedule>[]>;
  policyTamperMigrationRequired?: TMayBe<boolean>;
  progressState?: TMayBe<TKubernetesCluster_ProgressState>;
  reportSchedule?: TMayBe<TMayBe<TReportSchedule>[]>;
  resourceCounts?: TMayBe<TMayBe<TResourceCounts>[]>;
  resources?: TMayBe<TMayBe<TClusterResources>[]>;
  service?: 'cluster';
  state?: TMayBe<TKubernetesCluster_State>;
  status?: TMayBe<TMayBe<string>[]>;
  systemTasks?: TMayBe<TMayBe<TClusterSystemTasks>[]>;
  typeSelector?: TMayBe<string>;
  vaultSettings?: TMayBe<TMayBe<TVaultSettings>[]>;
  veleroConfig?: TMayBe<TMayBe<TVeleroConfig>[]>;
};

export default TKubernetesCluster;
