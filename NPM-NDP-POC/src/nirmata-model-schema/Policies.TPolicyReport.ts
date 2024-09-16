/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TPolicyReportResultDataData from './Policies.TPolicyReportResultDataData';
import TPolicyReportSummaryData from './Policies.TPolicyReportSummaryData';
import TPolicyDetailsData from './Policies.TPolicyDetailsData';
import TAlarm from './Policies.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'clusterRef'
  | 'createdBy'
  | 'createdOn'
  | 'grade'
  | 'id'
  | 'kind'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'policyDetails'
  | 'policyViolationCount'
  | 'resourceVersion'
  | 'results'
  | 'service'
  | 'summary'
  | 'summaryByCategory'
  | 'uid'
  | 'uri'
  | 'yaml';

type TPolicyReport = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  clusterRef?: TMayBe<TModelBase>;
  grade?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PolicyReport';
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policyDetails?: TMayBe<TMayBe<TPolicyDetailsData>>;
  policyViolationCount?: TMayBe<number>;
  resourceVersion?: TMayBe<string>;
  results?: TMayBe<TMayBe<TPolicyReportResultDataData>[]>;
  service?: 'policies';
  summary?: TMayBe<TMayBe<TPolicyReportSummaryData>>;
  summaryByCategory?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  uid?: TMayBe<string>;
  yaml?: TMayBe<string>;
};

export default TPolicyReport;
