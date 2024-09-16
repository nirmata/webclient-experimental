/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'driver'
  | 'gateway'
  | 'hosts'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'subnet'
  | 'uri';

export type TNetwork_Driver = 'contiv' | 'calico';

type TNetwork = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  driver?: TMayBe<TNetwork_Driver>;
  gateway?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Network';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  subnet?: TMayBe<string>;
};

export default TNetwork;
