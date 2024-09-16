/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'activeConnections'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'averageConnectionTime'
  | 'averageResponseTime'
  | 'bytesIn'
  | 'bytesOut'
  | 'connectionErrors'
  | 'createdBy'
  | 'createdOn'
  | 'gatewayId'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'port'
  | 'service'
  | 'state'
  | 'totalConnections'
  | 'uri';

export type TRouteInstanceStatus_State = 'up' | 'down' | 'degraded' | 'pendingData';

type TRouteInstanceStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  activeConnections?: TMayBe<number>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  averageConnectionTime?: TMayBe<number>;
  averageResponseTime?: TMayBe<number>;
  bytesIn?: TMayBe<number>;
  bytesOut?: TMayBe<number>;
  connectionErrors?: TMayBe<number>;
  gatewayId?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'RouteInstanceStatus';
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  state?: TMayBe<TRouteInstanceStatus_State>;
  totalConnections?: TMayBe<number>;
};

export default TRouteInstanceStatus;
