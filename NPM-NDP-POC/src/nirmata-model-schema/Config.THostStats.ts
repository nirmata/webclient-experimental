/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cpuUsagePercentage'
  | 'createdBy'
  | 'createdOn'
  | 'dockerPartitionFreeInodes'
  | 'dockerPartitionName'
  | 'dockerPartitionUsedPercentage'
  | 'id'
  | 'labels'
  | 'managedContainerCount'
  | 'memoryFree'
  | 'memoryTotal'
  | 'memoryUsagePercentage'
  | 'memoryUsed'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type THostStats = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cpuUsagePercentage?: TMayBe<number>;
  dockerPartitionFreeInodes?: TMayBe<number>;
  dockerPartitionName?: TMayBe<string>;
  dockerPartitionUsedPercentage?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  managedContainerCount?: TMayBe<number>;
  memoryFree?: TMayBe<number>;
  memoryTotal?: TMayBe<number>;
  memoryUsagePercentage?: TMayBe<number>;
  memoryUsed?: TMayBe<number>;
  modelIndex?: 'HostStats';
  parent?: TMayBe<TModelBase>;
  service?: 'config';
};

export default THostStats;
