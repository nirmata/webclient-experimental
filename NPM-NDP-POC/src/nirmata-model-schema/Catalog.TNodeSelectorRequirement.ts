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

export type TNodeSelectorRequirement_Operator = 'In' | 'NotIn' | 'Exists' | 'DoesNotExist' | 'Gt' | 'Lt';

type TNodeSelectorRequirement = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  key?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NodeSelectorRequirement';
  operator?: TMayBe<TNodeSelectorRequirement_Operator>;
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
  values?: TMayBe<TMayBe<string>[]>;
};

export default TNodeSelectorRequirement;
