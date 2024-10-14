/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TVenafiIssuerCloudData from './Cluster.TVenafiIssuerCloudData';
import TVenafiIssuerTppData from './Cluster.TVenafiIssuerTppData';

export type TField = 'cloud' | 'tpp' | 'zone';

type TVenafiIssuerData = {
  cloud?: TMayBe<TMayBe<TVenafiIssuerCloudData>>;
  service?: 'cluster';
  tpp?: TMayBe<TMayBe<TVenafiIssuerTppData>>;
  zone?: TMayBe<string>;
};

export default TVenafiIssuerData;
