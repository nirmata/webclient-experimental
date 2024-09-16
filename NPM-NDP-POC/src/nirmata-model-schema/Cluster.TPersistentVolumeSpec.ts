/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'accessModes'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'capacity'
  | 'claim'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'mountOptions'
  | 'parent'
  | 'parent'
  | 'persistentVolumeReclaimPolicy'
  | 'service'
  | 'storageClassName'
  | 'uri'
  | 'volumeMode';

type TPersistentVolumeSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessModes?: TMayBe<TMayBe<string>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  capacity?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  claim?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PersistentVolumeSpec';
  mountOptions?: TMayBe<TMayBe<string>[]>;
  parent?: TMayBe<TModelBase>;
  persistentVolumeReclaimPolicy?: TMayBe<string>;
  service?: 'cluster';
  storageClassName?: TMayBe<string>;
  volumeMode?: TMayBe<string>;
};

export default TPersistentVolumeSpec;
