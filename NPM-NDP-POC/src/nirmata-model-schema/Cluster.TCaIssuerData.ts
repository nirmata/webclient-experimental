/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'crlDistributionPoints' | 'secretName';

type TCaIssuerData = {
  crlDistributionPoints?: TMayBe<TMayBe<string>[]>;
  secretName?: TMayBe<string>;
  service?: 'cluster';
};

export default TCaIssuerData;
