/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TDeployment from './Catalog.TDeployment';
import TConfigMap from './Catalog.TConfigMap';
import TSecret from './Catalog.TSecret';
import TNetworkPolicy from './Catalog.TNetworkPolicy';
import TStatefulSet from './Catalog.TStatefulSet';
import TService from './Catalog.TService';
import TIngress from './Catalog.TIngress';
import TPersistentVolumeClaim from './Catalog.TPersistentVolumeClaim';
import TGenericResource from './Catalog.TGenericResource';
import TDaemonSet from './Catalog.TDaemonSet';
import TJob from './Catalog.TJob';
import TCronJob from './Catalog.TCronJob';
import THorizontalPodAutoscaler from './Catalog.THorizontalPodAutoscaler';
import TPodDisruptionBudget from './Catalog.TPodDisruptionBudget';
import TServiceAccount from './Catalog.TServiceAccount';
import TEndpoints from './Catalog.TEndpoints';
import TClusterRoleBinding from './Catalog.TClusterRoleBinding';
import TClusterRole from './Catalog.TClusterRole';
import TCustomResourceDefinition from './Catalog.TCustomResourceDefinition';
import TRole from './Catalog.TRole';
import TRoleBinding from './Catalog.TRoleBinding';
import TResourceQuota from './Catalog.TResourceQuota';
import TLimitRange from './Catalog.TLimitRange';
import TGitUpstream from './Catalog.TGitUpstream';
import TChannel from './Catalog.TChannel';
import TVersion from './Catalog.TVersion';
import TKustomizeConfig from './Catalog.TKustomizeConfig';
import THelmConfig from './Catalog.THelmConfig';
import TApplicationVersion from './Catalog.TApplicationVersion';
import TRelease from './Catalog.TRelease';
import TPatchConfig from './Catalog.TPatchConfig';
import TIngressClass from './Catalog.TIngressClass';
import TDependency from './Catalog.TDependency';
import TRolloutPlan from './Catalog.TRolloutPlan';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'applicationType'
  | 'applicationVersions'
  | 'changesAvailable'
  | 'channels'
  | 'clusterRoleBindings'
  | 'clusterRoles'
  | 'configMaps'
  | 'createdBy'
  | 'createdOn'
  | 'cronjobs'
  | 'customResourceDefinitions'
  | 'daemonSets'
  | 'dependencies'
  | 'deployments'
  | 'endpoints'
  | 'genericResources'
  | 'gitUpstream'
  | 'helmConfig'
  | 'horizontalPodAutoscalers'
  | 'id'
  | 'ingressClasses'
  | 'ingresses'
  | 'jobs'
  | 'kustomizeConfig'
  | 'labels'
  | 'limitRanges'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespace'
  | 'networkPolicies'
  | 'ownerId'
  | 'parent'
  | 'parent'
  | 'patchConfig'
  | 'persistentVolumeClaims'
  | 'podDisruptionBudgets'
  | 'releases'
  | 'resourceQuotas'
  | 'roleBindings'
  | 'roles'
  | 'rolloutPlans'
  | 'secrets'
  | 'service'
  | 'serviceAccounts'
  | 'services'
  | 'statefulSets'
  | 'tobemigrated'
  | 'updateRequired'
  | 'upstreamType'
  | 'uri'
  | 'versions';

export type TApplication_ApplicationType = 'Helm' | 'Kustomize' | 'Standard';

export type TApplication_UpstreamType = 'git' | 'catalog' | 'helm';

type TApplication = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  applicationType?: TMayBe<TApplication_ApplicationType>;
  applicationVersions?: TMayBe<TMayBe<TApplicationVersion>[]>;
  changesAvailable?: TMayBe<boolean>;
  channels?: TMayBe<TMayBe<TChannel>[]>;
  clusterRoleBindings?: TMayBe<TMayBe<TClusterRoleBinding>[]>;
  clusterRoles?: TMayBe<TMayBe<TClusterRole>[]>;
  configMaps?: TMayBe<TMayBe<TConfigMap>[]>;
  cronjobs?: TMayBe<TMayBe<TCronJob>[]>;
  customResourceDefinitions?: TMayBe<TMayBe<TCustomResourceDefinition>[]>;
  daemonSets?: TMayBe<TMayBe<TDaemonSet>[]>;
  dependencies?: TMayBe<TMayBe<TDependency>[]>;
  deployments?: TMayBe<TMayBe<TDeployment>[]>;
  endpoints?: TMayBe<TMayBe<TEndpoints>[]>;
  genericResources?: TMayBe<TMayBe<TGenericResource>[]>;
  gitUpstream?: TMayBe<TMayBe<TGitUpstream>[]>;
  helmConfig?: TMayBe<TMayBe<THelmConfig>[]>;
  horizontalPodAutoscalers?: TMayBe<TMayBe<THorizontalPodAutoscaler>[]>;
  ingressClasses?: TMayBe<TMayBe<TIngressClass>[]>;
  ingresses?: TMayBe<TMayBe<TIngress>[]>;
  jobs?: TMayBe<TMayBe<TJob>[]>;
  kustomizeConfig?: TMayBe<TMayBe<TKustomizeConfig>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  limitRanges?: TMayBe<TMayBe<TLimitRange>[]>;
  modelIndex?: 'Application';
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  networkPolicies?: TMayBe<TMayBe<TNetworkPolicy>[]>;
  ownerId?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  patchConfig?: TMayBe<TMayBe<TPatchConfig>[]>;
  persistentVolumeClaims?: TMayBe<TMayBe<TPersistentVolumeClaim>[]>;
  podDisruptionBudgets?: TMayBe<TMayBe<TPodDisruptionBudget>[]>;
  releases?: TMayBe<TMayBe<TRelease>[]>;
  resourceQuotas?: TMayBe<TMayBe<TResourceQuota>[]>;
  roleBindings?: TMayBe<TMayBe<TRoleBinding>[]>;
  roles?: TMayBe<TMayBe<TRole>[]>;
  rolloutPlans?: TMayBe<TMayBe<TRolloutPlan>[]>;
  secrets?: TMayBe<TMayBe<TSecret>[]>;
  service?: 'catalog';
  serviceAccounts?: TMayBe<TMayBe<TServiceAccount>[]>;
  services?: TMayBe<TMayBe<TService>[]>;
  statefulSets?: TMayBe<TMayBe<TStatefulSet>[]>;
  tobemigrated?: TMayBe<boolean>;
  updateRequired?: TMayBe<boolean>;
  upstreamType?: TMayBe<TApplication_UpstreamType>;
  versions?: TMayBe<TMayBe<TVersion>[]>;
};

export default TApplication;
