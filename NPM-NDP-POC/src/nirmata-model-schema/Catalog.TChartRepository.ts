/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'allowInSecure'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'helmConfigs'
  | 'id'
  | 'labels'
  | 'location'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'password'
  | 'service'
  | 'sslCertificate'
  | 'state'
  | 'uri'
  | 'username';

export type TChartRepository_State = 'available' | 'notAvailable';

type TChartRepository = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  allowInSecure?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  location?: TMayBe<string>;
  modelIndex?: 'ChartRepository';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  password?: TMayBe<string>;
  service?: 'catalog';
  sslCertificate?: TMayBe<string>;
  state?: TMayBe<TChartRepository_State>;
  username?: TMayBe<string>;
};

export default TChartRepository;
