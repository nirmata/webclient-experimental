/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TNodeSelector from './Environments.TNodeSelector';
import TPreferredSchedulingTerm from './Environments.TPreferredSchedulingTerm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'preferredDuringSchedulingIgnoredDuringExecution'
  | 'requiredDuringSchedulingIgnoredDuringExecution'
  | 'service'
  | 'uri';

type TNodeAffinity = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NodeAffinity';
  parent?: TMayBe<TModelBase>;
  preferredDuringSchedulingIgnoredDuringExecution?: TMayBe<TMayBe<TPreferredSchedulingTerm>[]>;
  requiredDuringSchedulingIgnoredDuringExecution?: TMayBe<TMayBe<TNodeSelector>[]>;
  service?: 'environments';
};

export default TNodeAffinity;
