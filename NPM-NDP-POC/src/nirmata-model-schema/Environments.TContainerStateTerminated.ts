/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'containerID'
  | 'createdBy'
  | 'createdOn'
  | 'exitCode'
  | 'finishedAt'
  | 'id'
  | 'labels'
  | 'message'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'reason'
  | 'service'
  | 'signal'
  | 'startedAt'
  | 'uri';

type TContainerStateTerminated = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  containerID?: TMayBe<string>;
  exitCode?: TMayBe<number>;
  finishedAt?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  message?: TMayBe<string>;
  modelIndex?: 'ContainerStateTerminated';
  parent?: TMayBe<TModelBase>;
  reason?: TMayBe<string>;
  service?: 'environments';
  signal?: TMayBe<number>;
  startedAt?: TMayBe<string>;
};

export default TContainerStateTerminated;
