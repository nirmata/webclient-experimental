/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TNodeSelectorTerm from './Catalog.TNodeSelectorTerm';

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
  | 'nodeSelectorTerms'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TNodeSelector = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NodeSelector';
  nodeSelectorTerms?: TMayBe<TMayBe<TNodeSelectorTerm>[]>;
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
};

export default TNodeSelector;
