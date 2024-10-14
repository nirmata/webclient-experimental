/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'containerId'
  | 'containerStatusId'
  | 'createdBy'
  | 'createdOn'
  | 'expirationTime'
  | 'hostId'
  | 'id'
  | 'labels'
  | 'listeningToStream'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'properties'
  | 'service'
  | 'state'
  | 'streamUrl'
  | 'type'
  | 'uri';

export type TContainerDataStream_State = 'pending' | 'started' | 'failed' | 'expired' | 'completed';

export type TContainerDataStream_Type = 'logs' | 'stats' | 'console';

type TContainerDataStream = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  containerId?: TMayBe<string>;
  containerStatusId?: TMayBe<string>;
  expirationTime?: TMayBe<number>;
  hostId?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  listeningToStream?: TMayBe<boolean>;
  modelIndex?: 'ContainerDataStream';
  parent?: TMayBe<TModelBase>;
  properties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  service?: 'environments';
  state?: TMayBe<TContainerDataStream_State>;
  streamUrl?: TMayBe<string>;
  type?: TMayBe<TContainerDataStream_Type>;
};

export default TContainerDataStream;
