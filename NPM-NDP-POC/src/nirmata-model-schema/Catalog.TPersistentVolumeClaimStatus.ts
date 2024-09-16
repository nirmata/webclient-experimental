/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TPersistentVolumeClaimCondition from './Catalog.TPersistentVolumeClaimCondition';

export type TField =
  | 'accessModes'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'capacity'
  | 'conditions'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TPersistentVolumeClaimStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessModes?: TMayBe<TMayBe<string>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  capacity?: TMayBe<Record<string, TMayBe<string>>>;
  conditions?: TMayBe<TMayBe<TPersistentVolumeClaimCondition>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PersistentVolumeClaimStatus';
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
};

export default TPersistentVolumeClaimStatus;
