/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cpuLimit'
  | 'cpuRequest'
  | 'cpuUsage'
  | 'cpuUsagePercentage'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'memoryLimit'
  | 'memoryRequest'
  | 'memoryUsage'
  | 'memoryUsagePercentage'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'timestamp'
  | 'uri';

type TContainerStatistics = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cpuLimit?: TMayBe<number>;
  cpuRequest?: TMayBe<number>;
  cpuUsage?: TMayBe<number>;
  cpuUsagePercentage?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memoryLimit?: TMayBe<number>;
  memoryRequest?: TMayBe<number>;
  memoryUsage?: TMayBe<number>;
  memoryUsagePercentage?: TMayBe<number>;
  modelIndex?: 'ContainerStatistics';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  timestamp?: TMayBe<number>;
};

export default TContainerStatistics;
