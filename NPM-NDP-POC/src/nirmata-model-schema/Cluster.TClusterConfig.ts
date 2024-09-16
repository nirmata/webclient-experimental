/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TClusterSpec from './Cluster.TClusterSpec';
import TClusterCertificates from './Cluster.TClusterCertificates';
import TClusterSecurity from './Cluster.TClusterSecurity';

export type TField =
  | 'acceptAnyCert'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'applyToExistingSecrets'
  | 'autoSyncNamespaces'
  | 'certificates'
  | 'cloudProvider'
  | 'clusterCidr'
  | 'createdBy'
  | 'createdOn'
  | 'endpoint'
  | 'id'
  | 'labels'
  | 'masters'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'nodeCount'
  | 'overrideValues'
  | 'parent'
  | 'parent'
  | 'port'
  | 'security'
  | 'service'
  | 'serviceIpRange'
  | 'spec'
  | 'systemMetadata'
  | 'uri'
  | 'version';

type TClusterConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  acceptAnyCert?: TMayBe<boolean>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  applyToExistingSecrets?: TMayBe<boolean>;
  autoSyncNamespaces?: TMayBe<boolean>;
  certificates?: TMayBe<TMayBe<TClusterCertificates>[]>;
  cloudProvider?: TMayBe<string>;
  clusterCidr?: TMayBe<string>;
  endpoint?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  masters?: TMayBe<TMayBe<TModelBase>[]>;
  modelIndex?: 'ClusterConfig';
  nodeCount?: TMayBe<number>;
  overrideValues?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  parent?: TMayBe<TModelBase>;
  port?: TMayBe<number>;
  security?: TMayBe<TMayBe<TClusterSecurity>[]>;
  service?: 'cluster';
  serviceIpRange?: TMayBe<string>;
  spec?: TMayBe<TMayBe<TClusterSpec>[]>;
  systemMetadata?: TMayBe<Record<string, TMayBe<string>>>;
  version?: TMayBe<string>;
};

export default TClusterConfig;
