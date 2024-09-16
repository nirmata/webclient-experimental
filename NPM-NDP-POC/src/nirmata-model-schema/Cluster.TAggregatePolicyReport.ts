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
  | 'error'
  | 'fail'
  | 'grade'
  | 'id'
  | 'labels'
  | 'migrationRequired'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'pass'
  | 'policyViolationCount'
  | 'service'
  | 'skip'
  | 'summaryByCategory'
  | 'uri'
  | 'warn';

type TAggregatePolicyReport = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  error?: TMayBe<number>;
  fail?: TMayBe<number>;
  grade?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  migrationRequired?: TMayBe<boolean>;
  modelIndex?: 'AggregatePolicyReport';
  parent?: TMayBe<TModelBase>;
  pass?: TMayBe<number>;
  policyViolationCount?: TMayBe<number>;
  service?: 'cluster';
  skip?: TMayBe<number>;
  summaryByCategory?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  warn?: TMayBe<number>;
};

export default TAggregatePolicyReport;
