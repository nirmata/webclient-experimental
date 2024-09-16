/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TRollingUpdateDaemonSet from './Catalog.TRollingUpdateDaemonSet';

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

export type TDaemonSetUpdateStrategy_Type = 'OnDelete' | 'RollingUpdate';

type TDaemonSetUpdateStrategy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'DaemonSetUpdateStrategy';
  parent?: TMayBe<TModelBase>;
  rollingUpdate?: TMayBe<TMayBe<TRollingUpdateDaemonSet>[]>;
  service?: 'catalog';
  type?: TMayBe<TDaemonSetUpdateStrategy_Type>;
};

export default TDaemonSetUpdateStrategy;
