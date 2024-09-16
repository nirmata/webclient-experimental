/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Policies.TAlarm';
import TReportNotification from './Policies.TReportNotification';

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
  | 'recipients'
  | 'reportNotification'
  | 'reportType'
  | 'schedule'
  | 'sender'
  | 'service'
  | 'subject'
  | 'teamRef'
  | 'uri';

export type TReportSchedule_NotifyType = 'email';

export type TReportSchedule_ReportType =
  | 'policy'
  | 'complianceStandardRoot'
  | 'complianceStandardCluster'
  | 'complianceStandardControl';

export type TReportSchedule_Schedule = 'hourly' | 'daily' | 'weekly' | 'monthly';

type TReportSchedule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  day?: TMayBe<number>;
  enabled?: TMayBe<boolean>;
  hour?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  message?: TMayBe<string>;
  modelIndex?: 'ReportSchedule';
  name?: TMayBe<string>;
  namespaces?: TMayBe<TMayBe<string>[]>;
  notifyType?: TMayBe<TReportSchedule_NotifyType>;
  parent?: TMayBe<TModelBase>;
  recipients?: TMayBe<TMayBe<string>[]>;
  reportNotification?: TMayBe<TMayBe<TReportNotification>[]>;
  reportType?: TMayBe<TReportSchedule_ReportType>;
  schedule?: TMayBe<TReportSchedule_Schedule>;
  sender?: TMayBe<string>;
  service?: 'policies';
  subject?: TMayBe<string>;
  teamRef?: TMayBe<TModelBase>;
};

export default TReportSchedule;
