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
  | 'parent'
  | 'parent'
  | 'privateKey'
  | 'publicKey'
  | 'service'
  | 'uri';

type TSaml2SpSettings = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Saml2SpSettings';
  parent?: TMayBe<TModelBase>;
  privateKey?: TMayBe<string>;
  publicKey?: TMayBe<string>;
  service?: 'users';
};

export default TSaml2SpSettings;
