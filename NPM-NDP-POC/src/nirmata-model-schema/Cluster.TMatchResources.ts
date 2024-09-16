/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TResourceDescription from './Cluster.TResourceDescription';
import TSubject from './Cluster.TSubject';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterRoles'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'resources'
  | 'roles'
  | 'service'
  | 'subjects'
  | 'uri';

type TMatchResources = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterRoles?: TMayBe<TMayBe<string>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'MatchResources';
  parent?: TMayBe<TModelBase>;
  resources?: TMayBe<TMayBe<TResourceDescription>[]>;
  roles?: TMayBe<TMayBe<string>[]>;
  service?: 'cluster';
  subjects?: TMayBe<TMayBe<TSubject>[]>;
};

export default TMatchResources;
