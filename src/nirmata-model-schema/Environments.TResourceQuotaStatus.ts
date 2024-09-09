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
  | 'createdBy'
  | 'createdOn'
  | 'hard'
  | 'id'
  | 'labels'
  | 'limitsCpuUsage'
  | 'limitsMemoryUsage'
  | 'memoryUsage'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'requestsCpuUsage'
  | 'requestsMemoryUsage'
  | 'service'
  | 'uri'
  | 'used';

type TResourceQuotaStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cpuUsage?: TMayBe<number>;
  hard?: TMayBe<Record<string, TMayBe<string>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  limitsCpuUsage?: TMayBe<number>;
  limitsMemoryUsage?: TMayBe<number>;
  memoryUsage?: TMayBe<number>;
  modelIndex?: 'ResourceQuotaStatus';
  parent?: TMayBe<TModelBase>;
  requestsCpuUsage?: TMayBe<number>;
  requestsMemoryUsage?: TMayBe<number>;
  service?: 'environments';
  used?: TMayBe<Record<string, TMayBe<string>>>;
};

export default TResourceQuotaStatus;
