/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TOperatorEvent from './Cluster.TOperatorEvent';

export type TField =
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
  | 'operatorEvents'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TClusterEvents = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ClusterEvents';
  operatorEvents?: TMayBe<TMayBe<TOperatorEvent>[]>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
};

export default TClusterEvents;
