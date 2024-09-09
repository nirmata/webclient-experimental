/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TKeyToPath from './Catalog.TKeyToPath';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'defaultMode'
  | 'id'
  | 'items'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'optional'
  | 'parent'
  | 'parent'
  | 'secretName'
  | 'service'
  | 'uri';

type TSecretVolumeSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  defaultMode?: TMayBe<string>;
  items?: TMayBe<TMayBe<TKeyToPath>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'SecretVolumeSource';
  optional?: TMayBe<boolean>;
  parent?: TMayBe<TModelBase>;
  secretName?: TMayBe<string>;
  service?: 'catalog';
};

export default TSecretVolumeSource;
