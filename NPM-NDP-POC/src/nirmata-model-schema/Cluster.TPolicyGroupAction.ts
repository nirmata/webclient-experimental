/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'failureReason'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'progress'
  | 'service'
  | 'state'
  | 'type'
  | 'uri';

export type TPolicyGroupAction_State = 'pending' | 'inProgress' | 'completed' | 'failed';

export type TPolicyGroupAction_Type = 'migrate';

type TPolicyGroupAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  failureReason?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PolicyGroupAction';
  parent?: TMayBe<TModelBase>;
  progress?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  service?: 'cluster';
  state?: TMayBe<TPolicyGroupAction_State>;
  type?: TMayBe<TPolicyGroupAction_Type>;
};

export default TPolicyGroupAction;
