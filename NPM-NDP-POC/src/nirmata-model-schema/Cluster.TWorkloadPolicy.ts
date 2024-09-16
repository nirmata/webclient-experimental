/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TPolicyKustomization from './Cluster.TPolicyKustomization';

export type TField =
  | 'additionalProperties'
  | 'alarmSeverity'
  | 'alarms'
  | 'ancestors'
  | 'category'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'enableAlarms'
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
  | 'scored'
  | 'service'
  | 'severity'
  | 'uri'
  | 'validationFailureAction';

export type TWorkloadPolicy_PolicyType = 'clusterPolicy' | 'policy';

export type TWorkloadPolicy_Severity = 'LOW' | 'MEDIUM' | 'HIGH';

export type TWorkloadPolicy_ValidationFailureAction = 'enforce' | 'audit' | 'Audit' | 'Enforce';

type TWorkloadPolicy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarmSeverity?: TMayBe<string>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  category?: TMayBe<string>;
  description?: TMayBe<string>;
  enableAlarms?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'WorkloadPolicy';
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policyKustomization?: TMayBe<TMayBe<TPolicyKustomization>[]>;
  policyType?: TMayBe<TWorkloadPolicy_PolicyType>;
  policyYaml?: TMayBe<string>;
  scored?: TMayBe<boolean>;
  service?: 'cluster';
  severity?: TMayBe<TWorkloadPolicy_Severity>;
  validationFailureAction?: TMayBe<TWorkloadPolicy_ValidationFailureAction>;
};

export default TWorkloadPolicy;
