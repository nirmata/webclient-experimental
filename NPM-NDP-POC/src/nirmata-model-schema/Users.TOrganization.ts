/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'permissions'
  | 'service'
  | 'uri'
  | 'users';

type TOrganization = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Organization';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  permissions?: TMayBe<TMayBe<string>[]>;
  service?: 'users';
};

export default TOrganization;
