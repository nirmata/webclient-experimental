/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'enabled'
  | 'events'
  | 'id'
  | 'labels'
  | 'lastState'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'secret'
  | 'service'
  | 'uri'
  | 'url';

type TWebHook = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  enabled?: TMayBe<boolean>;
  events?: TMayBe<TMayBe<string>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastState?: TMayBe<string>;
  modelIndex?: 'WebHook';
  parent?: TMayBe<TModelBase>;
  secret?: TMayBe<string>;
  service?: 'config';
  url?: TMayBe<string>;
};

export default TWebHook;
