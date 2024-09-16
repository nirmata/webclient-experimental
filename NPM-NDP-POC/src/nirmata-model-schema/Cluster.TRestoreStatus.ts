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
  | 'errors'
  | 'failureReason'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'phase'
  | 'service'
  | 'uri'
  | 'validationErrors'
  | 'warnings';

export type TRestoreStatus_Phase =
  | 'New'
  | 'FailedValidation'
  | 'InProgress'
  | 'Completed'
  | 'Failed'
  | 'Enabled'
  | 'Disabled'
  | 'Deleting';

type TRestoreStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  errors?: TMayBe<number>;
  failureReason?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'RestoreStatus';
  parent?: TMayBe<TModelBase>;
  phase?: TMayBe<TRestoreStatus_Phase>;
  service?: 'cluster';
  validationErrors?: TMayBe<TMayBe<string>[]>;
  warnings?: TMayBe<number>;
};

export default TRestoreStatus;
