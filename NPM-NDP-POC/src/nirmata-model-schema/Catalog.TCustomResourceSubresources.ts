/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TCustomResourceSubresourceScale from './Catalog.TCustomResourceSubresourceScale';

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
  | 'scale'
  | 'service'
  | 'uri';

type TCustomResourceSubresources = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CustomResourceSubresources';
  parent?: TMayBe<TModelBase>;
  scale?: TMayBe<TMayBe<TCustomResourceSubresourceScale>[]>;
  service?: 'catalog';
};

export default TCustomResourceSubresources;
