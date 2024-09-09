/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'annotations' | 'apiVersion' | 'kind' | 'labels' | 'name' | 'namespace';

type TResourceMetadataData = {
  annotations?: TMayBe<Record<string, TMayBe<string>>>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  service?: 'policies';
};

export default TResourceMetadataData;
