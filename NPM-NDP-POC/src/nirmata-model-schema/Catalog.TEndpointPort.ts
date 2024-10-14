/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

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
  | 'name'
  | 'parent'
  | 'parent'
  | 'port'
  | 'protocol'
  | 'service'
  | 'uri';

export type TEndpointPort_Protocol = 'UDP' | 'TCP' | 'SCTP';

type TEndpointPort = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'EndpointPort';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  port?: TMayBe<number>;
  protocol?: TMayBe<TEndpointPort_Protocol>;
  service?: 'catalog';
};

export default TEndpointPort;
