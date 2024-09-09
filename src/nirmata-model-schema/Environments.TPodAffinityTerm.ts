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
  | 'labelSelector'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespaces'
  | 'parent'
  | 'parent'
  | 'service'
  | 'topologyKey'
  | 'uri';

type TPodAffinityTerm = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labelSelector?: TMayBe<Record<string, string>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PodAffinityTerm';
  namespaces?: TMayBe<TMayBe<string>[]>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  topologyKey?: TMayBe<string>;
};

export default TPodAffinityTerm;
