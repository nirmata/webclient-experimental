/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TIssuerCredentialsReferenceData from './Cluster.TIssuerCredentialsReferenceData';

export type TField = 'caBundle' | 'credentialsRef' | 'url';

type TVenafiIssuerTppData = {
  caBundle?: TMayBe<string>;
  credentialsRef?: TMayBe<TMayBe<TIssuerCredentialsReferenceData>>;
  service?: 'cluster';
  url?: TMayBe<string>;
};

export default TVenafiIssuerTppData;
