/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TComplianceControlPolicyData from './Policies.TComplianceControlPolicyData';
import TAlarm from './Policies.TAlarm';
import TAggregateComplianceControlReport from './Policies.TAggregateComplianceControlReport';

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
  | 'statusBySourceType'
  | 'subControlId'
  | 'subjectArea'
  | 'uri'
  | 'validSourceTypes';

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
  service?: 'policies';
  status?: TMayBe<TComplianceControl_Status>;
  statusBySourceType?: TMayBe<object>;
  subControlId?: TMayBe<string>;
  subjectArea?: TMayBe<string>;
  validSourceTypes?: TMayBe<TMayBe<string>[]>;
};

export default TComplianceControl;
