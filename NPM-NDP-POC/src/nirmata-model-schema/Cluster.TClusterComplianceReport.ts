/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TComplianceResultData from './Cluster.TComplianceResultData';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cloudProvider'
  | 'complianceResults'
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

type TClusterComplianceReport = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cloudProvider?: TMayBe<string>;
  complianceResults?: TMayBe<TMayBe<TComplianceResultData>[]>;
  failed?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ClusterComplianceReport';
  notApplicable?: TMayBe<number>;
  notAvailable?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  pass?: TMayBe<number>;
  score?: TMayBe<number>;
  service?: 'cluster';
  standardId?: TMayBe<string>;
  standardName?: TMayBe<string>;
  standardVersion?: TMayBe<string>;
  summaryByControls?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  total?: TMayBe<number>;
  warn?: TMayBe<number>;
};

export default TClusterComplianceReport;
