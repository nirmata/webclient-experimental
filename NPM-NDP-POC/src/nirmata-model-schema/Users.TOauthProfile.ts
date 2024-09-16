/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'attributes'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'profileId'
  | 'service'
  | 'uri';

type TOauthProfile = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  attributes?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'OauthProfile';
  parent?: TMayBe<TModelBase>;
  profileId?: TMayBe<string>;
  service?: 'users';
};

export default TOauthProfile;
