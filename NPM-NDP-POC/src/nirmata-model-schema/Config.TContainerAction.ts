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

export type TContainerAction_ActionType = 'delete';

export type TContainerAction_Status = 'created' | 'inProgress' | 'completed' | 'pending' | 'failed';

type TContainerAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  actionType?: TMayBe<TContainerAction_ActionType>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  attributes?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ContainerAction';
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  status?: TMayBe<TContainerAction_Status>;
};

export default TContainerAction;
