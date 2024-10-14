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
  | 'id'
  | 'instanceStates'
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

export type TDesiredServiceAction_ActionType = 'delete' | 'promote' | 'redeploy' | 'update' | 'rollback';

export type TDesiredServiceAction_Status = 'created' | 'inProgress' | 'completed' | 'pending' | 'failed';

type TDesiredServiceAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  actionType?: TMayBe<TDesiredServiceAction_ActionType>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  attributes?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  endTime?: TMayBe<number>;
  instanceStates?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'DesiredServiceAction';
  parent?: TMayBe<TModelBase>;
  reason?: TMayBe<string>;
  service?: 'config';
  startTime?: TMayBe<number>;
  status?: TMayBe<TDesiredServiceAction_Status>;
};

export default TDesiredServiceAction;
