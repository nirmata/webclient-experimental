/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TTaint from './Cluster.TTaint';

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
  | 'parent'
  | 'parent'
  | 'podCIDR'
  | 'providerID'
  | 'service'
  | 'taints'
  | 'unschedulable'
  | 'uri';

type TNodeSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'NodeSpec';
  parent?: TMayBe<TModelBase>;
  podCIDR?: TMayBe<string>;
  providerID?: TMayBe<string>;
  service?: 'cluster';
  taints?: TMayBe<TMayBe<TTaint>[]>;
  unschedulable?: TMayBe<boolean>;
};

export default TNodeSpec;
