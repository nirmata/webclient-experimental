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
  | 'limits'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'requests'
  | 'service'
  | 'uri';

type TResourceRequirements = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  limits?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ResourceRequirements';
  parent?: TMayBe<TModelBase>;
  requests?: TMayBe<Record<string, TMayBe<string>>>;
  service?: 'environments';
};

export default TResourceRequirements;
