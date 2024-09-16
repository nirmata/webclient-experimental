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

export type TPolicyReportNotification_Status = 'created' | 'sending' | 'sent' | 'failed';

type TPolicyReportNotification = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  errorMessage?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PolicyReportNotification';
  parent?: TMayBe<TModelBase>;
  sentTime?: TMayBe<string>;
  service?: 'cluster';
  status?: TMayBe<TPolicyReportNotification_Status>;
};

export default TPolicyReportNotification;
