/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TNamespaceSpec from './Environments.TNamespaceSpec';
import TNamespaceStatus from './Environments.TNamespaceStatus';
import TObjectMeta from './Environments.TObjectMeta';
import TRole from './Environments.TRole';
import TRoleBinding from './Environments.TRoleBinding';
import TServiceAccount from './Environments.TServiceAccount';
import TDeployment from './Environments.TDeployment';
import TConfigMap from './Environments.TConfigMap';
import TSecret from './Environments.TSecret';
import TNetworkPolicy from './Environments.TNetworkPolicy';
import TStatefulSet from './Environments.TStatefulSet';
import TService from './Environments.TService';
import TIngress from './Environments.TIngress';
import TPersistentVolumeClaim from './Environments.TPersistentVolumeClaim';
import TDaemonSet from './Environments.TDaemonSet';
import TJob from './Environments.TJob';
import THorizontalPodAutoscaler from './Environments.THorizontalPodAutoscaler';
import TPodDisruptionBudget from './Environments.TPodDisruptionBudget';
import TEndpoints from './Environments.TEndpoints';
import TLimitRange from './Environments.TLimitRange';
import TResourceQuota from './Environments.TResourceQuota';
import TGenericResource from './Environments.TGenericResource';
import TPod from './Environments.TPod';
import TEventLog from './Environments.TEventLog';
import TCronJob from './Environments.TCronJob';

export type TField =
  | 'accessControlList'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'applications'
  | 'configMaps'
  | 'createdBy'
  | 'createdOn'
  | 'cronjobs'
  | 'daemonSets'
  | 'deployments'
  | 'endpoints'
  | 'environment'
  | 'eventLog'
  | 'genericResources'
  | 'horizontalPodAutoscalers'
  | 'id'
  | 'ingresses'
  | 'jobs'
  | 'kind'
  | 'labels'
  | 'lastSyncTime'
  | 'limitRanges'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'networkPolicies'
  | 'parent'
  | 'parent'
  | 'persistentVolumeClaims'
  | 'podDisruptionBudgets'
  | 'pods'
  | 'resourceQuotas'
  | 'roleBindings'
  | 'roles'
  | 'secrets'
  | 'service'
  | 'serviceAccounts'
  | 'services'
  | 'spec'
  | 'statefulSets'
  | 'status'
  | 'syncState'
  | 'uri';

export type TNamespace_SyncState = 'inSync' | 'applyingChanges' | 'failedApply' | 'pendingApply';

type TNamespace = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  configMaps?: TMayBe<TMayBe<TConfigMap>[]>;
  cronjobs?: TMayBe<TMayBe<TCronJob>[]>;
  daemonSets?: TMayBe<TMayBe<TDaemonSet>[]>;
  deployments?: TMayBe<TMayBe<TDeployment>[]>;
  endpoints?: TMayBe<TMayBe<TEndpoints>[]>;
  eventLog?: TMayBe<TMayBe<TEventLog>[]>;
  genericResources?: TMayBe<TMayBe<TGenericResource>[]>;
  horizontalPodAutoscalers?: TMayBe<TMayBe<THorizontalPodAutoscaler>[]>;
  ingresses?: TMayBe<TMayBe<TIngress>[]>;
  jobs?: TMayBe<TMayBe<TJob>[]>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSyncTime?: TMayBe<number>;
  limitRanges?: TMayBe<TMayBe<TLimitRange>[]>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'Namespace';
  name?: TMayBe<string>;
  networkPolicies?: TMayBe<TMayBe<TNetworkPolicy>[]>;
  parent?: TMayBe<TModelBase>;
  persistentVolumeClaims?: TMayBe<TMayBe<TPersistentVolumeClaim>[]>;
  podDisruptionBudgets?: TMayBe<TMayBe<TPodDisruptionBudget>[]>;
  pods?: TMayBe<TMayBe<TPod>[]>;
  resourceQuotas?: TMayBe<TMayBe<TResourceQuota>[]>;
  roleBindings?: TMayBe<TMayBe<TRoleBinding>[]>;
  roles?: TMayBe<TMayBe<TRole>[]>;
  secrets?: TMayBe<TMayBe<TSecret>[]>;
  service?: 'environments';
  serviceAccounts?: TMayBe<TMayBe<TServiceAccount>[]>;
  services?: TMayBe<TMayBe<TService>[]>;
  spec?: TMayBe<TMayBe<TNamespaceSpec>[]>;
  statefulSets?: TMayBe<TMayBe<TStatefulSet>[]>;
  status?: TMayBe<TMayBe<TNamespaceStatus>[]>;
  syncState?: TMayBe<TNamespace_SyncState>;
};

export default TNamespace;
