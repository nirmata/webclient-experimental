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
  | 'datacenter'
  | 'datastore'
  | 'id'
  | 'image'
  | 'instanceType'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'network'
  | 'parent'
  | 'parent'
  | 'resourcePool'
  | 'service'
  | 'uri';

type TVSphereConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  datacenter?: TMayBe<string>;
  datastore?: TMayBe<string>;
  image?: TMayBe<string>;
  instanceType?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'VSphereConfig';
  network?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  resourcePool?: TMayBe<string>;
  service?: 'config';
};

export default TVSphereConfig;
