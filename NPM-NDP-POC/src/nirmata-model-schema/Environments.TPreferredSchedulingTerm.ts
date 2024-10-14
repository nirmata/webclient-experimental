/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TNodeSelectorTerm from './Environments.TNodeSelectorTerm';

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
  | 'preference'
  | 'service'
  | 'uri'
  | 'weight';

type TPreferredSchedulingTerm = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PreferredSchedulingTerm';
  parent?: TMayBe<TModelBase>;
  preference?: TMayBe<TMayBe<TNodeSelectorTerm>[]>;
  service?: 'environments';
  weight?: TMayBe<number>;
};

export default TPreferredSchedulingTerm;
