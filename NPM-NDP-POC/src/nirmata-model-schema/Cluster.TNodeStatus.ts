/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TNodeCondition from './Cluster.TNodeCondition';
import TNodeAddress from './Cluster.TNodeAddress';
import TContainerImage from './Cluster.TContainerImage';
import TNodeSystemInfo from './Cluster.TNodeSystemInfo';
import TAttachedVolume from './Cluster.TAttachedVolume';
import TNodeDaemonEndpoints from './Cluster.TNodeDaemonEndpoints';

export type TField =
  | 'additionalProperties'
  | 'addresses'
  | 'alarms'
  | 'allocatable'
  | 'ancestors'
  | 'capacity'
  | 'conditions'
  | 'createdBy'
  | 'createdOn'
  | 'daemonEndpoints'
  | 'id'
  | 'images'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'nodeInfo'
  | 'parent'
  | 'parent'
  | 'phase'
  | 'service'
  | 'uri'
  | 'volumesAttached'
  | 'volumesInUse';

type TNodeStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  addresses?: TMayBe<TMayBe<TNodeAddress>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  allocatable?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  capacity?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  conditions?: TMayBe<TMayBe<TNodeCondition>[]>;
  daemonEndpoints?: TMayBe<TMayBe<TNodeDaemonEndpoints>[]>;
  images?: TMayBe<TMayBe<TContainerImage>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NodeStatus';
  nodeInfo?: TMayBe<TMayBe<TNodeSystemInfo>[]>;
  parent?: TMayBe<TModelBase>;
  phase?: TMayBe<string>;
  service?: 'cluster';
  volumesAttached?: TMayBe<TMayBe<TAttachedVolume>[]>;
  volumesInUse?: TMayBe<TMayBe<string>[]>;
};

export default TNodeStatus;
