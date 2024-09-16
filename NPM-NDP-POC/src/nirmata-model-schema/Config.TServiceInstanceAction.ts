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
  | 'containerStates'
  | 'createdBy'
  | 'createdOn'
  | 'endTime'
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

export type TServiceInstanceAction_ActionType = 'start' | 'stop' | 'delete' | 'restart' | 'redeploy' | 'update';

export type TServiceInstanceAction_Status = 'created' | 'inProgress' | 'completed' | 'pending' | 'failed';

type TServiceInstanceAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  actionType?: TMayBe<TServiceInstanceAction_ActionType>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  attributes?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  containerStates?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  endTime?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ServiceInstanceAction';
  parent?: TMayBe<TModelBase>;
  reason?: TMayBe<string>;
  service?: 'config';
  startTime?: TMayBe<number>;
  status?: TMayBe<TServiceInstanceAction_Status>;
};

export default TServiceInstanceAction;
