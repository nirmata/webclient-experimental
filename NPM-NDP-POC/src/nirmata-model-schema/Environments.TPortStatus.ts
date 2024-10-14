/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'error'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'port'
  | 'protocol'
  | 'service'
  | 'uri';

export type TPortStatus_Protocol = 'UDP' | 'TCP' | 'SCTP';

type TPortStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  error?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PortStatus';
  parent?: TMayBe<TModelBase>;
  port?: TMayBe<number>;
  protocol?: TMayBe<TPortStatus_Protocol>;
  service?: 'environments';
};

export default TPortStatus;
