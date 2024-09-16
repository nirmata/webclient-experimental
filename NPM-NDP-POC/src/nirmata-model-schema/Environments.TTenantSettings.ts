/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TGitCredential from './Environments.TGitCredential';
import TJiraSettings from './Environments.TJiraSettings';
import TKubeconfigSettings from './Environments.TKubeconfigSettings';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'gitCredentials'
  | 'id'
  | 'jiraSettings'
  | 'kubeconfigSettings'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TTenantSettings = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  gitCredentials?: TMayBe<TMayBe<TGitCredential>[]>;
  jiraSettings?: TMayBe<TMayBe<TJiraSettings>[]>;
  kubeconfigSettings?: TMayBe<TMayBe<TKubeconfigSettings>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'TenantSettings';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
};

export default TTenantSettings;
