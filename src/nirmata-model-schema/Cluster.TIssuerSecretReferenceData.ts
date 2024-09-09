/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'key' | 'name';

type TIssuerSecretReferenceData = {
  key?: TMayBe<string>;
  name?: TMayBe<string>;
  service?: 'cluster';
};

export default TIssuerSecretReferenceData;
