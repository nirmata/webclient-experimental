/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import THealthCondition from './Cluster.THealthCondition';
import TPolicyHealthSummary from './Cluster.TPolicyHealthSummary';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kind'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespace'
  | 'newYaml'
  | 'oldYaml'
  | 'parent'
  | 'parent'
  | 'policyConditions'
  | 'policyHealthSummary'
  | 'policyId'
  | 'policyName'
  | 'service'
  | 'uri';

export type TPoliciesHealth_Kind = 'clusterPolicy' | 'policy';

type TPoliciesHealth = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  kind?: TMayBe<TPoliciesHealth_Kind>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PoliciesHealth';
  namespace?: TMayBe<string>;
  newYaml?: TMayBe<string>;
  oldYaml?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policyConditions?: TMayBe<TMayBe<THealthCondition>[]>;
  policyHealthSummary?: TMayBe<TMayBe<TPolicyHealthSummary>[]>;
  policyId?: TMayBe<TModelBase>;
  policyName?: TMayBe<string>;
  service?: 'cluster';
};

export default TPoliciesHealth;
