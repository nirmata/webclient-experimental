/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TClusterSpec from './Cluster.TClusterSpec';
import TAccessControlList from './Cluster.TAccessControlList';

export type TField =
  | 'accessControlList'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'id'
  | 'kyvernoConfigSelector'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'spec'
  | 'uri';

type TClusterType = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  description?: TMayBe<string>;
  kyvernoConfigSelector?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ClusterType';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  spec?: TMayBe<TMayBe<TClusterSpec>[]>;
};

export default TClusterType;
