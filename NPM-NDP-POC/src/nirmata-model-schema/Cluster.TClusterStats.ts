/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'availabilityPercentage'
  | 'availablePodsCount'
  | 'cpuAllocatable'
  | 'cpuAllocated'
  | 'cpuCapacity'
  | 'cpuLimit'
  | 'cpuLimitPercent'
  | 'cpuRequest'
  | 'cpuRequestPercent'
  | 'cpuUsagePercent'
  | 'cpuUsageRate'
  | 'createdBy'
  | 'createdOn'
  | 'downTimeInSec'
  | 'failedNodeCount'
  | 'failedNodePercent'
  | 'failureCount'
  | 'id'
  | 'labels'
  | 'memoryAllocatable'
  | 'memoryAllocated'
  | 'memoryCapacity'
  | 'memoryLimit'
  | 'memoryLimitPercent'
  | 'memoryRequest'
  | 'memoryRequestPercent'
  | 'memoryUsage'
  | 'memoryUsagePercent'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'pendingPodsCount'
  | 'podsAllocatable'
  | 'podsAllocated'
  | 'podsCapacity'
  | 'requestedPodsCount'
  | 'runningPodsCount'
  | 'service'
  | 'timestamp'
  | 'uri';

type TClusterStats = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  availabilityPercentage?: TMayBe<number>;
  availablePodsCount?: TMayBe<number>;
  cpuAllocatable?: TMayBe<number>;
  cpuAllocated?: TMayBe<number>;
  cpuCapacity?: TMayBe<number>;
  cpuLimit?: TMayBe<number>;
  cpuLimitPercent?: TMayBe<number>;
  cpuRequest?: TMayBe<number>;
  cpuRequestPercent?: TMayBe<number>;
  cpuUsagePercent?: TMayBe<number>;
  cpuUsageRate?: TMayBe<number>;
  downTimeInSec?: TMayBe<number>;
  failedNodeCount?: TMayBe<number>;
  failedNodePercent?: TMayBe<number>;
  failureCount?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memoryAllocatable?: TMayBe<number>;
  memoryAllocated?: TMayBe<number>;
  memoryCapacity?: TMayBe<number>;
  memoryLimit?: TMayBe<number>;
  memoryLimitPercent?: TMayBe<number>;
  memoryRequest?: TMayBe<number>;
  memoryRequestPercent?: TMayBe<number>;
  memoryUsage?: TMayBe<number>;
  memoryUsagePercent?: TMayBe<number>;
  modelIndex?: 'ClusterStats';
  parent?: TMayBe<TModelBase>;
  pendingPodsCount?: TMayBe<number>;
  podsAllocatable?: TMayBe<number>;
  podsAllocated?: TMayBe<number>;
  podsCapacity?: TMayBe<number>;
  requestedPodsCount?: TMayBe<number>;
  runningPodsCount?: TMayBe<number>;
  service?: 'cluster';
  timestamp?: TMayBe<number>;
};

export default TClusterStats;
