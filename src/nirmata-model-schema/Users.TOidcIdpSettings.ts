/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clientId'
  | 'createdBy'
  | 'createdOn'
  | 'discoveryUri'
  | 'groupsAttributeName'
  | 'id'
  | 'initiateLoginURI'
  | 'jwsAlgorithm'
  | 'labels'
  | 'loginRedirectURI'
  | 'logoutRedirectURI'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'scopes'
  | 'secret'
  | 'service'
  | 'tenants'
  | 'uri';

export type TOidcIdpSettings_JwsAlgorithm =
  | 'HS256'
  | 'HS384'
  | 'HS512'
  | 'RS256'
  | 'RS384'
  | 'RS512'
  | 'ES256'
  | 'ES384'
  | 'ES512'
  | 'PS256'
  | 'PS384'
  | 'PS512';

type TOidcIdpSettings = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  clientId?: TMayBe<string>;
  discoveryUri?: TMayBe<string>;
  groupsAttributeName?: TMayBe<string>;
  initiateLoginURI?: TMayBe<string>;
  jwsAlgorithm?: TMayBe<TOidcIdpSettings_JwsAlgorithm>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  loginRedirectURI?: TMayBe<string>;
  logoutRedirectURI?: TMayBe<string>;
  modelIndex?: 'OidcIdpSettings';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  scopes?: TMayBe<string>;
  secret?: TMayBe<string>;
  service?: 'users';
};

export default TOidcIdpSettings;
