/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TAccessControlList from './Environments.TAccessControlList';

export type TField =
  | 'accessControlList'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'id'
  | 'isSSH'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'passPhrase'
  | 'passwordOrKey'
  | 'privateKey'
  | 'service'
  | 'uri'
  | 'username';

type TGitCredential = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  description?: TMayBe<string>;
  isSSH?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'GitCredential';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  passPhrase?: TMayBe<string>;
  passwordOrKey?: TMayBe<string>;
  privateKey?: TMayBe<string>;
  service?: 'environments';
  username?: TMayBe<string>;
};

export default TGitCredential;
