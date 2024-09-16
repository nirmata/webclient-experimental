/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'lastProbeTime' | 'lastTransitionTime' | 'message' | 'reason' | 'status' | 'type';

type TPodConditionData = {
  lastProbeTime?: TMayBe<string>;
  lastTransitionTime?: TMayBe<string>;
  message?: TMayBe<string>;
  reason?: TMayBe<string>;
  service?: 'environments';
  status?: TMayBe<string>;
  type?: TMayBe<string>;
};

export default TPodConditionData;
