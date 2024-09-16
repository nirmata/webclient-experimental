/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'score'
  | 'service'
  | 'status'
  | 'summaryByCluster'
  | 'total'
  | 'totalFailed'
  | 'totalNotApplicable'
  | 'totalNotAvailable'
  | 'totalPassed'
  | 'totalWarn'
  | 'uri';

export type TAggregateComplianceControlReport_Status = 'pass' | 'failed' | 'warn' | 'notApplicable' | 'notAvailable';

type TAggregateComplianceControlReport = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AggregateComplianceControlReport';
  parent?: TMayBe<TModelBase>;
  score?: TMayBe<number>;
  service?: 'cluster';
  status?: TMayBe<TAggregateComplianceControlReport_Status>;
  summaryByCluster?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  total?: TMayBe<number>;
  totalFailed?: TMayBe<number>;
  totalNotApplicable?: TMayBe<number>;
  totalNotAvailable?: TMayBe<number>;
  totalPassed?: TMayBe<number>;
  totalWarn?: TMayBe<number>;
};

export default TAggregateComplianceControlReport;
