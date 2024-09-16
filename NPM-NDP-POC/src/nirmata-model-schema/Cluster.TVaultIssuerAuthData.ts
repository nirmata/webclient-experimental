/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TVaultIssuerKubernetesAuthData from './Cluster.TVaultIssuerKubernetesAuthData';
import TVaultIssuerAppRoleAuthData from './Cluster.TVaultIssuerAppRoleAuthData';
import TVaultIssuerTokenAuthData from './Cluster.TVaultIssuerTokenAuthData';

export type TField = 'appRole' | 'kubernetes' | 'tokenSecretRef';

type TVaultIssuerAuthData = {
  appRole?: TMayBe<TMayBe<TVaultIssuerAppRoleAuthData>>;
  kubernetes?: TMayBe<TMayBe<TVaultIssuerKubernetesAuthData>>;
  service?: 'cluster';
  tokenSecretRef?: TMayBe<TMayBe<TVaultIssuerTokenAuthData>>;
};

export default TVaultIssuerAuthData;
