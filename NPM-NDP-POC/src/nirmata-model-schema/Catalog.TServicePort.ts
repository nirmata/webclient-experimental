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
  | 'nodePort'
  | 'parent'
  | 'parent'
  | 'port'
  | 'protocol'
  | 'service'
  | 'targetPort'
  | 'uri';

export type TServicePort_Protocol = 'UDP' | 'TCP' | 'SCTP';

type TServicePort = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ServicePort';
  name?: TMayBe<string>;
  nodePort?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  port?: TMayBe<number>;
  protocol?: TMayBe<TServicePort_Protocol>;
  service?: 'catalog';
  targetPort?: TMayBe<number | string>;
};

export default TServicePort;
