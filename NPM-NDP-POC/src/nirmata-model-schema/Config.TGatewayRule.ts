/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TRouteStatus from './Config.TRouteStatus';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'route'
  | 'routeStatus'
  | 'service'
  | 'stickySessions'
  | 'targetUrl'
  | 'toPort'
  | 'toPortType'
  | 'toService'
  | 'toTag'
  | 'type'
  | 'uri';

export type TGatewayRule_ToPortType = 'HTTP' | 'HTTPS' | 'TCP' | 'UDP';

export type TGatewayRule_Type = 'urlRoute' | 'dnsRoute' | 'tcpRoute';

type TGatewayRule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'GatewayRule';
  parent?: TMayBe<TModelBase>;
  route?: TMayBe<string>;
  routeStatus?: TMayBe<TMayBe<TRouteStatus>[]>;
  service?: 'config';
  stickySessions?: TMayBe<boolean>;
  targetUrl?: TMayBe<string>;
  toPort?: TMayBe<number>;
  toPortType?: TMayBe<TGatewayRule_ToPortType>;
  toService?: TMayBe<string>;
  toTag?: TMayBe<string>;
  type?: TMayBe<TGatewayRule_Type>;
};

export default TGatewayRule;
