/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TCrossVersionObjectReference from './Environments.TCrossVersionObjectReference';
import TMetricSpec from './Environments.TMetricSpec';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'maxReplicas'
  | 'metrics'
  | 'minReplicas'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'scaleTargetRef'
  | 'service'
  | 'targetCPUUtilizationPercentage'
  | 'uri';

type THorizontalPodAutoscalerSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  maxReplicas?: TMayBe<number>;
  metrics?: TMayBe<TMayBe<TMetricSpec>[]>;
  minReplicas?: TMayBe<number>;
  modelIndex?: 'HorizontalPodAutoscalerSpec';
  parent?: TMayBe<TModelBase>;
  scaleTargetRef?: TMayBe<TMayBe<TCrossVersionObjectReference>[]>;
  service?: 'environments';
  targetCPUUtilizationPercentage?: TMayBe<number>;
};

export default THorizontalPodAutoscalerSpec;
