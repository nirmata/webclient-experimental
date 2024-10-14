/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'count'
  | 'createdBy'
  | 'createdOn'
  | 'firstSeen'
  | 'id'
  | 'labels'
  | 'lastSeen'
  | 'message'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'reason'
  | 'service'
  | 'source'
  | 'type'
  | 'uri';

type TEvent = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  count?: TMayBe<number>;
  firstSeen?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSeen?: TMayBe<number>;
  message?: TMayBe<string>;
  modelIndex?: 'Event';
  parent?: TMayBe<TModelBase>;
  reason?: TMayBe<string>;
  service?: 'cluster';
  source?: TMayBe<string>;
  type?: TMayBe<string>;
};

export default TEvent;
