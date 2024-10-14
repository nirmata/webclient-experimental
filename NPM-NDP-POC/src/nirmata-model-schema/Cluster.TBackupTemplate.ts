/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'excludedNamespaces'
  | 'excludedResources'
  | 'id'
  | 'includedNamespaces'
  | 'includedResources'
  | 'labelSelector'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'snapshotVolumes'
  | 'storageLocation'
  | 'ttl'
  | 'uri'
  | 'volumeSnapshotLocations';

type TBackupTemplate = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  excludedNamespaces?: TMayBe<TMayBe<string>[]>;
  excludedResources?: TMayBe<TMayBe<string>[]>;
  includedNamespaces?: TMayBe<TMayBe<string>[]>;
  includedResources?: TMayBe<TMayBe<string>[]>;
  labelSelector?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'BackupTemplate';
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  snapshotVolumes?: TMayBe<boolean>;
  storageLocation?: TMayBe<string>;
  ttl?: TMayBe<string>;
  volumeSnapshotLocations?: TMayBe<TMayBe<string>[]>;
};

export default TBackupTemplate;
