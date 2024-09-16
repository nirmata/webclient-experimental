/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'etcdCpu'
  | 'etcdDisk'
  | 'etcdMemory'
  | 'fileSystem'
  | 'id'
  | 'ipv4Address'
  | 'labels'
  | 'masterCpu'
  | 'masterDisk'
  | 'masterMemory'
  | 'masterNodesConfig'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'nodeCidrMask'
  | 'numOfEtcd'
  | 'numOfMaster'
  | 'parent'
  | 'parent'
  | 'podCidr'
  | 'prismUserName'
  | 'reclaimPolicy'
  | 'service'
  | 'serviceCidr'
  | 'storageContainerName'
  | 'uri';

export type TNkeClusterConfig_FileSystem = 'ext4' | 'xfs';

export type TNkeClusterConfig_ReclaimPolicy = 'Delete' | 'Retain';

type TNkeClusterConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  etcdCpu?: TMayBe<number>;
  etcdDisk?: TMayBe<number>;
  etcdMemory?: TMayBe<number>;
  fileSystem?: TMayBe<TNkeClusterConfig_FileSystem>;
  ipv4Address?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  masterCpu?: TMayBe<number>;
  masterDisk?: TMayBe<number>;
  masterMemory?: TMayBe<number>;
  masterNodesConfig?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NkeClusterConfig';
  nodeCidrMask?: TMayBe<number>;
  numOfEtcd?: TMayBe<number>;
  numOfMaster?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  podCidr?: TMayBe<string>;
  prismUserName?: TMayBe<string>;
  reclaimPolicy?: TMayBe<TNkeClusterConfig_ReclaimPolicy>;
  service?: 'cluster';
  serviceCidr?: TMayBe<string>;
  storageContainerName?: TMayBe<string>;
};

export default TNkeClusterConfig;
