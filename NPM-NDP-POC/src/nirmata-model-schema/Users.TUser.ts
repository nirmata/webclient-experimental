/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TOauthProfile from './Users.TOauthProfile';
import TSession from './Users.TSession';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiKey'
  | 'apiKeyExpiryTime'
  | 'apiKeyGenerationTime'
  | 'apiKeyRevocationTime'
  | 'createdBy'
  | 'createdOn'
  | 'email'
  | 'firstLoginAfterMfaEnable'
  | 'id'
  | 'identityProvider'
  | 'labels'
  | 'lastLogin'
  | 'mfaEnabled'
  | 'mfaKey'
  | 'mfaUri'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'oauthProfiles'
  | 'orgs'
  | 'parent'
  | 'parent'
  | 'password'
  | 'phone'
  | 'pictureUrl'
  | 'policyExceptionApprovalFirstLoginAfterMfaEnable'
  | 'policyExceptionApprovalMfa'
  | 'policyExceptionApprovalMfaKey'
  | 'policyExceptionApprovalMfaUri'
  | 'preferences'
  | 'resetToken'
  | 'resetTokenExpiration'
  | 'role'
  | 'service'
  | 'session'
  | 'teams'
  | 'uri';

export type TUser_IdentityProvider = 'Local' | 'Google' | 'GitHub' | 'SAML' | 'OIDC';

export type TUser_Role =
  | 'devops'
  | 'platform'
  | 'admin'
  | 'security'
  | 'sysadmin'
  | 'spadmin'
  | 'clusterRegistrator'
  | 'reportPublisher';

type TUser = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  apiKey?: TMayBe<string>;
  apiKeyExpiryTime?: TMayBe<number>;
  apiKeyGenerationTime?: TMayBe<number>;
  apiKeyRevocationTime?: TMayBe<number>;
  email?: TMayBe<string>;
  firstLoginAfterMfaEnable?: TMayBe<boolean>;
  identityProvider?: TMayBe<TUser_IdentityProvider>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastLogin?: TMayBe<string>;
  mfaEnabled?: TMayBe<boolean>;
  mfaKey?: TMayBe<string>;
  mfaUri?: TMayBe<string>;
  modelIndex?: 'User';
  name?: TMayBe<string>;
  oauthProfiles?: TMayBe<TMayBe<TOauthProfile>[]>;
  parent?: TMayBe<TModelBase>;
  password?: TMayBe<string>;
  phone?: TMayBe<string>;
  pictureUrl?: TMayBe<string>;
  policyExceptionApprovalFirstLoginAfterMfaEnable?: TMayBe<boolean>;
  policyExceptionApprovalMfa?: TMayBe<boolean>;
  policyExceptionApprovalMfaKey?: TMayBe<string>;
  policyExceptionApprovalMfaUri?: TMayBe<string>;
  preferences?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  resetToken?: TMayBe<string>;
  resetTokenExpiration?: TMayBe<number>;
  role?: TMayBe<TUser_Role>;
  service?: 'users';
  session?: TMayBe<TMayBe<TSession>[]>;
};

export default TUser;
