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
  | 'creationBlocked'
  | 'id'
  | 'kind'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TManagedResourceSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  creationBlocked?: TMayBe<boolean>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ManagedResourceSpec';
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
};

export default TManagedResourceSpec;
