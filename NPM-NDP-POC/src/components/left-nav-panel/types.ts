import { MenuProps } from 'antd';

export type TMenuItem = {
  id: string;
  route: string;
  title: string;
  component?: React.ComponentType<any>;
  dataTestId: string;
  preview?: boolean;
  submenu?: TMenuItem[];
};

export type TProduct = {
  isNirmataPlatformProduct?: boolean;
  isN4KProduct?: boolean;
  isPolicyManagerProduct?: boolean;
};

export type TMenuConfig = {
  menuList: TMenuItem[];
  menuOptions: TMenuMap;
};

export type TFlagedFeaturesList = ['ManagedUpdatePolicyFeature' | 'kubeconfig-expiration' | 'image-vulnerability'];

export type TFlagedFeaturesMap = {
  ManagedUpdatePolicyFeature?: boolean;
  ['kubeconfig-expiration']?: boolean;
  ['image-vulnerability']?: boolean;
  ['configure-kyverno']?: boolean;
  ['upgrade-kyverno']?: boolean;
  ['image-verification']?: boolean;
  ['resource-events']?: boolean;
};

export type TTenantType = {
  isEksEnterpriseProduct: boolean;
  isEksProduct: boolean;
  isEksProfessionalProduct: boolean;
  isN4KProduct: boolean;
  isNirmataPlatformProduct: boolean;
  isPolicyManagerProduct: boolean;
  tenantIsEks: boolean;
  tenantIsExpired: boolean;
  tenantIsTrial: boolean;
};

export type TMenuMap = {
  getting_started_menu?: boolean;
  dashboard_menu?: boolean;
  dashboard_counts_menu?: boolean;
  activity_menu?: boolean;
  alarm_menu?: boolean;
  alarm_sub_menu?: boolean;
  applications_menu?: boolean;
  services_menu?: boolean;
  environmentTypes_menu?: boolean;
  applications_alarm_menu?: boolean;
  policies_menu?: boolean;
  hostClusters_menu?: boolean;
  clusters_policy_report_menus?: boolean;
  policy_exceptions_menus?: boolean;
  clusters_alarm_menu?: boolean;
  clusterPolicy_menu?: boolean;
  alarm_settings_menu?: boolean;
  hostgroups_menu?: boolean;
  providers_menu?: boolean;
  registries_menu?: boolean;
  iam_menu?: boolean;
  team_menu?: boolean;
  users_menu?: boolean;
  account_menu?: boolean;
  setup_menu?: boolean;
  saml_menu?: boolean;
  oidc_menu?: boolean;
  mfa_menu?: boolean;
  smtp_menu?: boolean;
  gitSettings_menu?: boolean;
  managed_rollouts_menu?: boolean;
  all_hosts_containers_menu?: boolean;
  dashboard_inventory_menu?: boolean;
  dashboard_compliance_menu?: boolean;
  nirmataV2?: boolean;
  credential_menu?: boolean;
  jira_menu?: boolean;
  integration_menu?: boolean;
  policies_alarm_menu?: boolean;
  compliance_standards_report_menu?: boolean;
  policies_events_menu?: boolean;
  monitor_menu?: boolean;
  kyverno_config?: boolean;
  audit_logs?: boolean;
  manageKubeConfig_menu?: boolean;
  images_menu?: boolean;
  workload_policy_menus?: boolean;
};

export type TUserData = {
  tenantType: string;
  product: string;
  role: string;
  isActivated: boolean;
  identityProvider: string;
  features: string[];
  tenantName: string;
  name: string;
  tenantId: string;
  id: string;
  isDisabled: boolean;
  fullname: string;
  tenantState: string;
  email: string;
  numAccounts: number;
};

export type LeftNavPanelProps = {
  hasClusterAccess: boolean;
  productData: TProduct;
  userData: TUserData;
  isSmallNav: boolean;
  hasOidcAccess: boolean;
  hashLocation: string;
};

export type MenuItem = Required<MenuProps>['items'][number];
