/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TEmptyDirVolumeSource from './Environments.TEmptyDirVolumeSource';
import TGCEPersistentDiskVolumeSource from './Environments.TGCEPersistentDiskVolumeSource';
import TSecretVolumeSource from './Environments.TSecretVolumeSource';
import TPersistentVolumeClaimVolumeSource from './Environments.TPersistentVolumeClaimVolumeSource';
import TConfigMapVolumeSource from './Environments.TConfigMapVolumeSource';
import TAWSElasticBlockStoreVolumeSource from './Environments.TAWSElasticBlockStoreVolumeSource';
import TAzureDiskVolumeSource from './Environments.TAzureDiskVolumeSource';
import TAzureFileVolumeSource from './Environments.TAzureFileVolumeSource';
import THostPathVolumeSource from './Environments.THostPathVolumeSource';
import TFlexVolumeSource from './Environments.TFlexVolumeSource';
import TVsphereVirtualDiskVolumeSource from './Environments.TVsphereVirtualDiskVolumeSource';
import TCephFSVolumeSource from './Environments.TCephFSVolumeSource';
import TDownwardAPIVolumeSource from './Environments.TDownwardAPIVolumeSource';
import TCinderVolumeSource from './Environments.TCinderVolumeSource';
import TFlockerVolumeSource from './Environments.TFlockerVolumeSource';
import TGlusterfsVolumeSource from './Environments.TGlusterfsVolumeSource';
import TISCSIVolumeSource from './Environments.TISCSIVolumeSource';
import TNFSVolumeSource from './Environments.TNFSVolumeSource';
import TProjectedVolumeSource from './Environments.TProjectedVolumeSource';
import TCsiVolumeSource from './Environments.TCsiVolumeSource';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'awsElasticBlockStore'
  | 'azureDisk'
  | 'azureFile'
  | 'cephfs'
  | 'cinder'
  | 'configMap'
  | 'createdBy'
  | 'createdOn'
  | 'csi'
  | 'downwardAPI'
  | 'emptyDir'
  | 'flexVolume'
  | 'flocker'
  | 'gcePersistentDisk'
  | 'glusterfs'
  | 'hostPath'
  | 'id'
  | 'iscsi'
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
  | 'cinder'
  | 'flocker'
  | 'glusterfs'
  | 'iscsi'
  | 'nfs'
  | 'projected'
  | 'csi';

type TVolume = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  awsElasticBlockStore?: TMayBe<TMayBe<TAWSElasticBlockStoreVolumeSource>[]>;
  azureDisk?: TMayBe<TMayBe<TAzureDiskVolumeSource>[]>;
  azureFile?: TMayBe<TMayBe<TAzureFileVolumeSource>[]>;
  cephfs?: TMayBe<TMayBe<TCephFSVolumeSource>[]>;
  cinder?: TMayBe<TMayBe<TCinderVolumeSource>[]>;
  configMap?: TMayBe<TMayBe<TConfigMapVolumeSource>[]>;
  csi?: TMayBe<TMayBe<TCsiVolumeSource>[]>;
  downwardAPI?: TMayBe<TMayBe<TDownwardAPIVolumeSource>[]>;
  emptyDir?: TMayBe<TMayBe<TEmptyDirVolumeSource>[]>;
  flexVolume?: TMayBe<TMayBe<TFlexVolumeSource>[]>;
  flocker?: TMayBe<TMayBe<TFlockerVolumeSource>[]>;
  gcePersistentDisk?: TMayBe<TMayBe<TGCEPersistentDiskVolumeSource>[]>;
  glusterfs?: TMayBe<TMayBe<TGlusterfsVolumeSource>[]>;
  hostPath?: TMayBe<TMayBe<THostPathVolumeSource>[]>;
  iscsi?: TMayBe<TMayBe<TISCSIVolumeSource>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Volume';
  name?: TMayBe<string>;
  nfs?: TMayBe<TMayBe<TNFSVolumeSource>[]>;
  parent?: TMayBe<TModelBase>;
  persistentVolumeClaim?: TMayBe<TMayBe<TPersistentVolumeClaimVolumeSource>[]>;
  projected?: TMayBe<TMayBe<TProjectedVolumeSource>[]>;
  secret?: TMayBe<TMayBe<TSecretVolumeSource>[]>;
  service?: 'environments';
  type?: TMayBe<TVolume_Type>;
  vsphereVolume?: TMayBe<TMayBe<TVsphereVirtualDiskVolumeSource>[]>;
};

export default TVolume;
