/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TLimitRangeItem from './Catalog.TLimitRangeItem';

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
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TLimitRangeSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  items?: TMayBe<TMayBe<TLimitRangeItem>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'LimitRangeSpec';
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
};

export default TLimitRangeSpec;
