/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TPolicyReportNotification from './Cluster.TPolicyReportNotification';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'day'
  | 'enabled'
  | 'hour'
  | 'id'
  | 'labels'
  | 'message'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespaces'
  | 'notifyType'
  | 'parent'
  | 'parent'
  | 'policyReportNotification'
  | 'recipients'
  | 'schedule'
  | 'sender'
  | 'service'
  | 'subject'
  | 'uri';

export type TPolicyReportSchedule_NotifyType = 'email';

export type TPolicyReportSchedule_Schedule = 'hourly' | 'daily' | 'weekly' | 'monthly';

type TPolicyReportSchedule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  day?: TMayBe<number>;
  enabled?: TMayBe<boolean>;
  hour?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  message?: TMayBe<string>;
  modelIndex?: 'PolicyReportSchedule';
  name?: TMayBe<string>;
  namespaces?: TMayBe<TMayBe<string>[]>;
  notifyType?: TMayBe<TPolicyReportSchedule_NotifyType>;
  parent?: TMayBe<TModelBase>;
  policyReportNotification?: TMayBe<TMayBe<TPolicyReportNotification>[]>;
  recipients?: TMayBe<TMayBe<string>[]>;
  schedule?: TMayBe<TPolicyReportSchedule_Schedule>;
  sender?: TMayBe<string>;
  service?: 'cluster';
  subject?: TMayBe<string>;
};

export default TPolicyReportSchedule;
