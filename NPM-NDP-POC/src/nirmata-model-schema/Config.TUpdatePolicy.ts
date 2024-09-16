/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'action'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'configUpdateAction'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'quietPeriod'
  | 'restartInterval'
  | 'service'
  | 'uri';

export type TUpdatePolicy_Action = 'notify' | 'add' | 'update';

export type TUpdatePolicy_ConfigUpdateAction = 'notify' | 'update';

type TUpdatePolicy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  action?: TMayBe<TUpdatePolicy_Action>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  configUpdateAction?: TMayBe<TUpdatePolicy_ConfigUpdateAction>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'UpdatePolicy';
  parent?: TMayBe<TModelBase>;
  quietPeriod?: TMayBe<number>;
  restartInterval?: TMayBe<number>;
  service?: 'config';
};

export default TUpdatePolicy;
