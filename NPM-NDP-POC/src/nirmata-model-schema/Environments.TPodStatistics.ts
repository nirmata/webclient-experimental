/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TContainerStatistics from './Environments.TContainerStatistics';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'containerStatistics'
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
  | 'parent'
  | 'parent'
  | 'service'
  | 'timestamp'
  | 'uri';

type TPodStatistics = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  containerStatistics?: TMayBe<TMayBe<TContainerStatistics>[]>;
  cpuLimit?: TMayBe<number>;
  cpuRequest?: TMayBe<number>;
  cpuUsage?: TMayBe<number>;
  cpuUsagePercentage?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memoryLimit?: TMayBe<number>;
  memoryRequest?: TMayBe<number>;
  memoryUsage?: TMayBe<number>;
  memoryUsagePercentage?: TMayBe<number>;
  modelIndex?: 'PodStatistics';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  timestamp?: TMayBe<number>;
};

export default TPodStatistics;
