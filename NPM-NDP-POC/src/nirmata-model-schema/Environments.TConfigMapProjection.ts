/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TKeyToPath from './Environments.TKeyToPath';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'items'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'optional'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TConfigMapProjection = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  items?: TMayBe<TMayBe<TKeyToPath>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ConfigMapProjection';
  name?: TMayBe<string>;
  optional?: TMayBe<boolean>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
};

export default TConfigMapProjection;
