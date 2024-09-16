/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TDaemonEndpoint from './Cluster.TDaemonEndpoint';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kubeletEndpoint'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TNodeDaemonEndpoints = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  kubeletEndpoint?: TMayBe<TMayBe<TDaemonEndpoint>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NodeDaemonEndpoints';
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
};

export default TNodeDaemonEndpoints;
