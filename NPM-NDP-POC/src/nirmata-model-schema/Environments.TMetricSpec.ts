/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TExternalMetricSource from './Environments.TExternalMetricSource';
import TObjectMetricSource from './Environments.TObjectMetricSource';
import TPodsMetricSource from './Environments.TPodsMetricSource';
import TResourceMetricSource from './Environments.TResourceMetricSource';

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

export type TMetricSpec_Type = 'Pods' | 'Resource' | 'Object' | 'External';

type TMetricSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  external?: TMayBe<TMayBe<TExternalMetricSource>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'MetricSpec';
  object?: TMayBe<TMayBe<TObjectMetricSource>[]>;
  parent?: TMayBe<TModelBase>;
  pods?: TMayBe<TMayBe<TPodsMetricSource>[]>;
  resource?: TMayBe<TMayBe<TResourceMetricSource>[]>;
  service?: 'environments';
  type?: TMayBe<TMetricSpec_Type>;
};

export default TMetricSpec;
