/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'fsType'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'storagePolicyID'
  | 'storagePolicyName'
  | 'uri'
  | 'volumePath';

type TVsphereVirtualDiskVolumeSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  fsType?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'VsphereVirtualDiskVolumeSource';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  storagePolicyID?: TMayBe<string>;
  storagePolicyName?: TMayBe<string>;
  volumePath?: TMayBe<string>;
};

export default TVsphereVirtualDiskVolumeSource;
