/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'completionTimestamp'
  | 'createdBy'
  | 'createdOn'
  | 'expiration'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'phase'
  | 'service'
  | 'startTimestamp'
  | 'uri'
  | 'validationErrors'
  | 'version'
  | 'volumeSnapshotsAttempted'
  | 'volumeSnapshotsCompleted';

export type TBackupStatus_Phase =
  | 'New'
  | 'FailedValidation'
  | 'InProgress'
  | 'Completed'
  | 'Failed'
  | 'Enabled'
  | 'Disabled'
  | 'Deleting';

type TBackupStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  completionTimestamp?: TMayBe<string>;
  expiration?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'BackupStatus';
  parent?: TMayBe<TModelBase>;
  phase?: TMayBe<TBackupStatus_Phase>;
  service?: 'cluster';
  startTimestamp?: TMayBe<string>;
  validationErrors?: TMayBe<TMayBe<string>[]>;
  version?: TMayBe<number>;
  volumeSnapshotsAttempted?: TMayBe<number>;
  volumeSnapshotsCompleted?: TMayBe<number>;
};

export default TBackupStatus;
