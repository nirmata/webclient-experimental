/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'complianceControlId' | 'complianceControlName' | 'kubeBenchIndex' | 'policy' | 'rule' | 'status';

export type TComplianceResultData_Status = 'pass' | 'failed' | 'warn' | 'notApplicable' | 'notAvailable';

type TComplianceResultData = {
  complianceControlId?: TMayBe<string>;
  complianceControlName?: TMayBe<string>;
  kubeBenchIndex?: TMayBe<string>;
  policy?: TMayBe<string>;
  rule?: TMayBe<string>;
  service?: 'policies';
  status?: TMayBe<TComplianceResultData_Status>;
};

export default TComplianceResultData;
