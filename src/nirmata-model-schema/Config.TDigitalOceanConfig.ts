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
  | 'id'
  | 'image'
  | 'instanceType'
  | 'labels'
  | 'location'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri'
  | 'userData';

type TDigitalOceanConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  image?: TMayBe<string>;
  instanceType?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  location?: TMayBe<string>;
  modelIndex?: 'DigitalOceanConfig';
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  userData?: TMayBe<string>;
};

export default TDigitalOceanConfig;
