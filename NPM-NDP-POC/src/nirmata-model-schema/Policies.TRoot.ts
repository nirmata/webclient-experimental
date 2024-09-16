/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Policies.TAlarm';
import TCluster from './Policies.TCluster';
import TPolicyReport from './Policies.TPolicyReport';
import TPolicy from './Policies.TPolicy';
import TPolicyException from './Policies.TPolicyException';
import TEvent from './Policies.TEvent';
import TImage from './Policies.TImage';
import TImageViolation from './Policies.TImageViolation';
import TPolicyExceptionRequest from './Policies.TPolicyExceptionRequest';
import TComplianceStandard from './Policies.TComplianceStandard';
import TReportSchedule from './Policies.TReportSchedule';
import TAlarmType from './Policies.TAlarmType';
import TAlarmNotifier from './Policies.TAlarmNotifier';

export type TField =
  | 'additionalProperties'
  | 'alarmNotifiers'
  | 'alarmTypes'
  | 'alarms'
  | 'ancestors'
  | 'clusters'
  | 'complianceStandards'
  | 'createdBy'
  | 'createdOn'
  | 'events'
  | 'id'
  | 'imageViolations'
  | 'images'
  | 'labels'
  | 'modelId'
  | 'modelIndex'
  | 'modelName'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'policies'
  | 'policyExceptionRequests'
  | 'policyExceptions'
  | 'policyReports'
  | 'service'
  | 'teamReportSchedules'
  | 'uri';

type TRoot = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarmNotifiers?: TMayBe<TMayBe<TAlarmNotifier>[]>;
  alarmTypes?: TMayBe<TMayBe<TAlarmType>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusters?: TMayBe<TMayBe<TCluster>[]>;
  complianceStandards?: TMayBe<TMayBe<TComplianceStandard>[]>;
  events?: TMayBe<TMayBe<TEvent>[]>;
  imageViolations?: TMayBe<TMayBe<TImageViolation>[]>;
  images?: TMayBe<TMayBe<TImage>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelId?: TMayBe<string>;
  modelIndex?: 'Root';
  modelName?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policies?: TMayBe<TMayBe<TPolicy>[]>;
  policyExceptionRequests?: TMayBe<TMayBe<TPolicyExceptionRequest>[]>;
  policyExceptions?: TMayBe<TMayBe<TPolicyException>[]>;
  policyReports?: TMayBe<TMayBe<TPolicyReport>[]>;
  service?: 'policies';
  teamReportSchedules?: TMayBe<TMayBe<TReportSchedule>[]>;
};

export default TRoot;
