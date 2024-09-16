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
  | 'currentHealthy'
  | 'desiredHealthy'
  | 'disruptedPods'
  | 'disruptionsAllowed'
  | 'expectedPods'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'observedGeneration'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TPodDisruptionBudgetStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  currentHealthy?: TMayBe<number>;
  desiredHealthy?: TMayBe<number>;
  disruptedPods?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  disruptionsAllowed?: TMayBe<number>;
  expectedPods?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PodDisruptionBudgetStatus';
  observedGeneration?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
};

export default TPodDisruptionBudgetStatus;
