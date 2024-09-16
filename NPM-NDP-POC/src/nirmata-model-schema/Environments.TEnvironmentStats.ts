/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cpuUsage'
  | 'cpuUsagePercentage'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'memoryUsage'
  | 'memoryUsagePercentage'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'timestamp'
  | 'uri';

type TEnvironmentStats = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cpuUsage?: TMayBe<number>;
  cpuUsagePercentage?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memoryUsage?: TMayBe<number>;
  memoryUsagePercentage?: TMayBe<number>;
  modelIndex?: 'EnvironmentStats';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  timestamp?: TMayBe<number>;
};

export default TEnvironmentStats;
