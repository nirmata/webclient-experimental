/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TClusterAddOn from './Cluster.TClusterAddOn';

export type TField =
  | 'addOns'
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
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TClusterAddOns = Omit<TModelBase, 'service' | 'modelIndex'> & {
  addOns?: TMayBe<TMayBe<TClusterAddOn>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ClusterAddOns';
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
};

export default TClusterAddOns;
