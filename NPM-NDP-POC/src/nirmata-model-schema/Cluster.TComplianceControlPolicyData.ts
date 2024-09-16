/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'id' | 'policy' | 'rule';

type TComplianceControlPolicyData = {
  id?: TMayBe<string>;
  policy?: TMayBe<string>;
  rule?: TMayBe<string>;
  service?: 'cluster';
};

export default TComplianceControlPolicyData;
