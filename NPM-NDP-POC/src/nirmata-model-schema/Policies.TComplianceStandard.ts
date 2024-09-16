/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Policies.TAlarm';
import TComplianceControl from './Policies.TComplianceControl';
import TReportSchedule from './Policies.TReportSchedule';

export type TField =
  | 'additionalProperties'
  | 'adminState'
  | 'alarms'
  | 'ancestors'
  | 'category'
  | 'controls'
  | 'coverage'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'id'
  | 'k8sMaxVersion'
  | 'k8sMinVersion'
  | 'labels'
  | 'lastUpdateTime'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'reportSchedule'
  | 'score'
  | 'scoreBySourceType'
  | 'service'
  | 'sourceRefs'
  | 'type'
  | 'unfilteredSourceTypes'
  | 'uri'
  | 'version';

export type TComplianceStandard_AdminState = 'enabled' | 'disabled';

export type TComplianceStandard_Category = 'cis' | 'other' | 'repository';

export type TComplianceStandard_Type = 'nirmataManaged' | 'userManaged';

type TComplianceStandard = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  adminState?: TMayBe<TComplianceStandard_AdminState>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  category?: TMayBe<TComplianceStandard_Category>;
  controls?: TMayBe<TMayBe<TComplianceControl>[]>;
  coverage?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  description?: TMayBe<string>;
  k8sMaxVersion?: TMayBe<string>;
  k8sMinVersion?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastUpdateTime?: TMayBe<number>;
  modelIndex?: 'ComplianceStandard';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  reportSchedule?: TMayBe<TMayBe<TReportSchedule>[]>;
  score?: TMayBe<number>;
  scoreBySourceType?: TMayBe<object>;
  service?: 'policies';
  sourceRefs?: TMayBe<TMayBe<TModelBase>[]>;
  type?: TMayBe<TComplianceStandard_Type>;
  unfilteredSourceTypes?: TMayBe<TMayBe<string>[]>;
  version?: TMayBe<string>;
};

export default TComplianceStandard;
