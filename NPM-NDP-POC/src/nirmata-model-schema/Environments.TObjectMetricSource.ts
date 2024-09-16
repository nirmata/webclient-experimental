/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TCrossVersionObjectReference from './Environments.TCrossVersionObjectReference';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'metricName'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'target'
  | 'targetValue'
  | 'uri';

type TObjectMetricSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metricName?: TMayBe<string>;
  modelIndex?: 'ObjectMetricSource';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  target?: TMayBe<TMayBe<TCrossVersionObjectReference>[]>;
  targetValue?: TMayBe<string>;
};

export default TObjectMetricSource;
