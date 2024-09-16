/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterRef'
  | 'createdBy'
  | 'createdOn'
  | 'deleteFromCluster'
  | 'deployedVersion'
  | 'deployedVersionId'
  | 'environmentApp'
  | 'id'
  | 'jsonPatches'
  | 'kustomizationState'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'policiesToDelete'
  | 'policyGroupType'
  | 'rolloutError'
  | 'rolloutState'
  | 'service'
  | 'uri';

export type TPolicyGroupCluster_KustomizationState = 'APPLIED' | 'AVAILABLE' | 'EXECUTING';

export type TPolicyGroupCluster_RolloutState = 'pending' | 'executing' | 'completed' | 'failed';

type TPolicyGroupCluster = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterRef?: TMayBe<TModelBase>;
  deleteFromCluster?: TMayBe<boolean>;
  deployedVersion?: TMayBe<string>;
  deployedVersionId?: TMayBe<TModelBase>;
  environmentApp?: TMayBe<TModelBase>;
  jsonPatches?: TMayBe<TMayBe<string>[]>;
  kustomizationState?: TMayBe<TPolicyGroupCluster_KustomizationState>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PolicyGroupCluster';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policiesToDelete?: TMayBe<TMayBe<string>[]>;
  policyGroupType?: TMayBe<string>;
  rolloutError?: TMayBe<string>;
  rolloutState?: TMayBe<TPolicyGroupCluster_RolloutState>;
  service?: 'cluster';
};

export default TPolicyGroupCluster;
