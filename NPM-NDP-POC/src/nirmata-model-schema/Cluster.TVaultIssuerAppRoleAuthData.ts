/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TIssuerSecretReferenceData from './Cluster.TIssuerSecretReferenceData';

export type TField = 'path' | 'roleId' | 'secretRef';

type TVaultIssuerAppRoleAuthData = {
  path?: TMayBe<string>;
  roleId?: TMayBe<string>;
  secretRef?: TMayBe<TMayBe<TIssuerSecretReferenceData>>;
  service?: 'cluster';
};

export default TVaultIssuerAppRoleAuthData;
