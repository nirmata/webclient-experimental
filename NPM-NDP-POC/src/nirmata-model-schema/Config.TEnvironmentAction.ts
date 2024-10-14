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
  | 'clusterActionRef'
  | 'createdBy'
  | 'createdOn'
  | 'desiredServiceStates'
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

export type TEnvironmentAction_ActionType = 'delete' | 'redeploy' | 'update' | 'updateCluster';

export type TEnvironmentAction_Status = 'created' | 'inProgress' | 'completed' | 'pending' | 'failed';

type TEnvironmentAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  actionType?: TMayBe<TEnvironmentAction_ActionType>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  attributes?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  clusterActionRef?: TMayBe<string>;
  desiredServiceStates?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  endTime?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'EnvironmentAction';
  parent?: TMayBe<TModelBase>;
  reason?: TMayBe<string>;
  service?: 'config';
  startTime?: TMayBe<number>;
  status?: TMayBe<TEnvironmentAction_Status>;
};

export default TEnvironmentAction;
