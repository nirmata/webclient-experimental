/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'error' | 'fail' | 'pass' | 'skip' | 'warn';

type TPolicyReportSummaryData = {
  error?: TMayBe<number>;
  fail?: TMayBe<number>;
  pass?: TMayBe<number>;
  service?: 'cluster';
  skip?: TMayBe<number>;
  warn?: TMayBe<number>;
};

export default TPolicyReportSummaryData;
