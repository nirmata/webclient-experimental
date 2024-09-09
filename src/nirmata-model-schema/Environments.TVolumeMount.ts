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
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'mountPath'
  | 'name'
  | 'parent'
  | 'parent'
  | 'persistentVolume'
  | 'persistentVolumeClaim'
  | 'readOnly'
  | 'service'
  | 'subPath'
  | 'uri';

type TVolumeMount = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'VolumeMount';
  mountPath?: TMayBe<string>;
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  readOnly?: TMayBe<boolean>;
  service?: 'environments';
  subPath?: TMayBe<string>;
};

export default TVolumeMount;
