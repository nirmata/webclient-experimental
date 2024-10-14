/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TObjectReferenceData from './Cluster.TObjectReferenceData';

export type TField =
  | 'category'
  | 'data'
  | 'message'
  | 'policy'
  | 'properties'
  | 'resources'
  | 'result'
  | 'rule'
  | 'scored'
  | 'severity'
  | 'status'
  | 'timestamp';

export type TPolicyReportResultData_Result = 'pass' | 'fail' | 'warn' | 'error' | 'skip';

export type TPolicyReportResultData_Status = 'pass' | 'fail' | 'warn' | 'error' | 'skip';

type TPolicyReportResultData = {
  category?: TMayBe<string>;
  data?: TMayBe<Record<string, TMayBe<string>>>;
  message?: TMayBe<string>;
  policy?: TMayBe<string>;
  properties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  resources?: TMayBe<TMayBe<TObjectReferenceData>[]>;
  result?: TMayBe<TPolicyReportResultData_Result>;
  rule?: TMayBe<string>;
  scored?: TMayBe<boolean>;
  service?: 'cluster';
  severity?: TMayBe<string>;
  status?: TMayBe<TPolicyReportResultData_Status>;
  timestamp?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
};

export default TPolicyReportResultData;
