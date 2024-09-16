/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'errorMessage'
  | 'id'
  | 'labels'
  | 'migrationData'
  | 'migrationType'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'state'
  | 'uri';

export type TDataMigrationAction_MigrationType = 'PodModelChange' | 'NamespaceACL';

export type TDataMigrationAction_State = 'inProgress' | 'completed' | 'failed';

type TDataMigrationAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  errorMessage?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  migrationData?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  migrationType?: TMayBe<TDataMigrationAction_MigrationType>;
  modelIndex?: 'DataMigrationAction';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  state?: TMayBe<TDataMigrationAction_State>;
};

export default TDataMigrationAction;
