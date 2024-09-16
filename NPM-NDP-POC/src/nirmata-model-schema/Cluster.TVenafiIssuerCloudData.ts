/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TIssuerSecretReferenceData from './Cluster.TIssuerSecretReferenceData';

export type TField = 'apiTokenSecretRef' | 'url';

type TVenafiIssuerCloudData = {
  apiTokenSecretRef?: TMayBe<TMayBe<TIssuerSecretReferenceData>>;
  service?: 'cluster';
  url?: TMayBe<string>;
};

export default TVenafiIssuerCloudData;
