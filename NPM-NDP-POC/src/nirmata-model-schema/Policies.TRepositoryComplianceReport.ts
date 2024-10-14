/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TComplianceResultData from './Policies.TComplianceResultData';
import TAlarm from './Policies.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'complianceResults'
  | 'coverage'
  | 'createdBy'
  | 'createdOn'
  | 'failed'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'notApplicable'
  | 'notAvailable'
  | 'parent'
  | 'parent'
  | 'pass'
  | 'score'
  | 'service'
  | 'standardId'
  | 'standardName'
  | 'standardVersion'
  | 'summaryByControls'
  | 'total'
  | 'uri'
  | 'warn';

type TRepositoryComplianceReport = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  complianceResults?: TMayBe<TMayBe<TComplianceResultData>[]>;
  coverage?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  failed?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'RepositoryComplianceReport';
  notApplicable?: TMayBe<number>;
  notAvailable?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  pass?: TMayBe<number>;
  score?: TMayBe<number>;
  service?: 'policies';
  standardId?: TMayBe<string>;
  standardName?: TMayBe<string>;
  standardVersion?: TMayBe<string>;
  summaryByControls?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  total?: TMayBe<number>;
  warn?: TMayBe<number>;
};

export default TRepositoryComplianceReport;
