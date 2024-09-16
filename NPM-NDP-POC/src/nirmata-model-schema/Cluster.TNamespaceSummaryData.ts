/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'error' | 'fail' | 'grade' | 'pass' | 'resourceCount' | 'skip' | 'warn';

type TNamespaceSummaryData = {
  error?: TMayBe<number>;
  fail?: TMayBe<number>;
  grade?: TMayBe<string>;
  pass?: TMayBe<number>;
  resourceCount?: TMayBe<number>;
  service?: 'cluster';
  skip?: TMayBe<number>;
  warn?: TMayBe<number>;
};

export default TNamespaceSummaryData;
