/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TComplianceControl from './Cluster.TComplianceControl';
import TReportSchedule from './Cluster.TReportSchedule';

export type TField =
  | 'additionalProperties'
  | 'adminState'
  | 'alarms'
  | 'ancestors'
  | 'category'
  | 'clusterRefs'
  | 'controls'
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
  | 'service'
  | 'tenantWise'
  | 'type'
  | 'uri'
  | 'version';

export type TComplianceStandard_AdminState = 'enabled' | 'disabled';

export type TComplianceStandard_Category = 'cis' | 'other';

export type TComplianceStandard_Type = 'nirmataManaged' | 'userManaged';

type TComplianceStandard = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  adminState?: TMayBe<TComplianceStandard_AdminState>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  category?: TMayBe<TComplianceStandard_Category>;
  clusterRefs?: TMayBe<TMayBe<TModelBase>[]>;
  controls?: TMayBe<TMayBe<TComplianceControl>[]>;
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
  service?: 'cluster';
  tenantWise?: TMayBe<boolean>;
  type?: TMayBe<TComplianceStandard_Type>;
  version?: TMayBe<string>;
};

export default TComplianceStandard;
