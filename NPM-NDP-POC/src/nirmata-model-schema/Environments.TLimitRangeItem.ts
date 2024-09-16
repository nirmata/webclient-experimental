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
  | 'defaultLimit'
  | 'defaultRequest'
  | 'id'
  | 'labels'
  | 'max'
  | 'maxLimitRequestRatio'
  | 'min'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'type'
  | 'uri';

export type TLimitRangeItem_Type = 'Container' | 'Pod' | 'PersistentVolumeClaim';

type TLimitRangeItem = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  defaultLimit?: TMayBe<Record<string, TMayBe<string>>>;
  defaultRequest?: TMayBe<Record<string, TMayBe<string>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  max?: TMayBe<Record<string, TMayBe<string>>>;
  maxLimitRequestRatio?: TMayBe<Record<string, TMayBe<string>>>;
  min?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'LimitRangeItem';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  type?: TMayBe<TLimitRangeItem_Type>;
};

export default TLimitRangeItem;
