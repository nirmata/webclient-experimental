/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TReportScheduleData from './Users.TReportScheduleData';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'emailAlias'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'publishReports'
  | 'reportPublisherKey'
  | 'reportSchedule'
  | 'service'
  | 'uri'
  | 'users';

type TTeam = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  description?: TMayBe<string>;
  emailAlias?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Team';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  publishReports?: TMayBe<boolean>;
  reportPublisherKey?: TMayBe<string>;
  reportSchedule?: TMayBe<TMayBe<TReportScheduleData>>;
  service?: 'users';
};

export default TTeam;
