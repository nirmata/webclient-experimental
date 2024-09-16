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
  | 'description'
  | 'id'
  | 'image'
  | 'imageDigest'
  | 'imageId'
  | 'labels'
  | 'lastUpdate'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'owner'
  | 'parent'
  | 'parent'
  | 'pusher'
  | 'service'
  | 'tag'
  | 'uri';

type TImageUpdateEvent = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  description?: TMayBe<string>;
  image?: TMayBe<string>;
  imageDigest?: TMayBe<string>;
  imageId?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastUpdate?: TMayBe<number>;
  modelIndex?: 'ImageUpdateEvent';
  owner?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  pusher?: TMayBe<string>;
  service?: 'config';
  tag?: TMayBe<string>;
};

export default TImageUpdateEvent;
