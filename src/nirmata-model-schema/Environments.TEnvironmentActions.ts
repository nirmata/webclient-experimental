/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TApplicationRestoreAction from './Environments.TApplicationRestoreAction';
import TDataMigrationAction from './Environments.TDataMigrationAction';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'migrationActions'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'restoreActions'
  | 'service'
  | 'uri';

type TEnvironmentActions = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  migrationActions?: TMayBe<TMayBe<TDataMigrationAction>[]>;
  modelIndex?: 'EnvironmentActions';
  parent?: TMayBe<TModelBase>;
  restoreActions?: TMayBe<TMayBe<TApplicationRestoreAction>[]>;
  service?: 'environments';
};

export default TEnvironmentActions;
