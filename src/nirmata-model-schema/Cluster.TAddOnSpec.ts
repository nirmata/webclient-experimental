/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'addOnSelector'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'catalog'
  | 'channel'
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
  | 'sequenceNumber'
  | 'service'
  | 'uri'
  | 'yaml';

type TAddOnSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  addOnSelector?: TMayBe<string>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  catalog?: TMayBe<string>;
  channel?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AddOnSpec';
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  sequenceNumber?: TMayBe<number>;
  service?: 'cluster';
  yaml?: TMayBe<string>;
};

export default TAddOnSpec;
