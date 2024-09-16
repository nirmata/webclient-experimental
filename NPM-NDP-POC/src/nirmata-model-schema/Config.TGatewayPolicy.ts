/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TGatewayRule from './Config.TGatewayRule';

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
  | 'redirectHttp'
  | 'rules'
  | 'service'
  | 'uri';

type TGatewayPolicy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'GatewayPolicy';
  parent?: TMayBe<TModelBase>;
  redirectHttp?: TMayBe<boolean>;
  rules?: TMayBe<TMayBe<TGatewayRule>[]>;
  service?: 'config';
};

export default TGatewayPolicy;
