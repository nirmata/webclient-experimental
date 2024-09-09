/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TScopeSelector from './Catalog.TScopeSelector';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'hard'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'scopeSelector'
  | 'scopes'
  | 'service'
  | 'uri';

type TResourceQuotaSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  hard?: TMayBe<Record<string, TMayBe<string>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ResourceQuotaSpec';
  parent?: TMayBe<TModelBase>;
  scopeSelector?: TMayBe<TMayBe<TScopeSelector>[]>;
  scopes?: TMayBe<TMayBe<number>[]>;
  service?: 'catalog';
};

export default TResourceQuotaSpec;
