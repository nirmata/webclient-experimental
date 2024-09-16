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
  | 'currentAverageValue'
  | 'id'
  | 'labels'
  | 'metricName'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TPodsMetricStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  currentAverageValue?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metricName?: TMayBe<string>;
  modelIndex?: 'PodsMetricStatus';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
};

export default TPodsMetricStatus;
