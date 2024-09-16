/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TIssuerSecretReferenceData from './Cluster.TIssuerSecretReferenceData';

export type TField = 'mountPath' | 'role' | 'secretRef';

type TVaultIssuerKubernetesAuthData = {
  mountPath?: TMayBe<string>;
  role?: TMayBe<string>;
  secretRef?: TMayBe<TMayBe<TIssuerSecretReferenceData>>;
  service?: 'cluster';
};

export default TVaultIssuerKubernetesAuthData;
