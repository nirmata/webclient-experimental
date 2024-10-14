/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TOidcIdpSettings from './Users.TOidcIdpSettings';
import TSaml2SpSettings from './Users.TSaml2SpSettings';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'allowedIdentityProviders'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'defaultIdentityProvider'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'oidcIdpSettings'
  | 'parent'
  | 'parent'
  | 'saml2IdpSettings'
  | 'service'
  | 'tenants'
  | 'uri';

export type TTenantSettings_DefaultIdentityProvider = 'Local' | 'Google' | 'GitHub' | 'SAML' | 'OIDC';

type TTenantSettings = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  allowedIdentityProviders?: TMayBe<TMayBe<string>[]>;
  defaultIdentityProvider?: TMayBe<TTenantSettings_DefaultIdentityProvider>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'TenantSettings';
  oidcIdpSettings?: TMayBe<TMayBe<TOidcIdpSettings>[]>;
  parent?: TMayBe<TModelBase>;
  saml2IdpSettings?: TMayBe<TMayBe<TSaml2SpSettings>[]>;
  service?: 'users';
};

export default TTenantSettings;
