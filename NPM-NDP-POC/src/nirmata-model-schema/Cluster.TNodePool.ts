/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TDcNode from './Cluster.TDcNode';
import TNodePoolStats from './Cluster.TNodePoolStats';
import TNodePoolSpec from './Cluster.TNodePoolSpec';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'dcNodes'
  | 'enableAutoScaling'
  | 'id'
  | 'labels'
  | 'maxCount'
  | 'minCount'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'nodeCount'
  | 'nodes'
  | 'parent'
  | 'parent'
  | 'service'
  | 'spec'
  | 'state'
  | 'stats'
  | 'status'
  | 'tags'
  | 'typeSelector'
  | 'uri';

export type TNodePool_State =
  | 'connected'
  | 'notConnected'
  | 'deleting'
  | 'active'
  | 'pendingCreate'
  | 'failed'
  | 'stopped'
  | 'updating';

type TNodePool = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  dcNodes?: TMayBe<TMayBe<TDcNode>[]>;
  enableAutoScaling?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  maxCount?: TMayBe<number>;
  minCount?: TMayBe<number>;
  modelIndex?: 'NodePool';
  name?: TMayBe<string>;
  nodeCount?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  spec?: TMayBe<TMayBe<TNodePoolSpec>[]>;
  state?: TMayBe<TNodePool_State>;
  stats?: TMayBe<TMayBe<TNodePoolStats>[]>;
  status?: TMayBe<TMayBe<string>[]>;
  tags?: TMayBe<Record<string, TMayBe<string>>>;
  typeSelector?: TMayBe<string>;
};

export default TNodePool;
