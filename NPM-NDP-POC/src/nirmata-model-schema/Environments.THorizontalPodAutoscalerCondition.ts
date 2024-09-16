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
  | 'lastTransitionTime'
  | 'message'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'reason'
  | 'service'
  | 'status'
  | 'type'
  | 'uri';

type THorizontalPodAutoscalerCondition = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastTransitionTime?: TMayBe<string>;
  message?: TMayBe<string>;
  modelIndex?: 'HorizontalPodAutoscalerCondition';
  parent?: TMayBe<TModelBase>;
  reason?: TMayBe<string>;
  service?: 'environments';
  status?: TMayBe<string>;
  type?: TMayBe<string>;
};

export default THorizontalPodAutoscalerCondition;
