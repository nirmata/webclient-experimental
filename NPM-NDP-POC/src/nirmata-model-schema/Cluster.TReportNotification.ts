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
  | 'errorMessage'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'sentTime'
  | 'service'
  | 'status'
  | 'uri';

export type TReportNotification_Status = 'created' | 'sending' | 'sent' | 'failed';

type TReportNotification = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  errorMessage?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ReportNotification';
  parent?: TMayBe<TModelBase>;
  sentTime?: TMayBe<string>;
  service?: 'cluster';
  status?: TMayBe<TReportNotification_Status>;
};

export default TReportNotification;
