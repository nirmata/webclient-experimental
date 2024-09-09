/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'lastBackup'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'phase'
  | 'service'
  | 'uri'
  | 'validationErrors';

export type TScheduleStatus_Phase =
  | 'New'
  | 'FailedValidation'
  | 'InProgress'
  | 'Completed'
  | 'Failed'
  | 'Enabled'
  | 'Disabled'
  | 'Deleting';

type TScheduleStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastBackup?: TMayBe<string>;
  modelIndex?: 'ScheduleStatus';
  parent?: TMayBe<TModelBase>;
  phase?: TMayBe<TScheduleStatus_Phase>;
  service?: 'cluster';
  validationErrors?: TMayBe<TMayBe<string>[]>;
};

export default TScheduleStatus;
