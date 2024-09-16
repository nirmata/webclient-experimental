/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'message' | 'reason';

type TContainerStateWaitingData = {
  message?: TMayBe<string>;
  reason?: TMayBe<string>;
  service?: 'environments';
};

export default TContainerStateWaitingData;
