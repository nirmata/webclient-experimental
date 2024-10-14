/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TPodAffinityTerm from './Catalog.TPodAffinityTerm';
import TWeightedPodAffinityTerm from './Catalog.TWeightedPodAffinityTerm';

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

type TPodAntiAffinity = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PodAntiAffinity';
  parent?: TMayBe<TModelBase>;
  preferredDuringSchedulingIgnoredDuringExecution?: TMayBe<TMayBe<TWeightedPodAffinityTerm>[]>;
  requiredDuringSchedulingIgnoredDuringExecution?: TMayBe<TMayBe<TPodAffinityTerm>[]>;
  service?: 'catalog';
};

export default TPodAntiAffinity;
