/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'containerExitCount'
  | 'cpuUsagePercentage'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'lastRestartTime'
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

type TDesiredServiceStats = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  containerExitCount?: TMayBe<number>;
  cpuUsagePercentage?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastRestartTime?: TMayBe<string>;
  memoryLimitInKB?: TMayBe<number>;
  memoryUsageInKB?: TMayBe<number>;
  memoryUsagePercentage?: TMayBe<number>;
  modelIndex?: 'DesiredServiceStats';
  networkRxBytes?: TMayBe<number>;
  networkTxBytes?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  service?: 'config';
};

export default TDesiredServiceStats;
