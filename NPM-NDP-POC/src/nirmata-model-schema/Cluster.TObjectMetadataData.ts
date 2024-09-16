/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField =
  | 'annotations'
  | 'creationTimestamp'
  | 'deletionTimestamp'
  | 'name'
  | 'namespace'
  | 'resourceVersion'
  | 'selfLink'
  | 'uid';

type TObjectMetadataData = {
  annotations?: TMayBe<Record<string, TMayBe<string>>>;
  creationTimestamp?: TMayBe<string>;
  deletionTimestamp?: TMayBe<string>;
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  resourceVersion?: TMayBe<string>;
  selfLink?: TMayBe<string>;
  service?: 'cluster';
  uid?: TMayBe<string>;
};

export default TObjectMetadataData;
