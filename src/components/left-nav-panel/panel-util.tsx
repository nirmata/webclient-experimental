import { TFlagedFeaturesMap, TMenuConfig, TMenuItem, TMenuMap, TProduct } from './types';
import { useGetNirmataPlatformMenuList } from './use-get-nirmata-platform-menu-list';
import { useGetPolicyManagerMenuList } from './use-get-policy-manager-menu-list';
import { useGetN4kMenuList } from './use-get-n4k-menu-list';

// const hasKey = (obj: Record<string, any>, key: string): boolean => Object.prototype.hasOwnProperty.call(obj, key);

export const getMenusForAccountAndRole = (
  accountType: string,
  role: string,
  tenantType: string,
  featureListObj: TFlagedFeaturesMap,
  isPolicyManagerProduct: boolean,
  hasOidcAccess: boolean
) => {
  const isNirmataV2 = tenantType === 'GA2';
  let menuOpts = {
    getting_started_menu: true,
    dashboard_menu: true,
    dashboard_counts_menu: isNirmataV2,
    activity_menu: true,
    alarm_menu: true,
    alarm_sub_menu: true,
    applications_menu: true,
    services_menu: true,
    environmentTypes_menu: true,
    applications_alarm_menu: true,
    policies_menu: true,
    hostClusters_menu: isNirmataV2,
    clusters_policy_report_menus: true,
    policy_exceptions_menus: true,
    clusters_alarm_menu: true,
    clusterPolicy_menu: true,
    alarm_settings_menu: true,
    hostgroups_menu: false,
    providers_menu: true,
    registries_menu: true,
    iam_menu: false,
    teams_menu: true,
    users_menu: true,
    account_menu: true,
    setup_menu: true,
    saml_menu: true,
    oidc_menu: hasOidcAccess,
    mfa_menu: true,
    smtp_menu: false,
    gitSettings_menu: true,
    managed_rollouts_menu: false,
    all_hosts_containers_menu: isNirmataV2,
    dashboard_inventory_menu: isNirmataV2,
    dashboard_compliance_menu: isNirmataV2,
    nirmataV2: isNirmataV2,
    credential_menu: isNirmataV2,
    jira_menu: isNirmataV2,
    integration_menu: isNirmataV2,
    policies_alarm_menu: true,
    compliance_standards_report_menu: true,
    policies_events_menu: true,
    monitor_menu: true,
    kyverno_config: true,
    audit_logs: true,
    manageKubeConfig_menu: false,
    images_menu: true,
    workload_policy_menus: true
  };

  if (featureListObj.ManagedUpdatePolicyFeature) {
    menuOpts.managed_rollouts_menu = true;
  }

  if (featureListObj?.['kubeconfig-expiration']) {
    menuOpts.manageKubeConfig_menu = true;
  }
  switch (accountType) {
    case 'Enterprise':
    case 'EKS Enterprise':
    case 'Policy Manager Enterprise':
    case 'EKS Policy Manager Enterprise':
      break;
    case 'PrivateEdition':
      menuOpts.smtp_menu = true;
      break;
    case 'Policy Manager Standard':
    case 'Professional':
    case 'Standard':
    default:
      menuOpts.oidc_menu = hasOidcAccess;
      menuOpts.mfa_menu = false;
  }

  // Update Product Menus
  switch (role) {
    case 'devops':
      menuOpts.activity_menu = false;
      menuOpts.alarm_sub_menu = false;
      menuOpts.environmentTypes_menu = false;
      menuOpts.providers_menu = false;
      menuOpts.clusters_alarm_menu = false;
      menuOpts.applications_alarm_menu = false;
      menuOpts.clusterPolicy_menu = false;
      menuOpts.alarm_settings_menu = false;
      menuOpts.hostgroups_menu = false;
      menuOpts.setup_menu = false;
      menuOpts.dashboard_compliance_menu = false;
      menuOpts.registries_menu = false;
      menuOpts.audit_logs = false;
      menuOpts.iam_menu = false;
      menuOpts.users_menu = false;
      menuOpts.teams_menu = false;
      menuOpts.saml_menu = false;
      menuOpts.oidc_menu = false;
      menuOpts.mfa_menu = false;
      menuOpts.monitor_menu = false;
      menuOpts.compliance_standards_report_menu = false;
      menuOpts.policies_events_menu = false;
      menuOpts.account_menu = false;
      menuOpts.manageKubeConfig_menu = false;
      menuOpts.hostClusters_menu = false;
      menuOpts.images_menu = false;
      menuOpts.dashboard_inventory_menu = false;
      menuOpts.workload_policy_menus = false;
      break;
    case 'readonly':
      if (isPolicyManagerProduct) {
        menuOpts.hostClusters_menu = false;
      }
      menuOpts.integration_menu = false;
      menuOpts.registries_menu = false;
      break;
    case 'platform':
      menuOpts.iam_menu = false;
      menuOpts.users_menu = false;
      menuOpts.teams_menu = false;
      menuOpts.saml_menu = false;
      menuOpts.oidc_menu = false;
      menuOpts.mfa_menu = false;
      menuOpts.account_menu = false;
      menuOpts.registries_menu = false;
      break;
    case 'admin':
      break;
    default:
      console.error('Invalid role ' + role);
      return {};
  }

  return menuOpts;
};

