/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'containerTypes'
  | 'createdBy'
  | 'createdOn'
  | 'environmentTypes'
  | 'hostGroups'
  | 'id'
  | 'labels'
  | 'minimum'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'placement'
  | 'rank'
  | 'service'
  | 'uri';

export type TResourceSelectionRule_Placement = 'availableMemory' | 'sequential';

type TResourceSelectionRule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  minimum?: TMayBe<number>;
  modelIndex?: 'ResourceSelectionRule';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  placement?: TMayBe<TResourceSelectionRule_Placement>;
  rank?: TMayBe<number>;
  service?: 'config';
};

export default TResourceSelectionRule;
