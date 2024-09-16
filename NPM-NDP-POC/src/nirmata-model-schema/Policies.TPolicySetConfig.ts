/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TPolicySetGitConfig from './Policies.TPolicySetGitConfig';

export type TField =
  | 'PolicySet'
  | 'ancestors'
  | 'autoDeployChanges'
  | 'clusterSelector'
  | 'createdBy'
  | 'createdOn'
  | 'gitConfig'
  | 'id'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'syncInterval'
  | 'uri';

type TPolicySetConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  PolicySet?: TMayBe<TMayBe<unknown>[]>;
  autoDeployChanges?: TMayBe<boolean>;
  clusterSelector?: TMayBe<Record<string, string>>;
  gitConfig?: TMayBe<TMayBe<TPolicySetGitConfig>[]>;
  modelIndex?: 'PolicySetConfig';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'policies';
  syncInterval?: TMayBe<number>;
};

export default TPolicySetConfig;
