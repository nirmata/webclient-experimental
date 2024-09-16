/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TNodeSelector from './Catalog.TNodeSelector';
import TPreferredSchedulingTerm from './Catalog.TPreferredSchedulingTerm';

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
  service?: 'catalog';
};

export default TNodeAffinity;
