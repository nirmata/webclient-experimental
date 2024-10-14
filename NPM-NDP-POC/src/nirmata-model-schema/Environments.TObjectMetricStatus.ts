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
  | 'currentValue'
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
  | 'uri';

type TObjectMetricStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  currentValue?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metricName?: TMayBe<string>;
  modelIndex?: 'ObjectMetricStatus';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  target?: TMayBe<TMayBe<TCrossVersionObjectReference>[]>;
};

export default TObjectMetricStatus;
