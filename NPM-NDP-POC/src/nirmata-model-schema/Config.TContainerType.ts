/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cpuShares'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'id'
  | 'labels'
  | 'memory'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'resourceSelectionRules'
  | 'service'
  | 'services'
  | 'uri';

type TContainerType = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cpuShares?: TMayBe<number>;
  description?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memory?: TMayBe<number>;
  modelIndex?: 'ContainerType';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'config';
};

export default TContainerType;
