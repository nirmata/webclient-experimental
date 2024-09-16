/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TApiKeyConfigData from './Users.TApiKeyConfigData';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiKeyConfig'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'loginMessage'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'perSettings'
  | 'samlRoleMappings'
  | 'service'
  | 'tenantLabel'
  | 'uri';

type TTenantCustomizations = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  apiKeyConfig?: TMayBe<TMayBe<TApiKeyConfigData>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  loginMessage?: TMayBe<string>;
  modelIndex?: 'TenantCustomizations';
  parent?: TMayBe<TModelBase>;
  perSettings?: TMayBe<TMayBe<unknown>>;
  samlRoleMappings?: TMayBe<Record<string, TMayBe<string>>>;
  service?: 'users';
  tenantLabel?: TMayBe<string>;
};

export default TTenantCustomizations;
