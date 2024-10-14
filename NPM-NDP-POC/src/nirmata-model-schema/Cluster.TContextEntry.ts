/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiCall'
  | 'configMap'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'imageRegistry'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri'
  | 'variable';

type TContextEntry = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiCall?: TMayBe<Record<string, TMayBe<string>>>;
  configMap?: TMayBe<Record<string, TMayBe<string>>>;
  imageRegistry?: TMayBe<object>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ContextEntry';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  variable?: TMayBe<object>;
};

export default TContextEntry;
