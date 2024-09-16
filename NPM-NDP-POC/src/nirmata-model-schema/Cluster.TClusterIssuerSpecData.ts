/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TSelfSignedIssuerData from './Cluster.TSelfSignedIssuerData';
import TCaIssuerData from './Cluster.TCaIssuerData';
import TVaultIssuerData from './Cluster.TVaultIssuerData';
import TVenafiIssuerData from './Cluster.TVenafiIssuerData';

export type TField = 'ca' | 'selfSigned' | 'vault' | 'venafi';

type TClusterIssuerSpecData = {
  ca?: TMayBe<TMayBe<TCaIssuerData>>;
  selfSigned?: TMayBe<TMayBe<TSelfSignedIssuerData>>;
  service?: 'cluster';
  vault?: TMayBe<TMayBe<TVaultIssuerData>>;
  venafi?: TMayBe<TMayBe<TVenafiIssuerData>>;
};

export default TClusterIssuerSpecData;
