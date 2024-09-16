/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'actionType'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'attributes'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'status'
  | 'uri';

export type THostAction_ActionType = 'enable' | 'disable' | 'delete' | 'terminate';

export type THostAction_Status = 'created' | 'inProgress' | 'completed' | 'pending' | 'failed';

type THostAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  actionType?: TMayBe<THostAction_ActionType>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  attributes?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'HostAction';
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  status?: TMayBe<THostAction_Status>;
};

export default THostAction;
