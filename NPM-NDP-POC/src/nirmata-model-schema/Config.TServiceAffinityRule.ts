/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'affinity'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'environmentTypes'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'services'
  | 'uri';

export type TServiceAffinityRule_Affinity = 'sameHost' | 'differentHosts' | 'uniqueHost';

type TServiceAffinityRule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  affinity?: TMayBe<TServiceAffinityRule_Affinity>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ServiceAffinityRule';
  parent?: TMayBe<TModelBase>;
  service?: 'config';
};

export default TServiceAffinityRule;
