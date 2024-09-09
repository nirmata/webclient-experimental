/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TObjectMeta from './Catalog.TObjectMeta';
import TSubject from './Catalog.TSubject';
import TRoleRef from './Catalog.TRoleRef';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kind'
  | 'labels'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'roleRef'
  | 'service'
  | 'subjects'
  | 'uri';

type TClusterRoleBinding = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'ClusterRoleBinding';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  roleRef?: TMayBe<TMayBe<TRoleRef>[]>;
  service?: 'catalog';
  subjects?: TMayBe<TMayBe<TSubject>[]>;
};

export default TClusterRoleBinding;
