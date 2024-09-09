/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

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
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'selectors'
  | 'service'
  | 'uri';

type TFargatePodSelector = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'FargatePodSelector';
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  selectors?: TMayBe<Record<string, TMayBe<string>>>;
  service?: 'cluster';
};

export default TFargatePodSelector;
