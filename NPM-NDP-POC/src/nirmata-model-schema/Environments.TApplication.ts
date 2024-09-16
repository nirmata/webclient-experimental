/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TSystemTask from './Environments.TSystemTask';
import TEventLog from './Environments.TEventLog';
import TApplicationStats from './Environments.TApplicationStats';
import TGitUpstream from './Environments.TGitUpstream';
import TReleaseStatus from './Environments.TReleaseStatus';
import THelmData from './Environments.THelmData';

export type TField =
  | 'additionalProperties'
  | 'adminState'
  | 'alarms'
  | 'ancestors'
  | 'catalog'
  | 'changeLog'
  | 'clusterRoleBindings'
  | 'clusterRoles'
  | 'configMaps'
  | 'createdBy'
  | 'createdOn'
  | 'cronJobs'
  | 'customResourceDefinitions'
  | 'daemonSets'
  | 'deleteFromCluster'
  | 'dependencyIds'
  | 'deployments'
  | 'endpoints'
  | 'eventLog'
  | 'executionState'
  | 'genericResources'
  | 'gitUpstream'
  | 'helmApp'
  | 'helmData'
  | 'horizontalPodAutoscalers'
  | 'id'
  | 'ingressClasses'
  | 'ingresses'
  | 'jobs'
  | 'labels'
  | 'lastFailure'
  | 'limitRanges'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespace'
  | 'namespaceName'
  | 'networkPolicies'
  | 'parent'
  | 'parent'
  | 'persistentVolumeClaims'
  | 'persistentVolumes'
  | 'podDisruptionBudgets'
  | 'pods'
  | 'releaseChannel'
  | 'releaseStatus'
  | 'resourceQuotas'
  | 'roleBindings'
  | 'roles'
  | 'run'
  | 'secrets'
  | 'service'
  | 'serviceAccounts'
  | 'services'
  | 'state'
  | 'statefulSets'
  | 'stats'
  | 'systemTasks'
  | 'upstreamType'
  | 'uri'
  | 'version'
  | 'yaml';

export type TApplication_AdminState = 'enabled' | 'disabled';

export type TApplication_ExecutionState =
  | 'pendingCreate'
  | 'pendingDelete'
  | 'pendingResources'
  | 'pendingExecution'
  | 'none';

export type TApplication_State =
  | 'created'
  | 'running'
  | 'failed'
  | 'unknown'
  | 'stopped'
  | 'degraded'
  | 'executing'
  | 'deleted';

export type TApplication_UpstreamType = 'git' | 'catalog';

type TApplication = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  adminState?: TMayBe<TApplication_AdminState>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  catalog?: TMayBe<string>;
  deleteFromCluster?: TMayBe<boolean>;
  dependencyIds?: TMayBe<TMayBe<TModelBase>[]>;
  eventLog?: TMayBe<TMayBe<TEventLog>[]>;
  executionState?: TMayBe<TApplication_ExecutionState>;
  gitUpstream?: TMayBe<TMayBe<TGitUpstream>[]>;
  helmApp?: TMayBe<boolean>;
  helmData?: TMayBe<TMayBe<THelmData>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastFailure?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  modelIndex?: 'Application';
  name?: TMayBe<string>;
  namespaceName?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  releaseChannel?: TMayBe<string>;
  releaseStatus?: TMayBe<TMayBe<TReleaseStatus>[]>;
  run?: TMayBe<string>;
  service?: 'environments';
  state?: TMayBe<TApplication_State>;
  stats?: TMayBe<TMayBe<TApplicationStats>[]>;
  systemTasks?: TMayBe<TMayBe<TSystemTask>[]>;
  upstreamType?: TMayBe<TApplication_UpstreamType>;
  version?: TMayBe<string>;
  yaml?: TMayBe<string>;
};

export default TApplication;
