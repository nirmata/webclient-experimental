/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cacheDuration'
  | 'createdBy'
  | 'createdOn'
  | 'entityId'
  | 'groupsAttributeName'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'roleAttributeName'
  | 'service'
  | 'singleLogoutServiceUrl'
  | 'singleSignOnServiceUrl'
  | 'uri'
  | 'x509Certificate';

type TSaml2IdpSettings = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  cacheDuration?: TMayBe<number>;
  entityId?: TMayBe<string>;
  groupsAttributeName?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Saml2IdpSettings';
  parent?: TMayBe<TModelBase>;
  roleAttributeName?: TMayBe<string>;
  service?: 'users';
  singleLogoutServiceUrl?: TMayBe<string>;
  singleSignOnServiceUrl?: TMayBe<string>;
  x509Certificate?: TMayBe<string>;
};

export default TSaml2IdpSettings;
