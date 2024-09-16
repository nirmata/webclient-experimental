/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'containerPort'
  | 'createdBy'
  | 'createdOn'
  | 'enableServiceNetworking'
  | 'healthCheck'
  | 'hostPort'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'routeInstanceStatuses'
  | 'service'
  | 'type'
  | 'uri';

export type TServicePort_Type = 'HTTP' | 'HTTPS' | 'TCP' | 'UDP';

type TServicePort = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  containerPort?: TMayBe<number>;
  enableServiceNetworking?: TMayBe<boolean>;
  hostPort?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ServicePort';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  type?: TMayBe<TServicePort_Type>;
};

export default TServicePort;
