/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Policies.TAlarm';
import TAccessControlList from './Policies.TAccessControlList';
import TRepositoryComplianceReport from './Policies.TRepositoryComplianceReport';

export type TField =
  | 'accessControlList'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'complianceReports'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'gitAccount'
  | 'gitUrl'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'organization'
  | 'origin'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

export type TRepository_Origin = 'Added' | 'Scanned';

type TRepository = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  complianceReports?: TMayBe<TMayBe<TRepositoryComplianceReport>[]>;
  description?: TMayBe<string>;
  gitAccount?: TMayBe<string>;
  gitUrl?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Repository';
  name?: TMayBe<string>;
  organization?: TMayBe<string>;
  origin?: TMayBe<TRepository_Origin>;
  parent?: TMayBe<TModelBase>;
  service?: 'policies';
};

export default TRepository;
