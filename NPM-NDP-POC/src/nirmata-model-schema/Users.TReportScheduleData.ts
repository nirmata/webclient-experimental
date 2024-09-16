/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'day' | 'enabled' | 'hour' | 'notifyType' | 'reportType' | 'schedule';

export type TReportScheduleData_NotifyType = 'email';

export type TReportScheduleData_ReportType =
  | 'policy'
  | 'complianceStandardRoot'
  | 'complianceStandardCluster'
  | 'complianceStandardControl';

export type TReportScheduleData_Schedule = 'hourly' | 'daily' | 'weekly' | 'monthly';

type TReportScheduleData = {
  day?: TMayBe<number>;
  enabled?: TMayBe<boolean>;
  hour?: TMayBe<number>;
  notifyType?: TMayBe<TReportScheduleData_NotifyType>;
  reportType?: TMayBe<TReportScheduleData_ReportType>;
  schedule?: TMayBe<TReportScheduleData_Schedule>;
  service?: 'users';
};

export default TReportScheduleData;
