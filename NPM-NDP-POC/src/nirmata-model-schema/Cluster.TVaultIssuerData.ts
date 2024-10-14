/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TVaultIssuerAuthData from './Cluster.TVaultIssuerAuthData';

export type TField = 'auth' | 'caBundle' | 'namespace' | 'path' | 'server';

type TVaultIssuerData = {
  auth?: TMayBe<TMayBe<TVaultIssuerAuthData>>;
  caBundle?: TMayBe<string>;
  namespace?: TMayBe<string>;
  path?: TMayBe<string>;
  server?: TMayBe<string>;
  service?: 'cluster';
};

export default TVaultIssuerData;
