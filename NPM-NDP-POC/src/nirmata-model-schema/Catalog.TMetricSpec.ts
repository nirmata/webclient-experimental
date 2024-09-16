/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TExternalMetricSource from './Catalog.TExternalMetricSource';
import TObjectMetricSource from './Catalog.TObjectMetricSource';
import TPodsMetricSource from './Catalog.TPodsMetricSource';
import TResourceMetricSource from './Catalog.TResourceMetricSource';

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
  service?: 'catalog';
  type?: TMayBe<TMetricSpec_Type>;
};

export default TMetricSpec;
