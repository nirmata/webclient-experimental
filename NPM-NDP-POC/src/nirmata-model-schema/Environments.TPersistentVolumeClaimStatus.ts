/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TPersistentVolumeClaimCondition from './Environments.TPersistentVolumeClaimCondition';

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
  | 'phase'
  | 'service'
  | 'uri';

type TPersistentVolumeClaimStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessModes?: TMayBe<TMayBe<string>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  capacity?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  conditions?: TMayBe<TMayBe<TPersistentVolumeClaimCondition>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PersistentVolumeClaimStatus';
  parent?: TMayBe<TModelBase>;
  phase?: TMayBe<string>;
  service?: 'environments';
};

export default TPersistentVolumeClaimStatus;
