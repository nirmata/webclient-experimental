/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'apiVersion' | 'fieldPath' | 'kind' | 'name' | 'namespace' | 'resourceVersion' | 'uid';

type TObjectReferenceData = {
  apiVersion?: TMayBe<string>;
  fieldPath?: TMayBe<string>;
  kind?: TMayBe<string>;
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  resourceVersion?: TMayBe<string>;
  service?: 'cluster';
  uid?: TMayBe<string>;
};

export default TObjectReferenceData;
