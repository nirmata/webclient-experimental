/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TResourceChange from './Environments.TResourceChange';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'application'
  | 'createdBy'
  | 'createdOn'
  | 'environment'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'resourceChanges'
  | 'service'
  | 'uri';

type TChangeLog = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ChangeLog';
  parent?: TMayBe<TModelBase>;
  resourceChanges?: TMayBe<TMayBe<TResourceChange>[]>;
  service?: 'environments';
};

export default TChangeLog;
