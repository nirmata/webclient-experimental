/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiGroups'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'resourceNames'
  | 'resources'
  | 'service'
  | 'uri'
  | 'verbs';

type TPolicyRule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiGroups?: TMayBe<TMayBe<string>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PolicyRule';
  parent?: TMayBe<TModelBase>;
  resourceNames?: TMayBe<TMayBe<string>[]>;
  resources?: TMayBe<TMayBe<string>[]>;
  service?: 'environments';
  verbs?: TMayBe<TMayBe<string>[]>;
};

export default TPolicyRule;
