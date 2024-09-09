/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TRollingUpdateDaemonSet from './Environments.TRollingUpdateDaemonSet';

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

export type TDaemonSetUpdateStrategy_Type = 'RollingUpdate' | 'OnDelete';

type TDaemonSetUpdateStrategy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'DaemonSetUpdateStrategy';
  parent?: TMayBe<TModelBase>;
  rollingUpdate?: TMayBe<TMayBe<TRollingUpdateDaemonSet>[]>;
  service?: 'environments';
  type?: TMayBe<TDaemonSetUpdateStrategy_Type>;
};

export default TDaemonSetUpdateStrategy;
