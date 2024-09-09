/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TGitUpstream from './Cluster.TGitUpstream';
import TWorkloadPolicy from './Cluster.TWorkloadPolicy';
import TPolicyGroupCluster from './Cluster.TPolicyGroupCluster';
import TVersion from './Cluster.TVersion';
import TPolicyGroupStatus from './Cluster.TPolicyGroupStatus';
import TRollout from './Cluster.TRollout';
import TKustomizeConfig from './Cluster.TKustomizeConfig';
import TCustomKyvernoPolicy from './Cluster.TCustomKyvernoPolicy';
import TPatchConfig from './Cluster.TPatchConfig';

export type TField =
  | 'MaxNumberOfVersion'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'autoDeployChanges'
  | 'availableVersions'
  | 'catalogApp'
  | 'clusterSelector'
  | 'clusters'
  | 'createdBy'
  | 'createdOn'
  | 'currentVersion'
  | 'customPolicies'
  | 'deletedPolicies'
  | 'gitUpstream'
  | 'id'
  | 'isDefault'
  | 'isLatestVersionAvailable'
  | 'isPolicyModified'
  | 'kustomizeConfig'
  | 'labels'
  | 'lastRollout'
  | 'migrationRequired'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'modifiedPolicies'
  | 'name'
  | 'parent'
  | 'parent'
  | 'patchConfig'
  | 'policies'
  | 'service'
  | 'status'
  | 'type'
  | 'uri';

export type TPolicyGroup_Type = 'git' | 'customPolicy';

type TPolicyGroup = Omit<TModelBase, 'service' | 'modelIndex'> & {
  MaxNumberOfVersion?: TMayBe<number>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  autoDeployChanges?: TMayBe<boolean>;
  availableVersions?: TMayBe<TMayBe<TVersion>[]>;
  catalogApp?: TMayBe<TModelBase>;
  clusterSelector?: TMayBe<Record<string, string>>;
  clusters?: TMayBe<TMayBe<TPolicyGroupCluster>[]>;
  currentVersion?: TMayBe<TModelBase>;
  customPolicies?: TMayBe<TMayBe<TCustomKyvernoPolicy>[]>;
  deletedPolicies?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  gitUpstream?: TMayBe<TMayBe<TGitUpstream>[]>;
  isDefault?: TMayBe<boolean>;
  isLatestVersionAvailable?: TMayBe<boolean>;
  isPolicyModified?: TMayBe<boolean>;
  kustomizeConfig?: TMayBe<TMayBe<TKustomizeConfig>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastRollout?: TMayBe<TMayBe<TRollout>[]>;
  migrationRequired?: TMayBe<boolean>;
  modelIndex?: 'PolicyGroup';
  modifiedPolicies?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  patchConfig?: TMayBe<TMayBe<TPatchConfig>[]>;
  policies?: TMayBe<TMayBe<TWorkloadPolicy>[]>;
  service?: 'cluster';
  status?: TMayBe<TMayBe<TPolicyGroupStatus>[]>;
  type?: TMayBe<TPolicyGroup_Type>;
};

export default TPolicyGroup;
