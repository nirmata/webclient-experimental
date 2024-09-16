/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TNodeEvent from './Cluster.TNodeEvent';
import TNodeStats from './Cluster.TNodeStats';
import TNodeSpec from './Cluster.TNodeSpec';
import TObjectMeta from './Cluster.TObjectMeta';
import TNodeStatus from './Cluster.TNodeStatus';

export type TField =
  | 'additionalProperties'
  | 'adminState'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'createdBy'
  | 'createdOn'
  | 'creationTime'
  | 'events'
  | 'hostRef'
  | 'id'
  | 'kind'
  | 'labels'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'nodePool'
  | 'nodeStats'
  | 'parent'
  | 'parent'
  | 'service'
  | 'spec'
  | 'state'
  | 'status'
  | 'uri';

export type TNode_AdminState = 'cordon' | 'uncordon';

export type TNode_State = 'ready' | 'notReady' | 'unknown' | 'disabled' | 'deleted';

type TNode = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  adminState?: TMayBe<TNode_AdminState>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  creationTime?: TMayBe<number>;
  events?: TMayBe<TMayBe<TNodeEvent>[]>;
  hostRef?: TMayBe<TModelBase>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'Node';
  name?: TMayBe<string>;
  nodeStats?: TMayBe<TMayBe<TNodeStats>[]>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  spec?: TMayBe<TMayBe<TNodeSpec>[]>;
  state?: TMayBe<TNode_State>;
  status?: TMayBe<TMayBe<TNodeStatus>[]>;
};

export default TNode;
