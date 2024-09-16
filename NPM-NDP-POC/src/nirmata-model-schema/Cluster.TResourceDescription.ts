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
  | 'id'
  | 'kinds'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespaceSelector'
  | 'namespaces'
  | 'parent'
  | 'parent'
  | 'selector'
  | 'service'
  | 'uri';

type TResourceDescription = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  annotations?: TMayBe<Record<string, TMayBe<string>>>;
  kinds?: TMayBe<TMayBe<string>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ResourceDescription';
  name?: TMayBe<string>;
  namespaceSelector?: TMayBe<Record<string, string>>;
  namespaces?: TMayBe<TMayBe<string>[]>;
  parent?: TMayBe<TModelBase>;
  selector?: TMayBe<Record<string, string>>;
  service?: 'cluster';
};

export default TResourceDescription;
