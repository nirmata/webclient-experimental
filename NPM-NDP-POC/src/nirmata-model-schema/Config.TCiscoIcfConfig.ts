/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'catalog'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri'
  | 'vdc';

type TCiscoIcfConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  catalog?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CiscoIcfConfig';
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  vdc?: TMayBe<string>;
};

export default TCiscoIcfConfig;
