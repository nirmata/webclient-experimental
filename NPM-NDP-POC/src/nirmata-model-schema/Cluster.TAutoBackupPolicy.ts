/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'backupLocation'
  | 'createdBy'
  | 'createdOn'
  | 'duration'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'schedule'
  | 'service'
  | 'snapshotLocation'
  | 'uri';

export type TAutoBackupPolicy_Duration = 'week' | 'month' | 'sixmonths' | 'year';

export type TAutoBackupPolicy_Schedule = 'hourly' | 'daily' | 'weekly' | 'monthly';

type TAutoBackupPolicy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  backupLocation?: TMayBe<string>;
  duration?: TMayBe<TAutoBackupPolicy_Duration>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AutoBackupPolicy';
  parent?: TMayBe<TModelBase>;
  schedule?: TMayBe<TAutoBackupPolicy_Schedule>;
  service?: 'cluster';
  snapshotLocation?: TMayBe<string>;
};

export default TAutoBackupPolicy;
