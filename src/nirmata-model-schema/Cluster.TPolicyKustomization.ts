/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterId'
  | 'clusterSelector'
  | 'createdBy'
  | 'createdOn'
  | 'excludeNamespaces'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'scope'
  | 'scored'
  | 'service'
  | 'severity'
  | 'uri'
  | 'validationFailureAction';

export type TPolicyKustomization_Scope =
  | 'DefaultCustomization'
  | 'LabelBasedCustomization'
  | 'ClusterNameBasedCustomization';

export type TPolicyKustomization_Severity = 'LOW' | 'MEDIUM' | 'HIGH';

export type TPolicyKustomization_ValidationFailureAction = 'enforce' | 'audit' | 'Audit' | 'Enforce';

type TPolicyKustomization = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterId?: TMayBe<string>;
  clusterSelector?: TMayBe<Record<string, TMayBe<string>>>;
  excludeNamespaces?: TMayBe<TMayBe<string>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PolicyKustomization';
  parent?: TMayBe<TModelBase>;
  scope?: TMayBe<TPolicyKustomization_Scope>;
  scored?: TMayBe<boolean>;
  service?: 'cluster';
  severity?: TMayBe<TPolicyKustomization_Severity>;
  validationFailureAction?: TMayBe<TPolicyKustomization_ValidationFailureAction>;
};

export default TPolicyKustomization;
