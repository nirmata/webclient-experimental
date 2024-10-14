import { TMenuItem } from "./types";
import {
  AppstoreOutlined,
  DeploymentUnitOutlined,
  SafetyCertificateOutlined,
  FileProtectOutlined,
  DashboardOutlined,
  WarningOutlined,
  ProfileOutlined,
  DesktopOutlined,
  IdcardOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export const useGetPolicyManagerMenuList = (
  featuresList: string[],
  userRole: string
): TMenuItem[] => {
  return [
    {
      id: "dashboard_overview_menu",
      route: "/webclient/#dashboards/overview",
      title: "Dashboard",
      component: DashboardOutlined,
      dataTestId: "dashboard",
    },
    {
      id: "policies_menu",
      route:
        userRole === "devops"
          ? "/webclient/#clustersPolicyReport"
          : "/webclient/#clustersPolicyReport",
      title: "Policies",
      dataTestId: "policy",
      component: FileProtectOutlined,
      submenu: [
        {
          id: "clusters_policy_report_menus",
          route: "/webclient/#clustersPolicyReport",
          title: "Policy Reports",
          dataTestId: "policy-reports",
        },
        {
          id: "policy_exceptions_menus",
          route: "/webclient/#policyExceptions",
          title: "Policy Exceptions",
          dataTestId: "policy-exceptions",
        },
        userRole === "devops"
          ? null
          : {
              id: "workload_policy_menus",
              route: "/webclient/#workloadManagePolicies",
              title: "Policy Sets",
              dataTestId: "policy-sets",
            },
      ].filter(Boolean) as TMenuItem[],
    },
    {
      id: "compliance_standards_report_menu",
      route: "/webclient/#complianceStandardsReport",
      title: "Compliance",
      component: SafetyCertificateOutlined,
      dataTestId: "compliance-standards",
    },
    featuresList.includes("image-vulnerability")
      ? {
          id: "images_menu",
          route: "/webclient/#images",
          title: "Images",
          component: AppstoreOutlined,
          preview: true,
          dataTestId: "images",
        }
      : undefined,
    {
      id: "hostClusters_menu",
      route: "/webclient/#clusters",
      title: "Clusters",
      component: DeploymentUnitOutlined,
      dataTestId: "clusters",
    },
    {
      id: "policies_alarm_menu",
      route: "/webclient/#alarms/category/policyViolations",
      title: "Alarms",
      component: WarningOutlined,
      dataTestId: "policy-alarms",
    },
    {
      id: "dashboard_inventory_menu",
      route: "/webclient/#dashboards/inventory",
      title: "Inventory Report",
      component: ProfileOutlined,
      dataTestId: "inventory-report",
    },
    {
      id: "monitor_menu",
      route: "/webclient/#events",
      title: "Monitor",
      component: DesktopOutlined,
      dataTestId: "monitor",
      submenu: [
        {
          id: "policies_events_menu",
          route: "/webclient/#events",
          title: "Events",
          dataTestId: "monitor-policy-events",
        },
        {
          id: "audit_logs",
          route: "/webclient/#activity",
          title: "Activity",
          dataTestId: "monitor-audit-logs",
        },
      ],
    },
    {
      id: "iam_menu",
      route: "/webclient/#users",
      title: "Identity & Access",
      dataTestId: "identity-and-access",
      component: IdcardOutlined,
      submenu: [
        {
          id: "users_menu",
          route: "/webclient/#users",
          title: "Users",
          dataTestId: "identity-and-access-users",
        },
        {
          id: "teams_menu",
          route: "/webclient/#teams",
          title: "Teams",
          dataTestId: "identity-and-access-teams",
        },
        {
          id: "saml_menu",
          route: "/webclient/#saml",
          title: "SAML",
          dataTestId: "identity-and-access-saml",
        },
        {
          id: "oidc_menu",
          route: "/webclient/#oidc",
          title: "OIDC",
          dataTestId: "identity-and-access-oidc",
        },
        {
          id: "mfa_menu",
          route: "/webclient/#mfa",
          title: "MFA",
          dataTestId: "identity-and-access-mfa",
        },
      ],
    },
    {
      id: "settings_menu",
      route: "/webclient/#profile",
      title: "Settings",
      component: SettingOutlined,
      dataTestId: "settings",
      submenu: [
        {
          id: "registries_menu",
          route: "/webclient/#registries",
          title: "Image Registries",
          dataTestId: "settings-image-registries",
        },
        {
          id: "integration_menu",
          route: "/webclient/#integration",
          title: "Integrations",
          dataTestId: "settings-integration",
        },
        {
          id: "alarm_settings_menu",
          route: "/webclient/#alarms/alarmSettings",
          title: "Alarms Settings",
          dataTestId: "settings-alarms",
        },
        {
          id: "profile_menu",
          route: "/webclient/#profile",
          title: "Profile",
          dataTestId: "settings-profile",
        },
        {
          id: "account_menu",
          route: "/webclient/#account",
          title: "Account",
          dataTestId: "settings-account",
        },
        {
          id: "instructions",
          route: "/webclient/#instructions",
          title: "Instructions",
          dataTestId: "settings-instructions",
        },
      ],
    },
  ].filter(Boolean) as TMenuItem[];
};
