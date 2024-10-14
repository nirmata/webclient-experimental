/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'annotations'
  | 'createdBy'
  | 'createdOn'
  | 'creationTimestamp'
  | 'deletionTimestamp'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'resourceVersion'
  | 'selfLink'
  | 'service'
  | 'uid'
  | 'uri';

type TObjectMeta = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  annotations?: TMayBe<Record<string, TMayBe<string>>>;
  creationTimestamp?: TMayBe<string>;
  deletionTimestamp?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ObjectMeta';
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  resourceVersion?: TMayBe<string>;
  selfLink?: TMayBe<string>;
  service?: 'cluster';
  uid?: TMayBe<string>;
};

export default TObjectMeta;
