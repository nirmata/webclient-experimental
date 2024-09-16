/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'policy' | 'rule';

type TPolicyViolationDetailsData = {
  policy?: TMayBe<string>;
  rule?: TMayBe<string>;
  service?: 'policies';
};

export default TPolicyViolationDetailsData;
