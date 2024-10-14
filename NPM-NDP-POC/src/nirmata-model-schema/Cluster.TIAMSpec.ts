/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TClusterRole from './Cluster.TClusterRole';
import TAccessControlList from './Cluster.TAccessControlList';

export type TField =
  | 'accessControlList'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterRoles'
  | 'createdBy'
  | 'createdOn'
  | 'enableIAMAuthentication'
  | 'enableIAMAuthorization'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TIAMSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterRoles?: TMayBe<TMayBe<TClusterRole>[]>;
  enableIAMAuthentication?: TMayBe<boolean>;
  enableIAMAuthorization?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'IAMSpec';
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
};

export default TIAMSpec;
