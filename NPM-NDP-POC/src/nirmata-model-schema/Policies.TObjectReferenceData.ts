/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TModelBase from './TModelBase';

export type TField =
  | 'apiVersion'
  | 'fieldPath'
  | 'kind'
  | 'name'
  | 'namespace'
  | 'resourceRef'
  | 'resourceVersion'
  | 'uid';

type TObjectReferenceData = {
  apiVersion?: TMayBe<string>;
  fieldPath?: TMayBe<string>;
  kind?: TMayBe<string>;
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  resourceRef?: TMayBe<TModelBase>;
  resourceVersion?: TMayBe<string>;
  service?: 'policies';
  uid?: TMayBe<string>;
};

export default TObjectReferenceData;
