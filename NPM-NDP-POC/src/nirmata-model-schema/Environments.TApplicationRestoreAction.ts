/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'backupRef'
  | 'createdBy'
  | 'createdOn'
  | 'errorMessage'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespaceRef'
  | 'parent'
  | 'parent'
  | 'service'
  | 'status'
  | 'uri';

export type TApplicationRestoreAction_Status = 'pending' | 'started' | 'inProgress' | 'completed' | 'failed';

type TApplicationRestoreAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  backupRef?: TMayBe<string>;
  errorMessage?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ApplicationRestoreAction';
  namespaceRef?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  status?: TMayBe<TApplicationRestoreAction_Status>;
};

export default TApplicationRestoreAction;
