/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TTargets from './Catalog.TTargets';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'allClusters'
  | 'ancestors'
  | 'channel'
  | 'clusterIds'
  | 'clusterSelector'
  | 'createdBy'
  | 'createdOn'
  | 'endTime'
  | 'envIds'
  | 'environmentsSelector'
  | 'errorInfo'
  | 'failureAction'
  | 'failureThreshold'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'runName'
  | 'service'
  | 'startTime'
  | 'state'
  | 'targetStates'
  | 'targets'
  | 'uri'
  | 'userId';

export type TRollout_FailureAction = 'continueOnFailure' | 'abortOnFailure' | 'rollbackOnFailure';

export type TRollout_State =
  | 'pending'
  | 'executing'
  | 'completed'
  | 'failed'
  | 'aborted'
  | 'paused'
  | 'resumed'
  | 'cancelled';

type TRollout = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  allClusters?: TMayBe<boolean>;
  channel?: TMayBe<TModelBase>;
  clusterIds?: TMayBe<TMayBe<TModelBase>[]>;
  clusterSelector?: TMayBe<Record<string, string>>;
  endTime?: TMayBe<number>;
  envIds?: TMayBe<TMayBe<TModelBase>[]>;
  environmentsSelector?: TMayBe<Record<string, string>>;
  errorInfo?: TMayBe<string>;
  failureAction?: TMayBe<TRollout_FailureAction>;
  failureThreshold?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Rollout';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  runName?: TMayBe<string>;
  service?: 'catalog';
  startTime?: TMayBe<number>;
  state?: TMayBe<TRollout_State>;
  targetStates?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  targets?: TMayBe<TMayBe<TTargets>[]>;
  userId?: TMayBe<string>;
};

export default TRollout;
