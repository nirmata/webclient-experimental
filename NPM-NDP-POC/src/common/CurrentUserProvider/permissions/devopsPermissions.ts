import { TPermissionsSet } from './userPermissions';

export const devopsPermissions: TPermissionsSet = [
    // Repository access control permissions
    'view:repository-acl',

    // Dashboard
    'view:dashboard-overview',

    // Policies
    'view:policies',
    'view:policies-alarm',

    // + Policy reports
    'view:policy-reports',
    'view:policy-reports:categories',
    'view:policy-reports:clusters',
    'view:policy-reports:namespaces',
    'view:policy-reports:repositories',

    // + Policy Exceptions
    'view:policy-exceptions',
    'view:policy-exceptions:header-actions:request-policy-exception',
    'view:policy-exceptions:header-actions:refresh-exceptions-list',
    'view:policy-exceptions:tabs:requests',
    'view:policy-exceptions:tabs:deployed-exceptions',
    'edit:policy-exceptions:exception-delete',

    // Settings Menu
    'view:settings',
    'view:instructions',

    // Settings Integrations
    'view:integration',
    'edit:settings:integrations:view-devops',

    //Settings - Integrations - Git
    'edit:settings:integrations:git:add-credentials',
    'edit:settings:integrations:git:edit-credentials',
    'edit:settings:integrations:git:delete-credentials',

    //Settings - Integrations - Jira
    'edit:settings:integrations:jira:add-settings',
    'edit:settings:integrations:jira:edit-settings',
    'edit:settings:integrations:jira:delete-settings',

    //Settings - Integrations - Slack
    'edit:settings:integrations:slack:add-credentials',
    'edit:settings:integrations:slack:edit-credentials',
    'edit:settings:integrations:slack:delete-credentials',

    // + Profile
    'view:profile',
    'view:profile:user-permissions',
    'view:profile:teams',

    // Dashboard 
    'view:dashboard',
    'view:dashboard-counts',

    'view:applications',
    'view:services',
    'view:gitSettings',
    'view:all-hosts-containers',
    'view:nirmataV2',
    'view:credential-mnirmataV2',
    'view:jira',
    'view:kyverno-config',

    // Dashboard Content
    'view:dashboard:policies-management-card',

    //Policy Reports - Clusters - Actions
    'edit:policy-reports:cluster:email-violation-report',


    //Policy Reports - Clusters - Cluster Page Tabs
    'view:policy-reports:cluster:namespaces',
    'view:policy-reports:cluster:results',
    'view:policy-reports:cluster:policies',
    'view:policy-reports:cluster:metrics',

    //Policy Reports - Namespace - Namespace Details Tabs 
    'view:policy-reports:namespaces:tabs:resources',
    'view:policy-reports:namespaces:tabs:findings',
    'view:policy-reports:namespaces:tabs:compliance',

    //Policy Reports - Namespace - Namespace Details Actions 
    'edit:policy-reports:namespaces:header-actions:create-policy-exception',
    'view:policy-reports:namespaces:header-actions:alarms',

    //Policy Reports - Repositories - Repository Details Page Tabs
    'view:policy-reports:repositories:repository-details:findings',
    'view:policy-reports:repositories:repository-details:compliance',
    'view:policy-reports:repositories:repository-details:files',

    // Repositories Menu 
    'view:repositories',

    //Repo - Header Action
    'view:repositories:header-actions:add-repo',

    // Modern Dashboard
    'view:dashboard-inventory:clusters',
    'view:dashboard-inventory:namespaces',
    'view:dashboard-inventory:repository',
    'view:dashboard-policies:failed',
    'view:dashboard-policies:passed',
    'view:dashboard-policies:remediations',
    'view:dashboard-policies:errors',
    'view:dashboard-policies:warnings',
    'view:dashboard-policies:skipped',
    'view:dashboard-alarms:critical-alarms',
    'view:dashboard-alarms:major-alarms',
];
