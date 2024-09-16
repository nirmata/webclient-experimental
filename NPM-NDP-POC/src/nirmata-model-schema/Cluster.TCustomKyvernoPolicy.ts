/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TPolicyKustomization from './Cluster.TPolicyKustomization';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'beforeYaml'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'policyKustomization'
  | 'policyType'
  | 'policyYaml'
  | 'service'
  | 'uri'
  | 'venafiPKCS11Config';

export type TCustomKyvernoPolicy_PolicyType = 'clusterPolicy' | 'policy';

type TCustomKyvernoPolicy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  beforeYaml?: TMayBe<string>;
  description?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CustomKyvernoPolicy';
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policyKustomization?: TMayBe<TMayBe<TPolicyKustomization>[]>;
  policyType?: TMayBe<TCustomKyvernoPolicy_PolicyType>;
  policyYaml?: TMayBe<string>;
  service?: 'cluster';
};

export default TCustomKyvernoPolicy;
