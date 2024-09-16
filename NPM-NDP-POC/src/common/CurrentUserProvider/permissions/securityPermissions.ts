import { TPermissionsSet } from './userPermissions';

export const securityPermissions: TPermissionsSet = [
    // Settings Menu

    // + Profile
    'view:profile',

    // Policies
    'view:policies',

    // Dashboard Content
    'view:dashboard-overview',
    'view:dashboard-counts',
    // row1
    'view:dashboard:clusters-management-card',
    'view:dashboard:policies-management-card',
    'view:dashboard:policies-management-card:empty-message',
    // row 2
    'view:dashboard:policy-violation-by-category-chart',
    'view:dashboard:policy-violation-by-provider-chart',
    'view:dashboard:image-scan-report-chart',
    // row 3
    'view:dashboard:policy-violation-by-clusters-chart',
    'view:dashboard:policy-violation-by-namespace-chart',
    // 'view:dashboard:events-summary',

    // + Policy reports
    'view:policy-reports',
    'view:policy-reports:categories',
    'view:policy-reports:clusters',
    'view:policy-reports:namespaces',
    'view:policy-reports:repositories',

    // + Policy Reports - Header actions
    'edit:policy-reports:header-actions:scheduled-reports',

    //Policy Reports - Clusters - Actions
    'edit:policy-reports:cluster:email-violation-report',


    // + Policy Reports - Clusters - Cluster Page Tabs
    'view:cluster-acl',
    'edit:cluster-acl',
    'view:policy-reports:cluster:namespaces',
    'view:policy-reports:cluster:results',
    'view:policy-reports:cluster:policies',
    'view:policy-reports:cluster:metrics',

    //Policy Reports - Clusters - Cluster Page  
    'edit:policy-reports:clusters:header-actions:share-report',

    // + Policy Reports - Namespace - Namespace Details Tabs 
    'view:policy-reports:namespaces:tabs:resources',
    'view:policy-reports:namespaces:tabs:findings',
    'view:policy-reports:namespaces:tabs:compliance',
    'view:policy-reports:namespaces:tabs:events',

    //+ Policy Reports - Namespace - Namespace Details Actions 
    'view:namespace-acl',
    'edit:namespace-acl',
    'edit:policy-reports:namespaces:header-actions:create-policy-exception',
    'view:policy-reports:namespaces:header-actions:alarms',
    'edit:policy-reports:namespaces:header-actions:share-report',

    //Policy Reports - Repositories - Repository Details Page Tabs
    'view:policy-reports:repositories:repository-details:findings',
    'view:policy-reports:repositories:repository-details:files',

    // + Policy Exceptions
    'view:policy-exceptions',
    'view:policy-exceptions:header-actions:request-policy-exception',
    'view:policy-exceptions:header-actions:refresh-exceptions-list',
    'view:policy-exceptions:tabs:requests',
    'view:policy-exceptions:tabs:deployed-exceptions',
    'view:policy-exceptions:user-filter',
    'view:policy-exceptions:events',
    'edit:policy-exceptions:reviewers',
    'edit:policy-exceptions:exception-revoke',
    'edit:policy-exceptions:exception-delete',

    // + Policy Sets
    'view:policysets',
    'view:policysets:git',
    'view:policysets:git:policies',
    'view:policysets:git:clusters',
    'view:policysets:git:settings',
    'view:policysets:yaml',

    // Compliance Standards Menu 
    'view:compliance-standards-report',

    //Compliance Standards Header Actions
    'view:compliance-standards:header-actions:scheduled-reports',

    //Compliance Standards - Card Actions
    'view:compliance-standards:card-actions:details',

    //Compliance Standards - Compliance Standard Details Page Tabs
    'view:compliance-standards:compliance-details:tabs:cis-controls',
    'view:compliance-standards:compliance-details:tabs:cis-clusters',
    'view:compliance-standards:compliance-details:tabs:controls',
    'view:compliance-standards:compliance-details:tabs:clusters',

    //Compliance Standards - Compliance Details - Clusters Tab Table Actions
    'view:compliance-standards:compliance-details:controls:table-actions:passed',
    'view:compliance-standards:compliance-details:controls:table-actions:warnings',
    'view:compliance-standards:compliance-details:controls:table-actions:failed',

    //Clusters - Cluster Details Header Actions and Header Content
    'view:host-clusters', // Displays "clusters" menu item in the left nav
    'view:clusters:cluster-details:read-only-message', // Displays a subtitle informing the user has read-only access
    'view:clusters:cluster-details:header-actions:download-controller-yaml',
    'view:cluster:cluster-details:header-action:policy-violations',

    // Clusters - Cluster Details - Page
    'view:cluster:cluster-details',

    //Clusters - Cluster Details - Tabs
    'view:cluster:cluster-details:tabs:overview',
    'view:cluster:cluster-details:tabs:resources',
    'view:cluster:cluster-details:tabs:metrics',
    'view:cluster:cluster-details:tabs:violations',
    'view:cluster:cluster-details:tabs:compliance',

    // Repositories Menu
    'view:repository-acl',
    'edit:repository-acl',
    'view:repositories',

    // Settings Menu
    'view:settings',

    //Settings - Integrations 
    'view:integration',
    'edit:settings:integrations:view-devops',
    'edit:settings:integrations:view-security',

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

    //Settings - Integrations - Venafi
    'edit:settings:integrations:venafi:add-settings',
    'edit:settings:integrations:venafi:edit-settings',
    'edit:settings:integrations:venafi:delete-settings',

    // Alarms Menu
    'view:policies-alarm',
    'view:policies-alarms:alarms-details',

    // Monitor Menu
    'view:monitor',

    // Policies - Events Menu
    'view:policies-events',

    // Audit Logs Menu 
    'view:audit-logs',

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
