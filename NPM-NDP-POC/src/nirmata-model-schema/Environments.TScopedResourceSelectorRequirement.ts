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
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'operator'
  | 'parent'
  | 'parent'
  | 'scopeName'
  | 'service'
  | 'uri'
  | 'values';

export type TScopedResourceSelectorRequirement_Operator = 'In' | 'NotIn' | 'Exists' | 'DoesNotExist';

type TScopedResourceSelectorRequirement = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ScopedResourceSelectorRequirement';
  operator?: TMayBe<TScopedResourceSelectorRequirement_Operator>;
  parent?: TMayBe<TModelBase>;
  scopeName?: TMayBe<string>;
  service?: 'environments';
  values?: TMayBe<TMayBe<string>[]>;
};

export default TScopedResourceSelectorRequirement;
