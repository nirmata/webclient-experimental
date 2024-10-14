/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TPodAffinityTerm from './Environments.TPodAffinityTerm';
import TWeightedPodAffinityTerm from './Environments.TWeightedPodAffinityTerm';

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
  service?: 'environments';
};

export default TPodAntiAffinity;
