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
  | 'createdBy'
  | 'createdOn'
  | 'driver'
  | 'fsType'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'options'
  | 'parent'
  | 'parent'
  | 'readOnly'
  | 'secretRef'
  | 'service'
  | 'uri';

type TFlexVolumeSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  driver?: TMayBe<string>;
  fsType?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'FlexVolumeSource';
  options?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  parent?: TMayBe<TModelBase>;
  readOnly?: TMayBe<boolean>;
  secretRef?: TMayBe<TMayBe<TLocalObjectReference>[]>;
  service?: 'environments';
};

export default TFlexVolumeSource;
