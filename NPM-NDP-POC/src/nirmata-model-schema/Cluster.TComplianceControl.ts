/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TComplianceControlPolicyData from './Cluster.TComplianceControlPolicyData';
import TAlarm from './Cluster.TAlarm';
import TAggregateComplianceControlReport from './Cluster.TAggregateComplianceControlReport';

export type TField =
  | 'additionalProperties'
  | 'adminState'
  | 'aggregateReport'
  | 'alarms'
  | 'ancestors'
  | 'cloudProviders'
  | 'controlId'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'id'
  | 'isManual'
  | 'labels'
  | 'manualComplianceDetails'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'policies'
  | 'properties'
  | 'service'
  | 'status'
  | 'subControlId'
  | 'subjectArea'
  | 'uri';

export type TComplianceControl_AdminState = 'enabled' | 'disabled';

export type TComplianceControl_Status = 'pass' | 'failed' | 'warn' | 'notApplicable' | 'notAvailable';

type TComplianceControl = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  adminState?: TMayBe<TComplianceControl_AdminState>;
  aggregateReport?: TMayBe<TMayBe<TAggregateComplianceControlReport>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cloudProviders?: TMayBe<TMayBe<string>[]>;
  controlId?: TMayBe<string>;
  description?: TMayBe<string>;
  isManual?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  manualComplianceDetails?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ComplianceControl';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policies?: TMayBe<TMayBe<TComplianceControlPolicyData>[]>;
  properties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  service?: 'cluster';
  status?: TMayBe<TComplianceControl_Status>;
  subControlId?: TMayBe<string>;
  subjectArea?: TMayBe<string>;
};

export default TComplianceControl;
