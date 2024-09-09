/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TMetricStatus from './Environments.TMetricStatus';
import THorizontalPodAutoscalerCondition from './Environments.THorizontalPodAutoscalerCondition';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'conditions'
  | 'createdBy'
  | 'createdOn'
  | 'currentMetrics'
  | 'currentReplicas'
  | 'desiredReplicas'
  | 'id'
  | 'labels'
  | 'lastScaleTime'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'observedGeneration'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type THorizontalPodAutoscalerStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  conditions?: TMayBe<TMayBe<THorizontalPodAutoscalerCondition>[]>;
  currentMetrics?: TMayBe<TMayBe<TMetricStatus>[]>;
  currentReplicas?: TMayBe<number>;
  desiredReplicas?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastScaleTime?: TMayBe<string>;
  modelIndex?: 'HorizontalPodAutoscalerStatus';
  observedGeneration?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
};

export default THorizontalPodAutoscalerStatus;
