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
  | 'maxUnavailable'
  | 'minAvailable'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'selector'
  | 'service'
  | 'uri';

type TPodDisruptionBudgetSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  maxUnavailable?: TMayBe<number | string>;
  minAvailable?: TMayBe<number | string>;
  modelIndex?: 'PodDisruptionBudgetSpec';
  parent?: TMayBe<TModelBase>;
  selector?: TMayBe<Record<string, string>>;
  service?: 'environments';
};

export default TPodDisruptionBudgetSpec;
