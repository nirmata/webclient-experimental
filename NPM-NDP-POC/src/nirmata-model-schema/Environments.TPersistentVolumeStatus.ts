/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'message'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'phase'
  | 'reason'
  | 'service'
  | 'uri';

type TPersistentVolumeStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  message?: TMayBe<string>;
  modelIndex?: 'PersistentVolumeStatus';
  parent?: TMayBe<TModelBase>;
  phase?: TMayBe<string>;
  reason?: TMayBe<string>;
  service?: 'environments';
};

export default TPersistentVolumeStatus;
