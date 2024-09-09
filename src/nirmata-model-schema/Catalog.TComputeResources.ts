/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'cpu'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'memory'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TComputeResources = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cpu?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  memory?: TMayBe<string>;
  modelIndex?: 'ComputeResources';
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
};

export default TComputeResources;
