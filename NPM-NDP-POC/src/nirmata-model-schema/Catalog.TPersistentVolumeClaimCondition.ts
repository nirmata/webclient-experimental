/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'lastProbeTime'
  | 'lastTransitionTime'
  | 'message'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'phase'
  | 'reason'
  | 'service'
  | 'status'
  | 'type'
  | 'uri';

type TPersistentVolumeClaimCondition = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastProbeTime?: TMayBe<string>;
  lastTransitionTime?: TMayBe<string>;
  message?: TMayBe<string>;
  modelIndex?: 'PersistentVolumeClaimCondition';
  parent?: TMayBe<TModelBase>;
  phase?: TMayBe<string>;
  reason?: TMayBe<string>;
  service?: 'catalog';
  status?: TMayBe<string>;
  type?: TMayBe<string>;
};

export default TPersistentVolumeClaimCondition;
