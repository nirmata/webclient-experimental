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
  | 'cpuNodeCapacity'
  | 'cpuNodeUtilization'
  | 'cpuRequest'
  | 'cpuRequestPercent'
  | 'cpuUsage'
  | 'cpuUsageRate'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'memoryLimit'
  | 'memoryLimitPercent'
  | 'memoryNodeCapacity'
  | 'memoryNodeUtilization'
  | 'memoryRequest'
  | 'memoryRequestPercent'
  | 'memoryUsage'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'runningPodsCount'
  | 'service'
  | 'timestamp'
  | 'uptime'
  | 'uri';

type TNodeStats = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cpuLimit?: TMayBe<number>;
  cpuLimitPercent?: TMayBe<number>;
  cpuNodeCapacity?: TMayBe<number>;
  cpuNodeUtilization?: TMayBe<number>;
  cpuRequest?: TMayBe<number>;
  cpuRequestPercent?: TMayBe<number>;
  cpuUsage?: TMayBe<number>;
  cpuUsageRate?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memoryLimit?: TMayBe<number>;
  memoryLimitPercent?: TMayBe<number>;
  memoryNodeCapacity?: TMayBe<number>;
  memoryNodeUtilization?: TMayBe<number>;
  memoryRequest?: TMayBe<number>;
  memoryRequestPercent?: TMayBe<number>;
  memoryUsage?: TMayBe<number>;
  modelIndex?: 'NodeStats';
  parent?: TMayBe<TModelBase>;
  runningPodsCount?: TMayBe<number>;
  service?: 'cluster';
  timestamp?: TMayBe<number>;
  uptime?: TMayBe<number>;
};

export default TNodeStats;
