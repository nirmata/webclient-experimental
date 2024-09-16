/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TAWSElasticBlockStoreVolumeSource from './Environments.TAWSElasticBlockStoreVolumeSource';
import TAzureDiskVolumeSource from './Environments.TAzureDiskVolumeSource';
import TAzureFileVolumeSource from './Environments.TAzureFileVolumeSource';
import TObjectReference from './Environments.TObjectReference';
import TFlexVolumeSource from './Environments.TFlexVolumeSource';
import TGCEPersistentDiskVolumeSource from './Environments.TGCEPersistentDiskVolumeSource';
import THostPathVolumeSource from './Environments.THostPathVolumeSource';
import TLocalVolumeSource from './Environments.TLocalVolumeSource';
import TVsphereVirtualDiskVolumeSource from './Environments.TVsphereVirtualDiskVolumeSource';
import TVolumeNodeAffinity from './Environments.TVolumeNodeAffinity';

export type TField =
  | 'accessModes'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'awsElasticBlockStore'
  | 'azureDisk'
  | 'azureFile'
  | 'capacity'
  | 'claimRef'
  | 'createdBy'
  | 'createdOn'
  | 'flexVolume'
  | 'gcePersistentDisk'
  | 'hostPath'
  | 'id'
  | 'labels'
  | 'local'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'mountOptions'
  | 'nodeAffinity'
  | 'parent'
  | 'parent'
  | 'persistentVolumeReclaimPolicy'
  | 'service'
  | 'storageClassName'
  | 'uri'
  | 'volumeMode'
  | 'vsphereVolume';

export type TPersistentVolumeSpec_PersistentVolumeReclaimPolicy = 'Retain' | 'Recycle';

type TPersistentVolumeSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessModes?: TMayBe<TMayBe<string>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  awsElasticBlockStore?: TMayBe<TMayBe<TAWSElasticBlockStoreVolumeSource>[]>;
  azureDisk?: TMayBe<TMayBe<TAzureDiskVolumeSource>[]>;
  azureFile?: TMayBe<TMayBe<TAzureFileVolumeSource>[]>;
  capacity?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  claimRef?: TMayBe<TMayBe<TObjectReference>[]>;
  flexVolume?: TMayBe<TMayBe<TFlexVolumeSource>[]>;
  gcePersistentDisk?: TMayBe<TMayBe<TGCEPersistentDiskVolumeSource>[]>;
  hostPath?: TMayBe<TMayBe<THostPathVolumeSource>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  local?: TMayBe<TMayBe<TLocalVolumeSource>[]>;
  modelIndex?: 'PersistentVolumeSpec';
  mountOptions?: TMayBe<TMayBe<string>[]>;
  nodeAffinity?: TMayBe<TMayBe<TVolumeNodeAffinity>[]>;
  parent?: TMayBe<TModelBase>;
  persistentVolumeReclaimPolicy?: TMayBe<TPersistentVolumeSpec_PersistentVolumeReclaimPolicy>;
  service?: 'environments';
  storageClassName?: TMayBe<string>;
  volumeMode?: TMayBe<string>;
  vsphereVolume?: TMayBe<TMayBe<TVsphereVirtualDiskVolumeSource>[]>;
};

export default TPersistentVolumeSpec;
