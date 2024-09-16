/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TApplication from './Environments.TApplication';
import TUpdatePolicy from './Environments.TUpdatePolicy';
import TAccessControlList from './Environments.TAccessControlList';
import TResourceQuota from './Environments.TResourceQuota';
import TLimitRange from './Environments.TLimitRange';
import TIngressPolicy from './Environments.TIngressPolicy';
import TSystemTask from './Environments.TSystemTask';
import TJiraSettings from './Environments.TJiraSettings';
import TGitCredential from './Environments.TGitCredential';
import TEnvironmentStats from './Environments.TEnvironmentStats';
import TEnvironmentActions from './Environments.TEnvironmentActions';

export type TField =
  | 'accessControlList'
  | 'actions'
  | 'additionalProperties'
  | 'adminState'
  | 'alarms'
  | 'allowedImageRegistries'
  | 'ancestors'
  | 'applications'
  | 'changeLog'
  | 'cluster'
  | 'clusterName'
  | 'createdBy'
  | 'createdOn'
  | 'defaultLimitRange'
  | 'defaultResourceQuota'
  | 'gitCredentials'
  | 'hostCluster'
  | 'id'
  | 'ingressHostRule'
  | 'ingressPolicy'
  | 'isReady'
  | 'jiraCredential'
  | 'jiraSettings'
  | 'labels'
  | 'limitRange'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespace'
  | 'namespaces'
  | 'parent'
  | 'parent'
  | 'resourceQuota'
  | 'resourceType'
  | 'service'
  | 'state'
  | 'stats'
  | 'systemTasks'
  | 'updatePolicy'
  | 'uri';

export type TEnvironment_AdminState = 'enabled' | 'disabled';

export type TEnvironment_State = 'pendingDelete';

type TEnvironment = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  actions?: TMayBe<TMayBe<TEnvironmentActions>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  adminState?: TMayBe<TEnvironment_AdminState>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  allowedImageRegistries?: TMayBe<TMayBe<string>[]>;
  applications?: TMayBe<TMayBe<TApplication>[]>;
  clusterName?: TMayBe<string>;
  defaultLimitRange?: TMayBe<TMayBe<TLimitRange>[]>;
  defaultResourceQuota?: TMayBe<TMayBe<TResourceQuota>[]>;
  gitCredentials?: TMayBe<TMayBe<TGitCredential>[]>;
  hostCluster?: TMayBe<TModelBase>;
  ingressHostRule?: TMayBe<string>;
  ingressPolicy?: TMayBe<TMayBe<TIngressPolicy>[]>;
  isReady?: TMayBe<boolean>;
  jiraSettings?: TMayBe<TMayBe<TJiraSettings>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  limitRange?: TMayBe<TMayBe<TLimitRange>[]>;
  modelIndex?: 'Environment';
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  resourceQuota?: TMayBe<TMayBe<TResourceQuota>[]>;
  resourceType?: TMayBe<string>;
  service?: 'environments';
  state?: TMayBe<TEnvironment_State>;
  stats?: TMayBe<TMayBe<TEnvironmentStats>[]>;
  systemTasks?: TMayBe<TMayBe<TSystemTask>[]>;
  updatePolicy?: TMayBe<TMayBe<TUpdatePolicy>[]>;
};

export default TEnvironment;
