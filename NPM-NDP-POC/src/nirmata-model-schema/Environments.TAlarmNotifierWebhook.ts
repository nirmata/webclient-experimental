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
  | 'httpHeaders'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'password'
  | 'service'
  | 'uri'
  | 'user'
  | 'webAddress';

type TAlarmNotifierWebhook = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  httpHeaders?: TMayBe<Record<string, TMayBe<string>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AlarmNotifierWebhook';
  parent?: TMayBe<TModelBase>;
  password?: TMayBe<string>;
  service?: 'environments';
  user?: TMayBe<string>;
  webAddress?: TMayBe<string>;
};

export default TAlarmNotifierWebhook;
