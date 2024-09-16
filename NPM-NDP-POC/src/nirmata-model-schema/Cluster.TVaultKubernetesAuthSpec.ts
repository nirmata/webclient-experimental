/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TVaultRole from './Cluster.TVaultRole';

export type TField =
  | 'addOnName'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'credentials'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'path'
  | 'roles'
  | 'service'
  | 'shouldDeleteAuthPath'
  | 'uri';

type TVaultKubernetesAuthSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  addOnName?: TMayBe<string>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'VaultKubernetesAuthSpec';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  path?: TMayBe<string>;
  roles?: TMayBe<TMayBe<TVaultRole>[]>;
  service?: 'cluster';
  shouldDeleteAuthPath?: TMayBe<boolean>;
};

export default TVaultKubernetesAuthSpec;
