/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'controllerName'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'policyChangeType'
  | 'policyName'
  | 'policyNamepace'
  | 'policyType'
  | 'policyValidationMode'
  | 'resourceKind'
  | 'resourceNamespace'
  | 'resourceRequestOperation'
  | 'ruleExecutionCause'
  | 'ruleName'
  | 'ruleResult'
  | 'ruleType'
  | 'service'
  | 'timestamp'
  | 'type'
  | 'uri'
  | 'value';

type TPolicyMetric = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  controllerName?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PolicyMetric';
  parent?: TMayBe<TModelBase>;
  policyChangeType?: TMayBe<string>;
  policyName?: TMayBe<string>;
  policyNamepace?: TMayBe<string>;
  policyType?: TMayBe<string>;
  policyValidationMode?: TMayBe<string>;
  resourceKind?: TMayBe<string>;
  resourceNamespace?: TMayBe<string>;
  resourceRequestOperation?: TMayBe<string>;
  ruleExecutionCause?: TMayBe<string>;
  ruleName?: TMayBe<string>;
  ruleResult?: TMayBe<string>;
  ruleType?: TMayBe<string>;
  service?: 'cluster';
  timestamp?: TMayBe<number>;
  type?: TMayBe<string>;
  value?: TMayBe<number>;
};

export default TPolicyMetric;
