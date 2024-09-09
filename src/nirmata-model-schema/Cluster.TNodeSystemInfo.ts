/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'architecture'
  | 'bootID'
  | 'containerRuntimeVersion'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kernelVersion'
  | 'kubeProxyVersion'
  | 'kubeletVersion'
  | 'labels'
  | 'machineID'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'operatingSystem'
  | 'osImage'
  | 'parent'
  | 'parent'
  | 'service'
  | 'systemUUID'
  | 'uri';

type TNodeSystemInfo = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  architecture?: TMayBe<string>;
  bootID?: TMayBe<string>;
  containerRuntimeVersion?: TMayBe<string>;
  kernelVersion?: TMayBe<string>;
  kubeProxyVersion?: TMayBe<string>;
  kubeletVersion?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  machineID?: TMayBe<string>;
  modelIndex?: 'NodeSystemInfo';
  operatingSystem?: TMayBe<string>;
  osImage?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  systemUUID?: TMayBe<string>;
};

export default TNodeSystemInfo;
