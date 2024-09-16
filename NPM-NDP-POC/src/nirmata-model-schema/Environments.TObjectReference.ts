/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'createdBy'
  | 'createdOn'
  | 'fieldPath'
  | 'id'
  | 'kind'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'resourceVersion'
  | 'service'
  | 'uid'
  | 'uri';

type TObjectReference = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  fieldPath?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ObjectReference';
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  resourceVersion?: TMayBe<string>;
  service?: 'environments';
  uid?: TMayBe<string>;
};

export default TObjectReference;
