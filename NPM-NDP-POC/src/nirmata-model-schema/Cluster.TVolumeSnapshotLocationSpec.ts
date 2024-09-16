/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'config'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'provider'
  | 'service'
  | 'uri';

export type TVolumeSnapshotLocationSpec_Provider = 'aws' | 'azure' | 'gcp';

type TVolumeSnapshotLocationSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  config?: TMayBe<Record<string, TMayBe<string>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'VolumeSnapshotLocationSpec';
  parent?: TMayBe<TModelBase>;
  provider?: TMayBe<TVolumeSnapshotLocationSpec_Provider>;
  service?: 'cluster';
};

export default TVolumeSnapshotLocationSpec;
