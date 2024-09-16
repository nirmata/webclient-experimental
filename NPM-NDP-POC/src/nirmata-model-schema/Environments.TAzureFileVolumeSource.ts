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
  | 'parent'
  | 'parent'
  | 'readOnly'
  | 'secretName'
  | 'service'
  | 'shareName'
  | 'uri';

type TAzureFileVolumeSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AzureFileVolumeSource';
  parent?: TMayBe<TModelBase>;
  readOnly?: TMayBe<boolean>;
  secretName?: TMayBe<string>;
  service?: 'environments';
  shareName?: TMayBe<string>;
};

export default TAzureFileVolumeSource;
