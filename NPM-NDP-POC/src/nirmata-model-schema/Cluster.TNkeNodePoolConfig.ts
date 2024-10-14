/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cpu'
  | 'createdBy'
  | 'createdOn'
  | 'disk'
  | 'id'
  | 'labels'
  | 'memory'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'networkUuid'
  | 'osVersion'
  | 'parent'
  | 'parent'
  | 'prismClusterUuid'
  | 'service'
  | 'uri';

type TNkeNodePoolConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cpu?: TMayBe<number>;
  disk?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memory?: TMayBe<number>;
  modelIndex?: 'NkeNodePoolConfig';
  networkUuid?: TMayBe<string>;
  osVersion?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  prismClusterUuid?: TMayBe<string>;
  service?: 'cluster';
};

export default TNkeNodePoolConfig;
