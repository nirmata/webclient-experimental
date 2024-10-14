/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TPodAffinityTerm from './Environments.TPodAffinityTerm';

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
  | 'podAffinityTerm'
  | 'service'
  | 'uri'
  | 'weight';

type TWeightedPodAffinityTerm = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'WeightedPodAffinityTerm';
  parent?: TMayBe<TModelBase>;
  podAffinityTerm?: TMayBe<TMayBe<TPodAffinityTerm>[]>;
  service?: 'environments';
  weight?: TMayBe<number>;
};

export default TWeightedPodAffinityTerm;
