/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TEventDataData from './Cluster.TEventDataData';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'event'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TNodeEvent = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  event?: TMayBe<TMayBe<TEventDataData>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NodeEvent';
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
};

export default TNodeEvent;
