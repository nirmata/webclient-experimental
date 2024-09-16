/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TAccessControl from './Cluster.TAccessControl';

export type TField =
  | 'accessControls'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'ownerId'
  | 'ownerName'
  | 'ownerType'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TAccessControlList = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControls?: TMayBe<TMayBe<TAccessControl>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AccessControlList';
  ownerId?: TMayBe<string>;
  ownerName?: TMayBe<string>;
  ownerType?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
};

export default TAccessControlList;
