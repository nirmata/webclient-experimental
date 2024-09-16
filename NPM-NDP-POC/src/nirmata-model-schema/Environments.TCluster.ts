/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TNamespace from './Environments.TNamespace';
import TPersistentVolume from './Environments.TPersistentVolume';
import TCustomResourceDefinition from './Environments.TCustomResourceDefinition';
import TClusterRole from './Environments.TClusterRole';
import TClusterRoleBinding from './Environments.TClusterRoleBinding';
import TAccessControlList from './Environments.TAccessControlList';
import TKubeconfig from './Environments.TKubeconfig';
import TIngressClass from './Environments.TIngressClass';
import TKubeconfigAction from './Environments.TKubeconfigAction';

export type TField =
  | 'accessControlList'
  | 'additionalProperties'
  | 'adminState'
  | 'alarms'
  | 'ancestors'
  | 'autoSyncNamespaces'
  | 'caCert'
  | 'clusterRef'
  | 'clusterRoleBindings'
  | 'clusterRoles'
  | 'configurationState'
  | 'connectionState'
  | 'cpuCapacity'
  | 'createdBy'
  | 'createdOn'
  | 'customResourceDefinitions'
  | 'endpoint'
  | 'environments'
  | 'id'
  | 'ingressClasses'
  | 'initialSynced'
  | 'kubeSystemUid'
  | 'kubeconfigActions'
  | 'kubeconfigs'
  | 'labels'
  | 'memoryCapacity'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespaces'
  | 'parent'
  | 'parent'
  | 'persistentVolumes'
  | 'service'
  | 'state'
  | 'storageClasses'
  | 'uri'
  | 'version'
  | 'watchStarted';

type TCluster = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  adminState?: TMayBe<string>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  autoSyncNamespaces?: TMayBe<boolean>;
  caCert?: TMayBe<string>;
  clusterRef?: TMayBe<TModelBase>;
  clusterRoleBindings?: TMayBe<TMayBe<TClusterRoleBinding>[]>;
  clusterRoles?: TMayBe<TMayBe<TClusterRole>[]>;
  configurationState?: TMayBe<string>;
  connectionState?: TMayBe<string>;
  cpuCapacity?: TMayBe<number>;
  customResourceDefinitions?: TMayBe<TMayBe<TCustomResourceDefinition>[]>;
  endpoint?: TMayBe<string>;
  ingressClasses?: TMayBe<TMayBe<TIngressClass>[]>;
  initialSynced?: TMayBe<boolean>;
  kubeSystemUid?: TMayBe<string>;
  kubeconfigActions?: TMayBe<TMayBe<TKubeconfigAction>[]>;
  kubeconfigs?: TMayBe<TMayBe<TKubeconfig>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memoryCapacity?: TMayBe<number>;
  modelIndex?: 'Cluster';
  name?: TMayBe<string>;
  namespaces?: TMayBe<TMayBe<TNamespace>[]>;
  parent?: TMayBe<TModelBase>;
  persistentVolumes?: TMayBe<TMayBe<TPersistentVolume>[]>;
  service?: 'environments';
  state?: TMayBe<string>;
  storageClasses?: TMayBe<TMayBe<string>[]>;
  version?: TMayBe<string>;
  watchStarted?: TMayBe<boolean>;
};

export default TCluster;
