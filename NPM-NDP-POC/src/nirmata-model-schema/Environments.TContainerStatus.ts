/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TContainerStateData from './Environments.TContainerStateData';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'containerID'
  | 'createdBy'
  | 'createdOn'
  | 'currentState'
  | 'id'
  | 'image'
  | 'imageID'
  | 'isFailed'
  | 'labels'
  | 'lastRestart'
  | 'lastState'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'ready'
  | 'restartCount'
  | 'service'
  | 'state'
  | 'stateMessage'
  | 'stateReason'
  | 'uri';

export type TContainerStatus_CurrentState = 'running' | 'waiting' | 'terminated';

type TContainerStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  containerID?: TMayBe<string>;
  currentState?: TMayBe<TContainerStatus_CurrentState>;
  image?: TMayBe<string>;
  imageID?: TMayBe<string>;
  isFailed?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastRestart?: TMayBe<number>;
  lastState?: TMayBe<TMayBe<TContainerStateData>>;
  modelIndex?: 'ContainerStatus';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  ready?: TMayBe<boolean>;
  restartCount?: TMayBe<number>;
  service?: 'environments';
  state?: TMayBe<TMayBe<TContainerStateData>>;
  stateMessage?: TMayBe<string>;
  stateReason?: TMayBe<string>;
};

export default TContainerStatus;
