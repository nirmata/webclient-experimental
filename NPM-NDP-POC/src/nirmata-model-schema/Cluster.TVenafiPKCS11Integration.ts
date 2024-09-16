/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TVenafiPKCS11Config from './Cluster.TVenafiPKCS11Config';

export type TField =
  | 'additionalProperties'
  | 'additionalTrustedCertificate'
  | 'alarms'
  | 'ancestors'
  | 'authURL'
  | 'createdBy'
  | 'createdOn'
  | 'hsmURL'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'password'
  | 'service'
  | 'uri'
  | 'username'
  | 'venafiPKCS11Config';

type TVenafiPKCS11Integration = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  additionalTrustedCertificate?: TMayBe<string>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  authURL?: TMayBe<string>;
  hsmURL?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'VenafiPKCS11Integration';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  password?: TMayBe<string>;
  service?: 'cluster';
  username?: TMayBe<string>;
  venafiPKCS11Config?: TMayBe<TMayBe<TVenafiPKCS11Config>[]>;
};

export default TVenafiPKCS11Integration;
