/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'kinds' | 'names' | 'namespaces';

type TPolicyExceptionResourceData = {
  kinds?: TMayBe<TMayBe<string>[]>;
  names?: TMayBe<TMayBe<string>[]>;
  namespaces?: TMayBe<TMayBe<string>[]>;
  service?: 'policies';
};

export default TPolicyExceptionResourceData;
