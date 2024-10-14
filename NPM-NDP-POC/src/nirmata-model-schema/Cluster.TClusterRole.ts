/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TObjectMeta from './Cluster.TObjectMeta';
import TPolicyRule from './Cluster.TPolicyRule';
import TAggregationRule from './Cluster.TAggregationRule';

export type TField =
  | 'additionalProperties'
  | 'aggregationRule'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kind'
  | 'labels'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'rules'
  | 'service'
  | 'uri';

type TClusterRole = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  aggregationRule?: TMayBe<TMayBe<TAggregationRule>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'ClusterRole';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  rules?: TMayBe<TMayBe<TPolicyRule>[]>;
  service?: 'cluster';
};

export default TClusterRole;
