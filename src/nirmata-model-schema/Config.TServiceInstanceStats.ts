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

type TServiceInstanceStats = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cpuUsagePercentage?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memoryLimitInKB?: TMayBe<number>;
  memoryUsageInKB?: TMayBe<number>;
  memoryUsagePercentage?: TMayBe<number>;
  modelIndex?: 'ServiceInstanceStats';
  networkRxBytes?: TMayBe<number>;
  networkTxBytes?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  service?: 'config';
};

export default TServiceInstanceStats;
