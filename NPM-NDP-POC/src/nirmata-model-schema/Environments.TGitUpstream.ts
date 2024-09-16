/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'branch'
  | 'createdBy'
  | 'createdOn'
  | 'credential'
  | 'directoryList'
  | 'excludeList'
  | 'id'
  | 'includeList'
  | 'isSynchronized'
  | 'labels'
  | 'lastAppliedCommitInfo'
  | 'lastCommit'
  | 'lastCommitAppliedError'
  | 'lastCommitAppliedStatus'
  | 'lastCommitAppliedTime'
  | 'lastCommitInfo'
  | 'lastCommitValidationError'
  | 'lastCommitValidationStatus'
  | 'lastCommitValidationTime'
  | 'lastGitSyncError'
  | 'lastGitSyncStatus'
  | 'lastGitSyncTime'
  | 'lastSync'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'repository'
  | 'sequenceId'
  | 'service'
  | 'state'
  | 'uri'
  | 'webhookOn';

export type TGitUpstream_LastCommitAppliedStatus = 'applied' | 'pending' | 'failed';

export type TGitUpstream_LastCommitValidationStatus = 'success' | 'failed';

export type TGitUpstream_LastGitSyncStatus = 'success' | 'failed';

export type TGitUpstream_State = 'unknown';

type TGitUpstream = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  branch?: TMayBe<string>;
  credential?: TMayBe<TModelBase>;
  directoryList?: TMayBe<TMayBe<string>[]>;
  excludeList?: TMayBe<TMayBe<string>[]>;
  includeList?: TMayBe<TMayBe<string>[]>;
  isSynchronized?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastAppliedCommitInfo?: TMayBe<Record<string, TMayBe<string>>>;
  lastCommit?: TMayBe<string>;
  lastCommitAppliedError?: TMayBe<string>;
  lastCommitAppliedStatus?: TMayBe<TGitUpstream_LastCommitAppliedStatus>;
  lastCommitAppliedTime?: TMayBe<number>;
  lastCommitInfo?: TMayBe<Record<string, TMayBe<string>>>;
  lastCommitValidationError?: TMayBe<string>;
  lastCommitValidationStatus?: TMayBe<TGitUpstream_LastCommitValidationStatus>;
  lastCommitValidationTime?: TMayBe<number>;
  lastGitSyncError?: TMayBe<string>;
  lastGitSyncStatus?: TMayBe<TGitUpstream_LastGitSyncStatus>;
  lastGitSyncTime?: TMayBe<number>;
  lastSync?: TMayBe<number>;
  modelIndex?: 'GitUpstream';
  parent?: TMayBe<TModelBase>;
  repository?: TMayBe<string>;
  sequenceId?: TMayBe<string>;
  service?: 'environments';
  state?: TMayBe<TGitUpstream_State>;
  webhookOn?: TMayBe<boolean>;
};

export default TGitUpstream;
