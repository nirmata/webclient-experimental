/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'annotations'
  | 'clusterName'
  | 'createdBy'
  | 'createdOn'
  | 'creationTimestamp'
  | 'deletionGracePeriodSeconds'
  | 'deletionTimestamp'
  | 'generateName'
  | 'generation'
  | 'id'
  | 'labels'
  | 'managedFields'
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
  clusterName?: TMayBe<string>;
  creationTimestamp?: TMayBe<string>;
  deletionGracePeriodSeconds?: TMayBe<number>;
  deletionTimestamp?: TMayBe<string>;
  generateName?: TMayBe<string>;
  generation?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  managedFields?: TMayBe<object>;
  modelIndex?: 'ObjectMeta';
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  resourceVersion?: TMayBe<string>;
  selfLink?: TMayBe<string>;
  service?: 'environments';
  uid?: TMayBe<string>;
};

export default TObjectMeta;
