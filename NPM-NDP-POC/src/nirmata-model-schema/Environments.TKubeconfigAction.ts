/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'failureReason'
  | 'id'
  | 'labels'
  | 'metadata'
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

export type TKubeconfigAction_State = 'pending' | 'inProgress' | 'completed' | 'failed';

export type TKubeconfigAction_Type = 'revoke';

type TKubeconfigAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  failureReason?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  modelIndex?: 'KubeconfigAction';
  parent?: TMayBe<TModelBase>;
  progress?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  service?: 'environments';
  state?: TMayBe<TKubeconfigAction_State>;
  type?: TMayBe<TKubeconfigAction_Type>;
};

export default TKubeconfigAction;
