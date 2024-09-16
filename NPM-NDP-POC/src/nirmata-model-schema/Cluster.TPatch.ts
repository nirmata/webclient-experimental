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
  | 'op'
  | 'parent'
  | 'parent'
  | 'path'
  | 'service'
  | 'uri'
  | 'value';

export type TPatch_Op = 'add' | 'replace' | 'remove';

type TPatch = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Patch';
  op?: TMayBe<TPatch_Op>;
  parent?: TMayBe<TModelBase>;
  path?: TMayBe<string>;
  service?: 'cluster';
  value?: TMayBe<object>;
};

export default TPatch;
