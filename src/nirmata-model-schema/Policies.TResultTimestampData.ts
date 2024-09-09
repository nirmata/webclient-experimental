/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'nanos' | 'seconds';

type TResultTimestampData = {
  nanos?: TMayBe<number>;
  seconds?: TMayBe<number>;
  service?: 'policies';
};

export default TResultTimestampData;
