/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'config'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'objectStorage'
  | 'parent'
  | 'parent'
  | 'provider'
  | 'service'
  | 'uri';

export type TBackupStorageLocationSpec_Provider = 'aws' | 'azure' | 'gcp';

type TBackupStorageLocationSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  config?: TMayBe<Record<string, TMayBe<string>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'BackupStorageLocationSpec';
  objectStorage?: TMayBe<Record<string, TMayBe<string>>>;
  parent?: TMayBe<TModelBase>;
  provider?: TMayBe<TBackupStorageLocationSpec_Provider>;
  service?: 'cluster';
};

export default TBackupStorageLocationSpec;
