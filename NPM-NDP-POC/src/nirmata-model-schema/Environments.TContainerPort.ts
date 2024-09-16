/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'containerPort'
  | 'createdBy'
  | 'createdOn'
  | 'hostIP'
  | 'hostPort'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'protocol'
  | 'service'
  | 'uri';

export type TContainerPort_Protocol = 'UDP' | 'TCP' | 'SCTP';

type TContainerPort = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  containerPort?: TMayBe<number>;
  hostIP?: TMayBe<string>;
  hostPort?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ContainerPort';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  protocol?: TMayBe<TContainerPort_Protocol>;
  service?: 'environments';
};

export default TContainerPort;
