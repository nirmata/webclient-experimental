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
  | 'metricName'
  | 'metricSelector'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'targetAverageValue'
  | 'targetValue'
  | 'uri';

type TExternalMetricSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metricName?: TMayBe<string>;
  metricSelector?: TMayBe<Record<string, string>>;
  modelIndex?: 'ExternalMetricSource';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  targetAverageValue?: TMayBe<string>;
  targetValue?: TMayBe<string>;
};

export default TExternalMetricSource;
