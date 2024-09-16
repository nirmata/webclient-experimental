/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TRouteInstanceStatus from './Config.TRouteInstanceStatus';

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
  | 'currentActiveConnections'
  | 'currentAverageConnectionTime'
  | 'currentAverageResponseTime'
  | 'currentBytesIn'
  | 'currentBytesOut'
  | 'currentConnectionErrors'
  | 'currentTotalConnections'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'routesInstanceStatuses'
  | 'service'
  | 'state'
  | 'statsUpdateCount'
  | 'totalConnections'
  | 'uri';

export type TRouteStatus_State = 'up' | 'down' | 'degraded' | 'pendingData';

type TRouteStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  activeConnections?: TMayBe<number>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  averageConnectionTime?: TMayBe<number>;
  averageResponseTime?: TMayBe<number>;
  bytesIn?: TMayBe<number>;
  bytesOut?: TMayBe<number>;
  connectionErrors?: TMayBe<number>;
  currentActiveConnections?: TMayBe<number>;
  currentAverageConnectionTime?: TMayBe<number>;
  currentAverageResponseTime?: TMayBe<number>;
  currentBytesIn?: TMayBe<number>;
  currentBytesOut?: TMayBe<number>;
  currentConnectionErrors?: TMayBe<number>;
  currentTotalConnections?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'RouteStatus';
  parent?: TMayBe<TModelBase>;
  routesInstanceStatuses?: TMayBe<TMayBe<TRouteInstanceStatus>[]>;
  service?: 'config';
  state?: TMayBe<TRouteStatus_State>;
  statsUpdateCount?: TMayBe<number>;
  totalConnections?: TMayBe<number>;
};

export default TRouteStatus;
