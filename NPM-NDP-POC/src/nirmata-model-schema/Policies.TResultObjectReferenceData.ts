/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'apiVersion' | 'kind' | 'name' | 'namespace' | 'uid';

type TResultObjectReferenceData = {
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  service?: 'policies';
  uid?: TMayBe<string>;
};

export default TResultObjectReferenceData;