const getFeatureConfig = <T extends string>(arr: T[]): TFlagedFeaturesMap => {
  const result: TFlagedFeaturesMap = {};
  arr?.forEach((item) => {
    if (item in result) {
      result[item as keyof TFlagedFeaturesMap] = true;
    }
  });

  return result;
};

export const getPermissionsBasedMenusForAccountAndRole = (
  accountType: string,
  role: string,
  tenantType: string,
  featureListObj: TFlagedFeaturesMap,
  product: TProduct,
  hasClusterAccess: boolean,
  hasOidcAccess: boolean
): TMenuMap => {
  const menuOptions: TMenuMap = getMenusForAccountAndRole(
    accountType,
    role,
    tenantType,
    featureListObj,
    product?.isPolicyManagerProduct ?? false,
    hasOidcAccess
  );
  if (product?.isNirmataPlatformProduct && role === 'devops') {
    menuOptions.hostClusters_menu = hasClusterAccess;
  }
  return menuOptions;
};

export const getMenuConfig = (
  featuresList: string[],
  userRole: string,
  tenantType: string,
  accountType: string,
  hasClusterAccess: boolean,
  product: TProduct,
  hasOidcAccess: boolean
): TMenuConfig => {
  const featureListObj = getFeatureConfig(featuresList);
  const menuOptions = getPermissionsBasedMenusForAccountAndRole(
    accountType,
    userRole,
    tenantType,
    featureListObj,
    product,
    hasClusterAccess,
    hasOidcAccess
  );

  const nirmataPlatformMenuList: TMenuItem[] = useGetNirmataPlatformMenuList(featuresList);

  const policyManagerMenuList: TMenuItem[] = useGetPolicyManagerMenuList(featuresList, userRole);

  const n4kMenuList: TMenuItem[] = useGetN4kMenuList();

  const newMenuList =
    product?.isPolicyManagerProduct ?? false
      ? userRole !== 'devops'
        ? policyManagerMenuList
        : policyManagerMenuList.filter((item) => item.title !== 'Policy Sets')
      : product?.isN4KProduct ?? false
      ? n4kMenuList
      : nirmataPlatformMenuList;

  return { menuList: newMenuList, menuOptions: menuOptions };
};

export const filterMenu = (menuConfig: TMenuConfig): TMenuItem[] => {
  const { menuList, menuOptions } = menuConfig;

  return menuList.filter((menuItem) => {
    const includeItem =
      menuOptions[menuItem.id as keyof TMenuMap] === undefined || menuOptions[menuItem.id as keyof TMenuMap] !== false;

    if (menuItem.submenu) {
      menuItem.submenu = filterMenu({ menuList: menuItem.submenu, menuOptions: menuOptions });
      return includeItem || menuItem.submenu.length > 0;
    }

    return includeItem;
  });
};

export const findIdByRoute = (inputObj: TMenuItem[], currentRoute: string): string | null => {
  for (const menuItem of inputObj) {
    // Check if currentRoute includes menuItem.route
    if (
      currentRoute.includes(menuItem.route) &&
      menuItem.submenu === undefined &&
      !currentRoute.includes('clusters/policyReport')
    ) {
      return menuItem.id;
    }

    if (menuItem.submenu) {
      const subMenuResult = findIdByRoute(menuItem.submenu, currentRoute);
      if (subMenuResult) {
        return subMenuResult;
      }
    }
  }

  return null; // Return null if the route is not found in the inputObj
};

export const findIdAndAncestors = (inputObj: TMenuItem[], currentRoute: string): string[] => {
  let result = [] as string[];

  function findRecursively(menuItems: TMenuItem[], route: string, ancestorIds: string[]): void {
    for (const menuItem of menuItems) {
      if (route.includes(menuItem.route) && menuItem.submenu === undefined) {
        result = [...result, ...ancestorIds];
        break;
      }

      if (menuItem.submenu) {
        findRecursively(menuItem.submenu, route, [...ancestorIds, menuItem.id]);
      }
    }
  }

  findRecursively(inputObj, currentRoute, []);

  return result;
};
