/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TReportScheduleData from './Users.TReportScheduleData';
import TUser from './Users.TUser';
import TOrganization from './Users.TOrganization';
import TSubscription from './Users.TSubscription';
import TSaml2IdpSettings from './Users.TSaml2IdpSettings';
import TTeam from './Users.TTeam';
import TOidcIdpSettings from './Users.TOidcIdpSettings';
import TSaml2SpSettings from './Users.TSaml2SpSettings';
import TTenantCustomizations from './Users.TTenantCustomizations';
import TTenantQuotas from './Users.TTenantQuotas';
import TSlackSetting from './Users.TSlackSetting';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'awsCustomerId'
  | 'awsProductCode'
  | 'awsSubscriptionState'
  | 'billingEmail'
  | 'createdBy'
  | 'createdOn'
  | 'customizations'
  | 'defaultTeamReportSchedule'
  | 'disabledOn'
  | 'features'
  | 'id'
  | 'labels'
  | 'mfaRequired'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespacesAutoSync'
  | 'oidcIdpSettings'
  | 'orgs'
  | 'ownerEmail'
  | 'ownersAnnotation'
  | 'parent'
  | 'parent'
  | 'paymentToken'
  | 'publishReports'
  | 'quotas'
  | 'saml2IdpSettings'
  | 'saml2SpSettings'
  | 'service'
  | 'settings'
  | 'slackSettings'
  | 'state'
  | 'status'
  | 'subscriptions'
  | 'teams'
  | 'tenantLabel'
  | 'type'
  | 'uri'
  | 'users';

export type TTenant_AwsSubscriptionState =
  | 'subscribeSuccess'
  | 'subscribeFail'
  | 'unsubscribePending'
  | 'unsubscribeSuccess';

export type TTenant_State = 'enabled' | 'disabled';

export type TTenant_Type = 'Alpha' | 'Beta' | 'Test' | 'CiscoHackathon2014' | 'GA' | 'GA2';

type TTenant = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  awsCustomerId?: TMayBe<string>;
  awsProductCode?: TMayBe<string>;
  awsSubscriptionState?: TMayBe<TTenant_AwsSubscriptionState>;
  billingEmail?: TMayBe<string>;
  customizations?: TMayBe<TMayBe<TTenantCustomizations>[]>;
  defaultTeamReportSchedule?: TMayBe<TMayBe<TReportScheduleData>>;
  disabledOn?: TMayBe<number>;
  features?: TMayBe<TMayBe<string>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  mfaRequired?: TMayBe<boolean>;
  modelIndex?: 'Tenant';
  name?: TMayBe<string>;
  namespacesAutoSync?: TMayBe<boolean>;
  oidcIdpSettings?: TMayBe<TMayBe<TOidcIdpSettings>[]>;
  orgs?: TMayBe<TMayBe<TOrganization>[]>;
  ownerEmail?: TMayBe<string>;
  ownersAnnotation?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  paymentToken?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  publishReports?: TMayBe<boolean>;
  quotas?: TMayBe<TMayBe<TTenantQuotas>[]>;
  saml2IdpSettings?: TMayBe<TMayBe<TSaml2IdpSettings>[]>;
  saml2SpSettings?: TMayBe<TMayBe<TSaml2SpSettings>[]>;
  service?: 'users';
  slackSettings?: TMayBe<TMayBe<TSlackSetting>[]>;
  state?: TMayBe<TTenant_State>;
  status?: TMayBe<string>;
  subscriptions?: TMayBe<TMayBe<TSubscription>[]>;
  teams?: TMayBe<TMayBe<TTeam>[]>;
  tenantLabel?: TMayBe<string>;
  type?: TMayBe<TTenant_Type>;
  users?: TMayBe<TMayBe<TUser>[]>;
};

export default TTenant;
