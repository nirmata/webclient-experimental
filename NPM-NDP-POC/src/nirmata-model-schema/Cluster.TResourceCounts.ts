/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterrolebindings'
  | 'clusterroles'
  | 'crds'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespaces'
  | 'nodes'
  | 'parent'
  | 'parent'
  | 'persistentvolumes'
  | 'pods'
  | 'podsecuritypolicies'
  | 'priorityclasses'
  | 'service'
  | 'storageclasses'
  | 'uri';

type TResourceCounts = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterrolebindings?: TMayBe<number>;
  clusterroles?: TMayBe<number>;
  crds?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ResourceCounts';
  namespaces?: TMayBe<number>;
  nodes?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  persistentvolumes?: TMayBe<number>;
  pods?: TMayBe<number>;
  podsecuritypolicies?: TMayBe<number>;
  priorityclasses?: TMayBe<number>;
  service?: 'cluster';
  storageclasses?: TMayBe<number>;
};

export default TResourceCounts;
