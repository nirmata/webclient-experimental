/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TVeleroAwsConfig from './Cluster.TVeleroAwsConfig';
import TVeleroGcpConfig from './Cluster.TVeleroGcpConfig';
import TVeleroAzureConfig from './Cluster.TVeleroAzureConfig';
import TBackupStorageLocation from './Cluster.TBackupStorageLocation';
import TVolumeSnapshotLocation from './Cluster.TVolumeSnapshotLocation';
import TSchedule from './Cluster.TSchedule';
import TBackup from './Cluster.TBackup';
import TRestore from './Cluster.TRestore';
import TAutoBackupPolicy from './Cluster.TAutoBackupPolicy';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'autoBackupPolicy'
  | 'backupStorageLocations'
  | 'backups'
  | 'clusterAddOn'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'lastSyncTime'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespaceRef'
  | 'parent'
  | 'parent'
  | 'providerType'
  | 'restores'
  | 'schedules'
  | 'service'
  | 'syncStatus'
  | 'uri'
  | 'veleroAwsConfig'
  | 'veleroAzureConfig'
  | 'veleroGcpConfig'
  | 'volumeSnapshotLocations';

export type TVeleroConfig_ProviderType = 'aws' | 'azure' | 'gcp';

export type TVeleroConfig_SyncStatus = 'Completed' | 'Failed';

type TVeleroConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  autoBackupPolicy?: TMayBe<TMayBe<TAutoBackupPolicy>[]>;
  backupStorageLocations?: TMayBe<TMayBe<TBackupStorageLocation>[]>;
  backups?: TMayBe<TMayBe<TBackup>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSyncTime?: TMayBe<number>;
  modelIndex?: 'VeleroConfig';
  namespaceRef?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  providerType?: TMayBe<TVeleroConfig_ProviderType>;
  restores?: TMayBe<TMayBe<TRestore>[]>;
  schedules?: TMayBe<TMayBe<TSchedule>[]>;
  service?: 'cluster';
  syncStatus?: TMayBe<TVeleroConfig_SyncStatus>;
  veleroAwsConfig?: TMayBe<TMayBe<TVeleroAwsConfig>[]>;
  veleroAzureConfig?: TMayBe<TMayBe<TVeleroAzureConfig>[]>;
  veleroGcpConfig?: TMayBe<TMayBe<TVeleroGcpConfig>[]>;
  volumeSnapshotLocations?: TMayBe<TMayBe<TVolumeSnapshotLocation>[]>;
};

export default TVeleroConfig;
