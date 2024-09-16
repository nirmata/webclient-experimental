/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cpuLoadAverage'
  | 'cpuSystem'
  | 'cpuTotal'
  | 'cpuUsagePercentage'
  | 'cpuUser'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'memoryLimitInKB'
  | 'memoryUsageInKB'
  | 'memoryUsagePercentage'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'networkRxBytes'
  | 'networkTxBytes'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TContainerStats = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cpuLoadAverage?: TMayBe<number>;
  cpuSystem?: TMayBe<number>;
  cpuTotal?: TMayBe<number>;
  cpuUsagePercentage?: TMayBe<number>;
  cpuUser?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memoryLimitInKB?: TMayBe<number>;
  memoryUsageInKB?: TMayBe<number>;
  memoryUsagePercentage?: TMayBe<number>;
  modelIndex?: 'ContainerStats';
  networkRxBytes?: TMayBe<number>;
  networkTxBytes?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  service?: 'config';
};

export default TContainerStats;
