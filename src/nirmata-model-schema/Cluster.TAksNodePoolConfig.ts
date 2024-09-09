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
  | 'diskSize'
  | 'enableNodePublicIp'
  | 'id'
  | 'labels'
  | 'maxPods'
  | 'mode'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'network'
  | 'osType'
  | 'parent'
  | 'parent'
  | 'service'
  | 'subnetId'
  | 'uri'
  | 'vmSetType'
  | 'vmSize';

export type TAksNodePoolConfig_Mode = 'System' | 'User';

export type TAksNodePoolConfig_OsType = 'Windows' | 'Linux';

export type TAksNodePoolConfig_VmSetType = 'VirtualMachineScaleSets' | 'AvailabilitySet';

type TAksNodePoolConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  diskSize?: TMayBe<number>;
  enableNodePublicIp?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  maxPods?: TMayBe<number>;
  mode?: TMayBe<TAksNodePoolConfig_Mode>;
  modelIndex?: 'AksNodePoolConfig';
  network?: TMayBe<string>;
  osType?: TMayBe<TAksNodePoolConfig_OsType>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  subnetId?: TMayBe<string>;
  vmSetType?: TMayBe<TAksNodePoolConfig_VmSetType>;
  vmSize?: TMayBe<string>;
};

export default TAksNodePoolConfig;
