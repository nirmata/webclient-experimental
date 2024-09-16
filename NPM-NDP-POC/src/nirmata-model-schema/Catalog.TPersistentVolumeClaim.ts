/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TObjectMeta from './Catalog.TObjectMeta';
import TPersistentVolumeClaimSpec from './Catalog.TPersistentVolumeClaimSpec';
import TPersistentVolumeClaimStatus from './Catalog.TPersistentVolumeClaimStatus';

export type TField =
  | 'additionalProperties'
  | 'alarms'
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
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'spec'
  | 'status'
  | 'uri';

type TPersistentVolumeClaim = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'PersistentVolumeClaim';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
  spec?: TMayBe<TMayBe<TPersistentVolumeClaimSpec>[]>;
  status?: TMayBe<TMayBe<TPersistentVolumeClaimStatus>[]>;
};

export default TPersistentVolumeClaim;
