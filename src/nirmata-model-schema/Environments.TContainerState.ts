/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TContainerStateRunning from './Environments.TContainerStateRunning';
import TContainerStateTerminated from './Environments.TContainerStateTerminated';
import TContainerStateWaiting from './Environments.TContainerStateWaiting';

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
  | 'running'
  | 'service'
  | 'terminated'
  | 'uri'
  | 'waiting';

type TContainerState = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ContainerState';
  parent?: TMayBe<TModelBase>;
  running?: TMayBe<TMayBe<TContainerStateRunning>[]>;
  service?: 'environments';
  terminated?: TMayBe<TMayBe<TContainerStateTerminated>[]>;
  waiting?: TMayBe<TMayBe<TContainerStateWaiting>[]>;
};

export default TContainerState;
