/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TNamespace from './Cluster.TNamespace';
import TNode from './Cluster.TNode';
import TStorageClass from './Cluster.TStorageClass';
import TPersistentVolume from './Cluster.TPersistentVolume';
import TClusterRole from './Cluster.TClusterRole';
import TClusterRoleBinding from './Cluster.TClusterRoleBinding';
import TComponentStatus from './Cluster.TComponentStatus';
import TCustomResourceDefinition from './Cluster.TCustomResourceDefinition';
import TEncryptionConfig from './Cluster.TEncryptionConfig';
import TKyvernoPolicy from './Cluster.TKyvernoPolicy';
import TClusterIssuer from './Cluster.TClusterIssuer';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterIssuers'
  | 'clusterRoleBindings'
  | 'clusterRoles'
  | 'componentStatuses'
  | 'createdBy'
  | 'createdOn'
  | 'customResourceDefinitions'
  | 'encryptionConfig'
  | 'id'
  | 'kyvernoPolicies'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespaces'
  | 'nodes'
  | 'parent'
  | 'parent'
  | 'persistentVolumes'
  | 'service'
  | 'storageClasses'
  | 'uri';

type TClusterResources = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterIssuers?: TMayBe<TMayBe<TClusterIssuer>[]>;
  clusterRoleBindings?: TMayBe<TMayBe<TClusterRoleBinding>[]>;
  clusterRoles?: TMayBe<TMayBe<TClusterRole>[]>;
  componentStatuses?: TMayBe<TMayBe<TComponentStatus>[]>;
  customResourceDefinitions?: TMayBe<TMayBe<TCustomResourceDefinition>[]>;
  encryptionConfig?: TMayBe<TMayBe<TEncryptionConfig>[]>;
  kyvernoPolicies?: TMayBe<TMayBe<TKyvernoPolicy>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ClusterResources';
  namespaces?: TMayBe<TMayBe<TNamespace>[]>;
  nodes?: TMayBe<TMayBe<TNode>[]>;
  parent?: TMayBe<TModelBase>;
  persistentVolumes?: TMayBe<TMayBe<TPersistentVolume>[]>;
  service?: 'cluster';
  storageClasses?: TMayBe<TMayBe<TStorageClass>[]>;
};

export default TClusterResources;
