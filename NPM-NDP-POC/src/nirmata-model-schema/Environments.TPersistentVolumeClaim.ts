/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TPersistentVolumeClaimSpec from './Environments.TPersistentVolumeClaimSpec';
import TObjectMeta from './Environments.TObjectMeta';
import TPersistentVolumeClaimStatus from './Environments.TPersistentVolumeClaimStatus';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'application'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kind'
  | 'labels'
  | 'lastSyncTime'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'spec'
  | 'status'
  | 'syncState'
  | 'uri'
  | 'volumeMount';

export type TPersistentVolumeClaim_SyncState = 'inSync' | 'applyingChanges' | 'failedApply' | 'pendingApply';

type TPersistentVolumeClaim = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSyncTime?: TMayBe<number>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'PersistentVolumeClaim';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  spec?: TMayBe<TMayBe<TPersistentVolumeClaimSpec>[]>;
  status?: TMayBe<TMayBe<TPersistentVolumeClaimStatus>[]>;
  syncState?: TMayBe<TPersistentVolumeClaim_SyncState>;
};

export default TPersistentVolumeClaim;
