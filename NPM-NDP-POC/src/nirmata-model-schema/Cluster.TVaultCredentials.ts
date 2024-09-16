/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'accessToken'
  | 'additionalProperties'
  | 'address'
  | 'alarms'
  | 'ancestors'
  | 'appRole'
  | 'authenticationType'
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
  | 'path'
  | 'secret'
  | 'service'
  | 'uri'
  | 'vaultKubernetesAuth';

export type TVaultCredentials_AuthenticationType = 'token' | 'appRole';

type TVaultCredentials = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessToken?: TMayBe<string>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  address?: TMayBe<string>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  appRole?: TMayBe<string>;
  authenticationType?: TMayBe<TVaultCredentials_AuthenticationType>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'VaultCredentials';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  path?: TMayBe<string>;
  secret?: TMayBe<string>;
  service?: 'cluster';
};

export default TVaultCredentials;
