/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import THTTPHeader from './Environments.THTTPHeader';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'host'
  | 'httpHeaders'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'path'
  | 'port'
  | 'scheme'
  | 'service'
  | 'uri';

type THTTPGetAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  host?: TMayBe<string>;
  httpHeaders?: TMayBe<TMayBe<THTTPHeader>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'HTTPGetAction';
  parent?: TMayBe<TModelBase>;
  path?: TMayBe<string>;
  port?: TMayBe<number | string>;
  scheme?: TMayBe<string>;
  service?: 'environments';
};

export default THTTPGetAction;
