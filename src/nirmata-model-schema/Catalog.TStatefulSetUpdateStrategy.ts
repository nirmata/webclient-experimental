/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TRollingUpdateStatefulSetStrategy from './Catalog.TRollingUpdateStatefulSetStrategy';

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
  | 'rollingUpdate'
  | 'service'
  | 'type'
  | 'uri';

export type TStatefulSetUpdateStrategy_Type = 'OnDelete' | 'RollingUpdate';

type TStatefulSetUpdateStrategy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'StatefulSetUpdateStrategy';
  parent?: TMayBe<TModelBase>;
  rollingUpdate?: TMayBe<TMayBe<TRollingUpdateStatefulSetStrategy>[]>;
  service?: 'catalog';
  type?: TMayBe<TStatefulSetUpdateStrategy_Type>;
};

export default TStatefulSetUpdateStrategy;
