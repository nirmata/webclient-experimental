/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'counts'
  | 'createdBy'
  | 'createdOn'
  | 'currentVersion'
  | 'errorInfo'
  | 'helmStatus'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'nextVersion'
  | 'parent'
  | 'parent'
  | 'releaseState'
  | 'resourceChanges'
  | 'rolloutId'
  | 'sequenceId'
  | 'service'
  | 'uri';

export type TReleaseStatus_ReleaseState = 'pending' | 'completed' | 'failed';

type TReleaseStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  counts?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  currentVersion?: TMayBe<string>;
  errorInfo?: TMayBe<string>;
  helmStatus?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ReleaseStatus';
  name?: TMayBe<string>;
  nextVersion?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  releaseState?: TMayBe<TReleaseStatus_ReleaseState>;
  resourceChanges?: TMayBe<object>;
  rolloutId?: TMayBe<TModelBase>;
  sequenceId?: TMayBe<string>;
  service?: 'environments';
};

export default TReleaseStatus;
