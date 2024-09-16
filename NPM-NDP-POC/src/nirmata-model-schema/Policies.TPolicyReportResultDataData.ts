/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TObjectReferenceData from './Policies.TObjectReferenceData';

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

export type TPolicyReportResultDataData_Result = 'pass' | 'fail' | 'warn' | 'error' | 'skip';

export type TPolicyReportResultDataData_Status = 'pass' | 'fail' | 'warn' | 'error' | 'skip';

type TPolicyReportResultDataData = {
  category?: TMayBe<string>;
  data?: TMayBe<Record<string, TMayBe<string>>>;
  message?: TMayBe<string>;
  policy?: TMayBe<string>;
  properties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  resources?: TMayBe<TMayBe<TObjectReferenceData>[]>;
  result?: TMayBe<TPolicyReportResultDataData_Result>;
  rule?: TMayBe<string>;
  scored?: TMayBe<boolean>;
  service?: 'policies';
  severity?: TMayBe<string>;
  status?: TMayBe<TPolicyReportResultDataData_Status>;
  timestamp?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
};

export default TPolicyReportResultDataData;
