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
  | 'endTime'
  | 'hostStates'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'reason'
  | 'service'
  | 'startTime'
  | 'status'
  | 'uri';

export type THostGroupAction_ActionType = 'scaleUp' | 'scaleDown';

export type THostGroupAction_Status = 'created' | 'inProgress' | 'completed' | 'pending' | 'failed';

type THostGroupAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  actionType?: TMayBe<THostGroupAction_ActionType>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  attributes?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  endTime?: TMayBe<number>;
  hostStates?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'HostGroupAction';
  parent?: TMayBe<TModelBase>;
  reason?: TMayBe<string>;
  service?: 'config';
  startTime?: TMayBe<number>;
  status?: TMayBe<THostGroupAction_Status>;
};

export default THostGroupAction;
