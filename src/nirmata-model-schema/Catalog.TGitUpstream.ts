/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'branch'
  | 'createdBy'
  | 'createdOn'
  | 'directoryList'
  | 'excludeList'
  | 'gitCredential'
  | 'id'
  | 'includeList'
  | 'isSynchronized'
  | 'labels'
  | 'lastAppliedCommitInfo'
  | 'lastCommit'
  | 'lastCommitInfo'
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
  | 'repositoryEdited'
  | 'sequenceId'
  | 'service'
  | 'state'
  | 'uri'
  | 'webhookOn';

export type TGitUpstream_LastGitSyncStatus = 'success' | 'failed';

export type TGitUpstream_State = 'unknown';

type TGitUpstream = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  branch?: TMayBe<string>;
  directoryList?: TMayBe<TMayBe<string>[]>;
  excludeList?: TMayBe<TMayBe<string>[]>;
  gitCredential?: TMayBe<TModelBase>;
  includeList?: TMayBe<TMayBe<string>[]>;
  isSynchronized?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastAppliedCommitInfo?: TMayBe<Record<string, TMayBe<string>>>;
  lastCommit?: TMayBe<string>;
  lastCommitInfo?: TMayBe<Record<string, TMayBe<string>>>;
  lastGitSyncError?: TMayBe<string>;
  lastGitSyncStatus?: TMayBe<TGitUpstream_LastGitSyncStatus>;
  lastGitSyncTime?: TMayBe<number>;
  lastSync?: TMayBe<number>;
  modelIndex?: 'GitUpstream';
  parent?: TMayBe<TModelBase>;
  repository?: TMayBe<string>;
  repositoryEdited?: TMayBe<boolean>;
  sequenceId?: TMayBe<string>;
  service?: 'catalog';
  state?: TMayBe<TGitUpstream_State>;
  webhookOn?: TMayBe<boolean>;
};

export default TGitUpstream;
