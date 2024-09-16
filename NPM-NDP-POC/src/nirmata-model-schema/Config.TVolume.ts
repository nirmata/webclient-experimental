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
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'mountPoint'
  | 'name'
  | 'options'
  | 'parent'
  | 'parent'
  | 'scope'
  | 'service'
  | 'uri';

export type TVolume_Scope = 'cluster' | 'host';

type TVolume = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  driver?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Volume';
  mountPoint?: TMayBe<string>;
  name?: TMayBe<string>;
  options?: TMayBe<Record<string, TMayBe<string>>>;
  parent?: TMayBe<TModelBase>;
  scope?: TMayBe<TVolume_Scope>;
  service?: 'config';
};

export default TVolume;
