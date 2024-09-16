/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

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
  | 'openAPIV3Schema'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TCustomResourceValidation = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CustomResourceValidation';
  openAPIV3Schema?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
};

export default TCustomResourceValidation;
