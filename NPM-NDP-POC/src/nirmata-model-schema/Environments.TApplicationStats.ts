/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'availabilityPercentage'
  | 'cpuUsage'
  | 'cpuUsagePercentage'
  | 'createdBy'
  | 'createdOn'
  | 'downTimeInSec'
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

type TApplicationStats = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  availabilityPercentage?: TMayBe<number>;
  cpuUsage?: TMayBe<number>;
  cpuUsagePercentage?: TMayBe<number>;
  downTimeInSec?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memoryUsage?: TMayBe<number>;
  memoryUsagePercentage?: TMayBe<number>;
  modelIndex?: 'ApplicationStats';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  timestamp?: TMayBe<number>;
};

export default TApplicationStats;
