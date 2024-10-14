import { TMenuItem } from "./types";
import {
  DeploymentUnitOutlined,
  FileProtectOutlined,
  DashboardOutlined,
  DesktopOutlined,
  IdcardOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Workloads from "../../assets//workloads.svg";
import { ImageComponent, withImageComponent } from "./use-get-n4k-menu-list";

const WorkloadComponent = withImageComponent(
  ImageComponent,
  Workloads,
  "WorkloadsIcon"
);

export const useGetNirmataPlatformMenuList = (
  featuresList: string[]
): TMenuItem[] => {
  return [
    {
      id: "overview_menu",
      route: "/webclient/dashboards/overview",
      title: "Home",
      component: DashboardOutlined,
      dataTestId: "dashboard",
      submenu: [
        {
          id: "getting_started_menu",
          route: "/webclient/getstarted",
          title: "Get Started",
          dataTestId: "dashboard-get-started",
        },
        {
          id: "dashboard_overview_menu",
          route: "/webclient/dashboards/overview",
          title: "Dashboard",
          dataTestId: "dashboard-overview",
        },
        {
          id: "activity_menu",
          route: "/webclient/activity",
          title: "Activity",
          dataTestId: "dashboard-activity",
        },
      ],
    },
    {
      id: "workload_menu",
      route: "/webclient/catalog",
      title: "Workloads",
      component: WorkloadComponent,
      dataTestId: "workloads",
      submenu: [
        {
          id: "currentCatalog_menu",
          route: "/webclient/catalog",
          title: "Catalogs",
          dataTestId: "workloads-catalogs",
        },
        {
          id: "chartRepositories_menu",
          route: "/webclient/chartRepositories",
          title: "Helm Charts",
          dataTestId: "workloads-helm-charts",
        },
        {
          id: "env_menu",
          route: "/webclient/environments",
          title: "Environments",
          dataTestId: "workloads-environments",
        },
        {
          id: "environmentTypes_menu",
          route: "/webclient/envtypes",
          title: "Environment Types",
          dataTestId: "workloads-environments-type",
        },
        {
          id: "applications_alarm_menu",
          route: "/webclient/alarms/category/applications",
          title: "Alarms",
          dataTestId: "workloads-alarms",
        },
      ],
    },
    {
      id: "policies_menu",
      route: "/webclient/policiesDashboard",
      title: "Policies",
      component: FileProtectOutlined,
      dataTestId: "policy",
      submenu: [
        {
          id: "policies_dashboard_menu",
          route: "/webclient/policiesDashboard",
          title: "Dashboard",
          dataTestId: "policies-dashboard",
        },
        {
          id: "workload_policy_menus",
          route: "/webclient/workloadManagePolicies",
          title: "Policy Sets",
          dataTestId: "policy-sets",
        },
        {
          id: "clusters_policy_report_menus",
          route: "/webclient/clustersPolicyReport",
          title: "Policy Reports",
          dataTestId: "policy-reports",
        },
        {
          id: "policy_exceptions_menus",
          route: "/webclient/policyExceptions",
          title: "Policy Exceptions",
          dataTestId: "policy-exceptions",
        },

        featuresList.includes("image-vulnerability")
          ? {
              id: "images_menu",
              route: "/webclient/images",
              title: "Images",
              preview: true,
              dataTestId: "images",
            }
          : undefined,
        {
          id: "policies_alarm_menu",
          route: "/webclient/alarms/category/policyViolations",
          title: "Alarms",
          dataTestId: "policy-alarms",
        },
        {
          id: "compliance_standards_report_menu",
          route: "/webclient/complianceStandardsReport",
          title: "Compliance",
          dataTestId: "policy-compliance-standards",
        },
      ].filter(Boolean) as TMenuItem[],
    },
    {
      id: "hostClusters_menu",
      route: "/webclient/clusters",
      title: "Clusters",
      component: DeploymentUnitOutlined,
      dataTestId: "clusters",
      submenu: [
        {
          id: "clusters_alarm_menu",
          route: "/webclient/alarms/category/clusters",
          title: "Alarms",
          dataTestId: "clusters-alarms",
        },
        {
          id: "hostClusters_menu",
          route: "/webclient/clusters",
          title: "Clusters",
          dataTestId: "clusters-clusters",
        },
        {
          id: "clusterPolicy_menu",
          route: "/webclient/clusterTypes",
          title: "Cluster Types",
          dataTestId: "clusters-clustertypes",
        },
        {
          id: "providers_menu",
          route: "/webclient/cloudcredentials",
          title: "Cloud Credentials",
          dataTestId: "clusters-cloud-credentials",
        },
        {
          id: "dashboard_inventory_menu",
          route: "/webclient/dashboards/inventory",
          title: "Inventory Report",
          dataTestId: "clusters-inventory-report",
        },
      ],
    },
    {
      id: "monitor_menu",
      route: "/webclient/events",
      title: "Monitor",
      component: DesktopOutlined,
      dataTestId: "monitor",
      submenu: [
        {
          id: "policies_events_menu",
          route: "/webclient/events",
          title: "Events",
          dataTestId: "monitor-policy-events",
        },
      ],
    },
    {
      id: "iam_menu",
      route: "/webclient/users",
      title: "Identity & Access",
      component: IdcardOutlined,
      dataTestId: "identity-and-access",
      submenu: [
        {
          id: "users_menu",
          route: "/webclient/users",
          title: "Users",
          dataTestId: "identity-and-access-users",
        },
        {
          id: "teams_menu",
          route: "/webclient/teams",
          title: "Teams",
          dataTestId: "identity-and-access-teams",
        },
        {
          id: "saml_menu",
          route: "/webclient/saml",
          title: "SAML",
          dataTestId: "identity-and-access-saml",
        },
        {
          id: "oidc_menu",
          route: "/webclient/oidc",
          title: "OIDC",
          dataTestId: "identity-and-access-oidc",
        },
        {
          id: "mfa_menu",
          route: "/webclient/mfa",
          title: "MFA",
          dataTestId: "identity-and-access-mfa",
        },
      ],
    },
    {
      id: "settings_menu",
      route: "/webclient/profile",
      title: "Settings",
      dataTestId: "settings",
      component: SettingOutlined,
      submenu: [
        {
          id: "registries_menu",
          route: "/webclient/registries",
          title: "Image Registries",
          dataTestId: "settings-image-registries",
        },
        {
          id: "integration_menu",
          route: "/webclient/integration",
          title: "Integrations",
          dataTestId: "settings-integration",
        },
        {
          id: "alarm_settings_menu",
          route: "/webclient/alarms/alarmSettings",
          title: "Alarms Settings",
          dataTestId: "settings-alarms",
        },
        {
          id: "profile_menu",
          route: "/webclient/profile",
          title: "Profile",
          dataTestId: "settings-profile",
        },
        {
          id: "account_menu",
          route: "/webclient/account",
          title: "Account",
          dataTestId: "settings-account",
        },
        {
          id: "kyverno_config",
          route: "/webclient/kyvernoConfigurations",
          title: "Kyverno Configurations",
          dataTestId: "settings-kyverno-config",
        },
        {
          id: "instructions",
          route: "/webclient/instructions",
          title: "Instructions",
          dataTestId: "settings-instructions",
        },
        {
          id: "manageKubeConfig_menu",
          route: "/webclient/manageKubeConfig",
          title: "Manage Kubeconfig",
          dataTestId: "settings-manage-kubeconfig",
        },
      ],
    },
  ].filter(Boolean);
};
