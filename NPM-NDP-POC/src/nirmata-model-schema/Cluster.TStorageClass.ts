/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TObjectMeta from './Cluster.TObjectMeta';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'allowVolumeExpansion'
  | 'ancestors'
  | 'apiVersion'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kind'
  | 'labels'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'mountOptions'
  | 'name'
  | 'parameters'
  | 'parent'
  | 'parent'
  | 'provisioner'
  | 'reclaimPolicy'
  | 'service'
  | 'uri';

export type TStorageClass_ReclaimPolicy = 'Delete' | 'Retain';

type TStorageClass = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  allowVolumeExpansion?: TMayBe<boolean>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'StorageClass';
  mountOptions?: TMayBe<TMayBe<string>[]>;
  name?: TMayBe<string>;
  parameters?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  parent?: TMayBe<TModelBase>;
  provisioner?: TMayBe<string>;
  reclaimPolicy?: TMayBe<TStorageClass_ReclaimPolicy>;
  service?: 'cluster';
};

export default TStorageClass;
