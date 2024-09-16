/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'policies'
  | 'service'
  | 'serviceAccountName'
  | 'tokenMaxTtl'
  | 'tokenTtl'
  | 'uri';

type TVaultRole = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'VaultRole';
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policies?: TMayBe<string>;
  service?: 'cluster';
  serviceAccountName?: TMayBe<string>;
  tokenMaxTtl?: TMayBe<number>;
  tokenTtl?: TMayBe<number>;
};

export default TVaultRole;
