/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

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
  | 'labels'
  | 'lastCommitInfo'
  | 'lastGitSyncError'
  | 'lastGitSyncStatus'
  | 'lastGitSyncTime'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'repository'
  | 'service'
  | 'uri';

export type TGitUpstream_LastGitSyncStatus = 'success' | 'failed';

type TGitUpstream = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  branch?: TMayBe<string>;
  directoryList?: TMayBe<TMayBe<string>[]>;
  excludeList?: TMayBe<TMayBe<string>[]>;
  gitCredential?: TMayBe<TModelBase>;
  includeList?: TMayBe<TMayBe<string>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastCommitInfo?: TMayBe<Record<string, TMayBe<string>>>;
  lastGitSyncError?: TMayBe<string>;
  lastGitSyncStatus?: TMayBe<TGitUpstream_LastGitSyncStatus>;
  lastGitSyncTime?: TMayBe<number>;
  modelIndex?: 'GitUpstream';
  parent?: TMayBe<TModelBase>;
  repository?: TMayBe<string>;
  service?: 'cluster';
};

export default TGitUpstream;
