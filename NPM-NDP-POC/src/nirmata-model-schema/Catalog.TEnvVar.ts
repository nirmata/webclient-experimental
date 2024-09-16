/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TEnvVarSource from './Catalog.TEnvVarSource';

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
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri'
  | 'value'
  | 'valueFrom';

type TEnvVar = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'EnvVar';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
  value?: TMayBe<string>;
  valueFrom?: TMayBe<TMayBe<TEnvVarSource>[]>;
};

export default TEnvVar;
