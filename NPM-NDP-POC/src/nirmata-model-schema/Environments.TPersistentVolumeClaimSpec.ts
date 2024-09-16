/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TResourceRequirements from './Environments.TResourceRequirements';

export type TField =
  | 'accessModes'
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
  | 'parent'
  | 'parent'
  | 'resources'
  | 'selector'
  | 'service'
  | 'storageClassName'
  | 'uri'
  | 'volumeMode'
  | 'volumeName';

type TPersistentVolumeClaimSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessModes?: TMayBe<TMayBe<string>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PersistentVolumeClaimSpec';
  parent?: TMayBe<TModelBase>;
  resources?: TMayBe<TMayBe<TResourceRequirements>[]>;
  selector?: TMayBe<Record<string, string>>;
  service?: 'environments';
  storageClassName?: TMayBe<string>;
  volumeMode?: TMayBe<string>;
  volumeName?: TMayBe<string>;
};

export default TPersistentVolumeClaimSpec;
