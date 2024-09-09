/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TPatch from './Cluster.TPatch';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'foreach'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'overlay'
  | 'parent'
  | 'parent'
  | 'patchStrategicMerge'
  | 'patches'
  | 'patchesJson6902'
  | 'service'
  | 'targets'
  | 'uri';

type TMutationRule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  foreach?: TMayBe<object>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'MutationRule';
  overlay?: TMayBe<object>;
  parent?: TMayBe<TModelBase>;
  patchStrategicMerge?: TMayBe<object>;
  patches?: TMayBe<TMayBe<TPatch>[]>;
  patchesJson6902?: TMayBe<string>;
  service?: 'cluster';
  targets?: TMayBe<object>;
};

export default TMutationRule;
