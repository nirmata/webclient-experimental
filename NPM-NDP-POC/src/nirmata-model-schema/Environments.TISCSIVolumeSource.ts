/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TLocalObjectReference from './Environments.TLocalObjectReference';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'chapAuthDiscovery'
  | 'chapAuthSession'
  | 'createdBy'
  | 'createdOn'
  | 'fsType'
  | 'id'
  | 'initiatorName'
  | 'iqn'
  | 'iscsiInterface'
  | 'labels'
  | 'lun'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'portals'
  | 'readOnly'
  | 'secretRef'
  | 'service'
  | 'targetPortal'
  | 'uri';

type TISCSIVolumeSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  chapAuthDiscovery?: TMayBe<boolean>;
  chapAuthSession?: TMayBe<boolean>;
  fsType?: TMayBe<string>;
  initiatorName?: TMayBe<string>;
  iqn?: TMayBe<string>;
  iscsiInterface?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lun?: TMayBe<number>;
  modelIndex?: 'ISCSIVolumeSource';
  parent?: TMayBe<TModelBase>;
  portals?: TMayBe<TMayBe<string>[]>;
  readOnly?: TMayBe<boolean>;
  secretRef?: TMayBe<TMayBe<TLocalObjectReference>[]>;
  service?: 'environments';
  targetPortal?: TMayBe<string>;
};

export default TISCSIVolumeSource;
