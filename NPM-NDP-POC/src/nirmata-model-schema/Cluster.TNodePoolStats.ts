/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cpuUsagePercent'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'memoryUsagePercent'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'runningPodsCount'
  | 'service'
  | 'uri';

type TNodePoolStats = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cpuUsagePercent?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memoryUsagePercent?: TMayBe<number>;
  modelIndex?: 'NodePoolStats';
  parent?: TMayBe<TModelBase>;
  runningPodsCount?: TMayBe<number>;
  service?: 'cluster';
};

export default TNodePoolStats;
