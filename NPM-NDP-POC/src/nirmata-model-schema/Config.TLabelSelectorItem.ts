/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'key'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'operator'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri'
  | 'values';

export type TLabelSelectorItem_Operator = 'equals' | 'notEquals' | 'in' | 'notIn' | 'exists';

type TLabelSelectorItem = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  key?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'LabelSelectorItem';
  operator?: TMayBe<TLabelSelectorItem_Operator>;
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  values?: TMayBe<TMayBe<string>[]>;
};

export default TLabelSelectorItem;
