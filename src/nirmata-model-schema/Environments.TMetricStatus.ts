/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TExternalMetricStatus from './Environments.TExternalMetricStatus';
import TObjectMetricStatus from './Environments.TObjectMetricStatus';
import TPodsMetricStatus from './Environments.TPodsMetricStatus';
import TResourceMetricStatus from './Environments.TResourceMetricStatus';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'external'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'object'
  | 'parent'
  | 'parent'
  | 'pods'
  | 'resource'
  | 'service'
  | 'type'
  | 'uri';

export type TMetricStatus_Type = 'Pods' | 'Resource' | 'Object' | 'External';

type TMetricStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  external?: TMayBe<TMayBe<TExternalMetricStatus>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'MetricStatus';
  object?: TMayBe<TMayBe<TObjectMetricStatus>[]>;
  parent?: TMayBe<TModelBase>;
  pods?: TMayBe<TMayBe<TPodsMetricStatus>[]>;
  resource?: TMayBe<TMayBe<TResourceMetricStatus>[]>;
  service?: 'environments';
  type?: TMayBe<TMetricStatus_Type>;
};

export default TMetricStatus;
