/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TResourcePolicy from './Cluster.TResourcePolicy';
import TClusterSettings from './Cluster.TClusterSettings';
import TKubernetesCluster from './Cluster.TKubernetesCluster';
import TCloudCredentials from './Cluster.TCloudCredentials';
import TClusterType from './Cluster.TClusterType';
import TNodePoolType from './Cluster.TNodePoolType';
import TVaultCredentials from './Cluster.TVaultCredentials';
import TImportClustersAction from './Cluster.TImportClustersAction';
import TPolicyReport from './Cluster.TPolicyReport';
import TPolicyGroup from './Cluster.TPolicyGroup';
import TPolicyGroupAction from './Cluster.TPolicyGroupAction';
import TComplianceStandard from './Cluster.TComplianceStandard';
import TReportSchedule from './Cluster.TReportSchedule';
import TVenafiPKCS11Integration from './Cluster.TVenafiPKCS11Integration';
import TKyvernoConfig from './Cluster.TKyvernoConfig';
import TClusterRegistrationRequest from './Cluster.TClusterRegistrationRequest';
import TAlarmType from './Cluster.TAlarmType';
import TAlarmNotifier from './Cluster.TAlarmNotifier';

export type TField =
  | 'additionalProperties'
  | 'aggregatePolicyReport'
  | 'alarmNotifiers'
  | 'alarmTypes'
  | 'alarms'
  | 'ancestors'
  | 'cloudCredentials'
  | 'clusterRegistrationRequests'
  | 'clusterSettings'
  | 'clusterTypes'
  | 'clusters'
  | 'complianceStandards'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'importClustersAction'
  | 'kyvernoConfigs'
  | 'labels'
  | 'modelId'
  | 'modelIndex'
  | 'modelName'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'nodePoolTypes'
  | 'parent'
  | 'parent'
  | 'policyGroupAction'
  | 'policyGroups'
  | 'reportSchedule'
  | 'resourcePolicies'
  | 'service'
  | 'uri'
  | 'vaultCredentials'
  | 'venafiPKCS11Integration';

type TRoot = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  aggregatePolicyReport?: TMayBe<TMayBe<TPolicyReport>[]>;
  alarmNotifiers?: TMayBe<TMayBe<TAlarmNotifier>[]>;
  alarmTypes?: TMayBe<TMayBe<TAlarmType>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cloudCredentials?: TMayBe<TMayBe<TCloudCredentials>[]>;
  clusterRegistrationRequests?: TMayBe<TMayBe<TClusterRegistrationRequest>[]>;
  clusterSettings?: TMayBe<TMayBe<TClusterSettings>[]>;
  clusterTypes?: TMayBe<TMayBe<TClusterType>[]>;
  clusters?: TMayBe<TMayBe<TKubernetesCluster>[]>;
  complianceStandards?: TMayBe<TMayBe<TComplianceStandard>[]>;
  importClustersAction?: TMayBe<TMayBe<TImportClustersAction>[]>;
  kyvernoConfigs?: TMayBe<TMayBe<TKyvernoConfig>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelId?: TMayBe<string>;
  modelIndex?: 'Root';
  modelName?: TMayBe<string>;
  nodePoolTypes?: TMayBe<TMayBe<TNodePoolType>[]>;
  parent?: TMayBe<TModelBase>;
  policyGroupAction?: TMayBe<TMayBe<TPolicyGroupAction>[]>;
  policyGroups?: TMayBe<TMayBe<TPolicyGroup>[]>;
  reportSchedule?: TMayBe<TMayBe<TReportSchedule>[]>;
  resourcePolicies?: TMayBe<TMayBe<TResourcePolicy>[]>;
  service?: 'cluster';
  vaultCredentials?: TMayBe<TMayBe<TVaultCredentials>[]>;
  venafiPKCS11Integration?: TMayBe<TMayBe<TVenafiPKCS11Integration>[]>;
};

export default TRoot;
