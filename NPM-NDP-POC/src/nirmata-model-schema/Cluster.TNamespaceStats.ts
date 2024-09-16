/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cpuLimit'
  | 'cpuLimitPercent'
  | 'cpuLimitUsed'
  | 'cpuLimitUsedPercent'
  | 'cpuRequest'
  | 'cpuRequestPercent'
  | 'cpuRequestUsed'
  | 'cpuRequestUsedPercent'
  | 'createdBy'
  | 'createdOn'
  | 'failedPodsCount'
  | 'id'
  | 'labels'
  | 'memoryLimit'
  | 'memoryLimitPercent'
  | 'memoryLimitUsed'
  | 'memoryLimitUsedPercent'
  | 'memoryRequest'
  | 'memoryRequestPercent'
  | 'memoryRequestUsed'
  | 'memoryRequestUsedPercent'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'pendingPodsCount'
  | 'runningPodsCount'
  | 'service'
  | 'succeededPodsCount'
  | 'totalPodsCount'
  | 'unknownPodsCount'
  | 'uri';

type TNamespaceStats = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cpuLimit?: TMayBe<number>;
  cpuLimitPercent?: TMayBe<number>;
  cpuLimitUsed?: TMayBe<number>;
  cpuLimitUsedPercent?: TMayBe<number>;
  cpuRequest?: TMayBe<number>;
  cpuRequestPercent?: TMayBe<number>;
  cpuRequestUsed?: TMayBe<number>;
  cpuRequestUsedPercent?: TMayBe<number>;
  failedPodsCount?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memoryLimit?: TMayBe<number>;
  memoryLimitPercent?: TMayBe<number>;
  memoryLimitUsed?: TMayBe<number>;
  memoryLimitUsedPercent?: TMayBe<number>;
  memoryRequest?: TMayBe<number>;
  memoryRequestPercent?: TMayBe<number>;
  memoryRequestUsed?: TMayBe<number>;
  memoryRequestUsedPercent?: TMayBe<number>;
  modelIndex?: 'NamespaceStats';
  parent?: TMayBe<TModelBase>;
  pendingPodsCount?: TMayBe<number>;
  runningPodsCount?: TMayBe<number>;
  service?: 'cluster';
  succeededPodsCount?: TMayBe<number>;
  totalPodsCount?: TMayBe<number>;
  unknownPodsCount?: TMayBe<number>;
};

export default TNamespaceStats;
