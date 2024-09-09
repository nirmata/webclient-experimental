/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TAccessControlList from './Environments.TAccessControlList';

export type TField =
  | 'acceptAllCertificates'
  | 'accessControlList'
  | 'additionalProperties'
  | 'address'
  | 'alarms'
  | 'ancestors'
  | 'apiToken'
  | 'createdBy'
  | 'createdOn'
  | 'environment'
  | 'id'
  | 'issueTypeId'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'priorityTypeId'
  | 'projectKey'
  | 'service'
  | 'sslCertificate'
  | 'uri'
  | 'userName';

type TJiraSettings = Omit<TModelBase, 'service' | 'modelIndex'> & {
  acceptAllCertificates?: TMayBe<boolean>;
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  address?: TMayBe<string>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiToken?: TMayBe<string>;
  issueTypeId?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'JiraSettings';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  priorityTypeId?: TMayBe<number>;
  projectKey?: TMayBe<string>;
  service?: 'environments';
  sslCertificate?: TMayBe<string>;
  userName?: TMayBe<string>;
};

export default TJiraSettings;
