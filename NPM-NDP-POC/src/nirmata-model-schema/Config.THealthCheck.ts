/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'checkInterval'
  | 'checkTimeout'
  | 'createdBy'
  | 'createdOn'
  | 'endpoint'
  | 'failureThreshold'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'path'
  | 'service'
  | 'startDelay'
  | 'successThreshold'
  | 'type'
  | 'uri';

export type THealthCheck_Type = 'NONE' | 'TCP' | 'HTTP' | 'HTTPS';

type THealthCheck = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  checkInterval?: TMayBe<number>;
  checkTimeout?: TMayBe<number>;
  failureThreshold?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'HealthCheck';
  parent?: TMayBe<TModelBase>;
  path?: TMayBe<string>;
  service?: 'config';
  startDelay?: TMayBe<number>;
  successThreshold?: TMayBe<number>;
  type?: TMayBe<THealthCheck_Type>;
};

export default THealthCheck;
