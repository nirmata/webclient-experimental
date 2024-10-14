/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TEmptyDirVolumeSource from './Catalog.TEmptyDirVolumeSource';
import TGCEPersistentDiskVolumeSource from './Catalog.TGCEPersistentDiskVolumeSource';
import TSecretVolumeSource from './Catalog.TSecretVolumeSource';
import TAWSElasticBlockStoreVolumeSource from './Catalog.TAWSElasticBlockStoreVolumeSource';
import TAzureDiskVolumeSource from './Catalog.TAzureDiskVolumeSource';
import TAzureFileVolumeSource from './Catalog.TAzureFileVolumeSource';
import TConfigMapVolumeSource from './Catalog.TConfigMapVolumeSource';
import THostPathVolumeSource from './Catalog.THostPathVolumeSource';
import TFlexVolumeSource from './Catalog.TFlexVolumeSource';
import TPersistentVolumeClaimVolumeSource from './Catalog.TPersistentVolumeClaimVolumeSource';
import TVsphereVirtualDiskVolumeSource from './Catalog.TVsphereVirtualDiskVolumeSource';
import TCephFSVolumeSource from './Catalog.TCephFSVolumeSource';
import TDownwardAPIVolumeSource from './Catalog.TDownwardAPIVolumeSource';
import TGitRepoVolumeSource from './Catalog.TGitRepoVolumeSource';
import TNFSVolumeSource from './Catalog.TNFSVolumeSource';
import TProjectedVolumeSource from './Catalog.TProjectedVolumeSource';
import TCsiVolumeSource from './Catalog.TCsiVolumeSource';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'awsElasticBlockStore'
  | 'azureDisk'
  | 'azureFile'
  | 'cephfs'
  | 'configMap'
  | 'createdBy'
  | 'createdOn'
  | 'csi'
  | 'downwardAPI'
  | 'emptyDir'
  | 'flexVolume'
  | 'gcePersistentDisk'
  | 'gitRepo'
  | 'hostPath'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'nfs'
  | 'parent'
  | 'parent'
  | 'persistentVolumeClaim'
  | 'projected'
  | 'secret'
  | 'service'
  | 'type'
  | 'uri'
  | 'vsphereVolume';

export type TVolume_Type =
  | 'emptyDir'
  | 'gcePersistentDisk'
  | 'secret'
  | 'awsElasticBlockStore'
  | 'azureDisk'
  | 'azureFile'
  | 'configMap'
  | 'hostPath'
  | 'flexVolume'
  | 'persistentVolumeClaim'
  | 'vsphereVolume'
  | 'cephfs'
  | 'downwardAPI'
  | 'gitRepo'
  | 'projected'
  | 'nfs'
  | 'csi';

type TVolume = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  awsElasticBlockStore?: TMayBe<TMayBe<TAWSElasticBlockStoreVolumeSource>[]>;
  azureDisk?: TMayBe<TMayBe<TAzureDiskVolumeSource>[]>;
  azureFile?: TMayBe<TMayBe<TAzureFileVolumeSource>[]>;
  cephfs?: TMayBe<TMayBe<TCephFSVolumeSource>[]>;
  configMap?: TMayBe<TMayBe<TConfigMapVolumeSource>[]>;
  csi?: TMayBe<TMayBe<TCsiVolumeSource>[]>;
  downwardAPI?: TMayBe<TMayBe<TDownwardAPIVolumeSource>[]>;
  emptyDir?: TMayBe<TMayBe<TEmptyDirVolumeSource>[]>;
  flexVolume?: TMayBe<TMayBe<TFlexVolumeSource>[]>;
  gcePersistentDisk?: TMayBe<TMayBe<TGCEPersistentDiskVolumeSource>[]>;
  gitRepo?: TMayBe<TMayBe<TGitRepoVolumeSource>[]>;
  hostPath?: TMayBe<TMayBe<THostPathVolumeSource>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Volume';
  name?: TMayBe<string>;
  nfs?: TMayBe<TMayBe<TNFSVolumeSource>[]>;
  parent?: TMayBe<TModelBase>;
  persistentVolumeClaim?: TMayBe<TMayBe<TPersistentVolumeClaimVolumeSource>[]>;
  projected?: TMayBe<TMayBe<TProjectedVolumeSource>[]>;
  secret?: TMayBe<TMayBe<TSecretVolumeSource>[]>;
  service?: 'catalog';
  type?: TMayBe<TVolume_Type>;
  vsphereVolume?: TMayBe<TMayBe<TVsphereVirtualDiskVolumeSource>[]>;
};

export default TVolume;
