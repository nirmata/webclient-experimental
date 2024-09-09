/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'lastTransitionTime' | 'message' | 'reason' | 'status' | 'type';

type TIssuerStatusConditionData = {
  lastTransitionTime?: TMayBe<string>;
  message?: TMayBe<string>;
  reason?: TMayBe<string>;
  service?: 'cluster';
  status?: TMayBe<string>;
  type?: TMayBe<string>;
};

export default TIssuerStatusConditionData;
