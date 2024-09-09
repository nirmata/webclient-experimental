/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'crlDistributionPoints';

type TSelfSignedIssuerData = {
  crlDistributionPoints?: TMayBe<TMayBe<string>[]>;
  service?: 'cluster';
};

export default TSelfSignedIssuerData;
