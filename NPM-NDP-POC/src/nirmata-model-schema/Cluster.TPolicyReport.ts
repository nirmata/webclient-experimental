/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TPolicyReportResultData from './Cluster.TPolicyReportResultData';
import TPolicyReportSummaryData from './Cluster.TPolicyReportSummaryData';
import TAlarm from './Cluster.TAlarm';
import TObjectMeta from './Cluster.TObjectMeta';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'createdBy'
  | 'createdOn'
  | 'grade'
  | 'id'
  | 'kind'
  | 'labels'
  | 'metadata'
  | 'migrationRequired'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'policyViolationCount'
  | 'results'
  | 'service'
  | 'summary'
  | 'summaryByCategory'
  | 'uri';

type TPolicyReport = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  grade?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  migrationRequired?: TMayBe<boolean>;
  modelIndex?: 'PolicyReport';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policyViolationCount?: TMayBe<number>;
  results?: TMayBe<TMayBe<TPolicyReportResultData>[]>;
  service?: 'cluster';
  summary?: TMayBe<TMayBe<TPolicyReportSummaryData>>;
  summaryByCategory?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
};

export default TPolicyReport;
