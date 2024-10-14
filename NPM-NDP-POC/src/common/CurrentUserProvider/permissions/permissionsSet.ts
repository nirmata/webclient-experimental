const permissionsSet = [
    'publishReports:repositories',
    'delete:repositories',

    // Repository access control permissions
    'view:repository-acl',
    'edit:repository-acl',

    // Cluster access control permissions
    'view:cluster-acl',
    'edit:cluster-acl',

    // Namespace access control permissions
    'view:namespace-acl',
    'edit:namespace-acl',

    // Clusters
    'view:clusters',
    'edit:clusters',

    // Policies
    'view:policies',
    'view:clusters-policy-report',
    'view:policy-exceptions',

    // + Policy Sets
    'view:policy-sets',
    'view:policy-sets:policy-set-details',

    // + Policy reports
    'view:policy-reports',
    'view:policy-reports:categories',
    'view:policy-reports:clusters',
    'edit:policy-reports:clusters',
    'view:policy-reports:namespaces',
    'view:policy-reports:repositories',

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
    'edit:policysets:git:add',
    'edit:policysets:git:delete',
    'view:policysets:git:policies',
    'view:policysets:git:clusters',
    'view:policysets:git:settings',
    'view:policysets:yaml',

    //Compliance Standards Menu 
    'view:compliance-standards-report',

    //Host Clusters Menu
    'view:host-clusters',

    'edit:clusters:header-actions:add-cluster',

    //Clusters Page Table Actions
    'edit:clusters:table-actions:delete-cluster',

    //Clusters - Cluster Details Header Actions and Header Content 
    'view:clusters:cluster-details:read-only-message',
    'edit:clusters:cluster-details:header-actions:alarms',
    'view:cluster:cluster-details:header-action:policy-violations',
    'edit:clusters',
    'edit:clusters:cluster-details:header-actions:remove-cluster',
    'view:clusters:cluster-details:header-actions:download-controller-yaml',

    // Clusters - Cluster Details - Page
    'view:cluster:cluster-details',

    //Clusters - Cluster Details - Tabs
    'view:cluster:cluster-details:tabs:overview',
    'view:cluster:cluster-details:tabs:resources',
    'view:cluster:cluster-details:tabs:metrics',
    'view:cluster:cluster-details:tabs:violations',
    'view:cluster:cluster-details:tabs:compliance',

    //Repositories Menu 
    'view:repositories',

    //Repo - Header Action
    'edit:repositories:header-action:add-repo',
    'view:repositories:header-actions:add-repo',

    //Policies Alarm Menu
    'view:policies-alarm',
    'edit:policies-alarms:dismiss',
    'edit:policies-alarms:delete',
    'view:policies-alarms:alarms-details',

    //Dashboard Inventory Menu
    'view:dashboard-inventory',

    //Monitor Menu
    'view:monitor',

    //Policies - Events Menu
    'view:policies-events',

    //Audit Logs Menu 
    'view:audit-logs',

    //IAM Menu
    'view:iam',

    //IAM Menu - Users
    'view:users',
    'view:IAM:users:view-info',
    'edit:IAM:users:add-user',
    'edit:IAM:users:edit-user',
    'edit:IAM:users:delete-user',
    'edit:IAM:users:users-details:revoke-api-token',


    //Teams Page
    'view:teams',
    'edit:teams:header-actions:configure-team-settings',
    'edit:teams:header-actions:configure-team-settings',

    // + Teams Details Page Header Actions 
    'edit:teams:team-details:header-actions:schedule-email',

    'edit:teams:team-details:header-actions:delete-team',

    // + Teams Details Page Team Section 
    'view:teams:team-details:team-section',
    'edit:teams:team-details:team-section:edit-team',
    'edit:teams:team-details:team-section:add-team',

    // + Teams Details Page Members Section 
    'view:teams:team-details:members-section',
    'edit:teams:team-details:members-section:remove-member',
    'edit:teams:team-details:members-section:add-member',

    // + Teams Details Page Repo Settings
    'edit:teams:team-details:repo-settings',
    'edit:teams:team-details:repo-settings:enable-repo-publishing',
    'view:teams:team-details:repo-settings:key-info',

    // + Teams Details Page Namespace Section 
    'view:team:team-details:namespace-section',
    'edit:teams:team-details:namespace-section:delete-namespace',
    'edit:teams:team-details:namespace-section:add-namespace',


    // + Saml
    'view:saml',
    'edit:saml:enable-saml',
    'view:saml:idp-settings',
    'view:saml:sp-settings',
    'edit:saml:update-sp-details',


    //OIDC Page
    'view:oidc',
    'edit:oidc',


    // + MFA
    'view:mfa',

    // + MFA - Page Actions
    'edit:mfa:user-mfa-config',
    'edit:mfa:enable-mfa-all-users',
    'view:mfa:user-settings',

    'view:smtp',

    //Settings Menu
    'view:settings',

    // Registries Page
    'view:registries',

    // Registries Page - Header Actions
    'edit:image-registries:header-actions:add-registry',

    // Registries Page - Table Actions
    'edit:image-registries:table-actions',
    'edit:image-registries:table-actions:edit-registry',
    'edit:image-registries:table-actions:delete-registry',


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

    'view:alarm-settings',
    'view:policy-exceptions-settings',

    // + Account 
    'view:account',

    // + Account + Sections 
    'view:account:license',
    'view:account:quota-and-usage',
    'edit:account:n4k-license',

    // + Account + n4k License + Header Actions
    'edit:account:n4k-license:header-action:add-usage-details',

    // + Account + n4k License + Table Actions
    'edit:account:n4k-license:table-actions',
    'edit:account:n4k-license:table-actions:update-cluster',
    'edit:account:n4k-license:table-actions:remove-cluster',

    // + Account + Header Actions
    'edit:account:header-actions:edit-account-info',
    'edit:account:header-actions:delete-account',
    'edit:account:header-actions:renew-enterprise-license',
    'edit:account:header-actions:request-enterprise-license',

    'view:instructions',

    //Settings > Alarms Settings
    'view:alarm-settings',
    'edit:settings:policies-alarms:add-notifier',
    'edit:settings:policies-alarms:edit-notifier',
    'edit:settings:policies-alarms:remove-notifier',
    'edit:settings:policies-alarms:add-type',
    'edit:settings:policies-alarms:disable-type',
    'edit:settings:policies-alarms:edit-type',
    'edit:settings:policies-alarms:delete-type',

    // + Profile
    'view:profile',
    'edit:profile',
    'view:profile:user-permissions',
    'view:profile:teams',

    // Dashboard
    'view:dashboard-overview',
    'view:dashboard',
    'view:dashboard-counts',

    'view:activity',
    'view:alarm',
    'view:alarm-sub',
    'view:applications',
    'view:services',
    'view:environmentTypes',
    'view:applications-alarm',
    'view:clusters-alarm',
    'view:clusterPolicy',
    'view:hostgroups',
    'view:providers',
    'view:setup',
    'view:gitSettings',
    'view:managed-rollouts',
    'view:all-hosts-containers',
    'view:all-hosts-containers',
    'view:dashboard-compliance',
    'view:nirmataV2',
    'view:credential-mnirmataV2',
    'view:jira',
    'view:kyverno-config',
    'view:manageKubeConfig',
    'view:images',
    'view:api-token',

    // Pages

    // Dashboard Content
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
    'view:dashboard:events-summary',

    //Policy Reports - Clusters - Actions
    'edit:policy-reports:cluster:email-violation-report',


    //Policy Reports - Clusters - Cluster Page Tabs
    'view:policy-reports:cluster:namespaces',
    'view:policy-reports:cluster:results',
    'view:policy-reports:cluster:policies',
    'view:policy-reports:cluster:metrics',

    //Policy Reports - Clusters - Cluster - Policies Tab 
    'edit:policy-reports:clusters:cluster-policies-delete',

    //Policy Reports - Clusters - Cluster Page  
    'edit:policy-reports:clusters:header-actions:share-report',

    //Policy Reports - Namespace - Namespace Details Tabs 
    'view:policy-reports:namespaces:tabs:resources',
    'view:policy-reports:namespaces:tabs:findings',
    'view:policy-reports:namespaces:tabs:compliance',
    'view:policy-reports:namespaces:tabs:events',

    //Policy Reports - Namespace - Namespace Details Actions 
    'edit:policy-reports:namespaces:header-actions:create-policy-exception',
    'view:policy-reports:namespaces:header-actions:alarms',
    'edit:policy-reports:namespaces:header-actions:share-report',

    //Policy Reports - Repositories - Repository Details Page Tabs
    'view:policy-reports:repositories:repository-details:findings',
    'view:policy-reports:repositories:repository-details:files',
    'view:policy-reports:repositories:repository-details:compliance',

    //Policy Reports - Repositories - Repository Details Page Actions
    'edit:policy-reports:header-actions:enable-cis-benchmarks',
    'edit:policy-reports:header-actions:scheduled-reports',

    //Alarms
    'edit:policies-alarms:dismiss',
    'edit:policies-alarms:delete',

    //Compliance Standards Header Actions
    'edit:compliance-standards:header-actions:add-standard',
    'edit:compliance-standards:header-actions:generate-report',
    'view:compliance-standards:header-actions:scheduled-reports',

    //Compliance Standards - Card Actions
    'view:compliance-standards:card-actions:details',
    'edit:compliance-standards:card-actions:disable',
    'edit:compliance-standards:card-actions:enable',
    'edit:compliance-standards:card-actions:delete',

    //Compliance Standards - Compliance Standard Details Page Tabs
    'view:compliance-standards:compliance-details:tabs:cis-controls',
    'view:compliance-standards:compliance-details:tabs:cis-clusters',
    'view:compliance-standards:compliance-details:tabs:controls',
    'view:compliance-standards:compliance-details:tabs:clusters',

    //Compliance Standards - Conmpliance Standard Details Controls
    "edit:compliance-standards:compliance-details:compliance-controls:marking",
    "edit:compliance-standards:compliance-details:compliance-controls:update-status",
    "edit:compliance-standards:compliance-details:compliance-controls:disable",
    "edit:compliance-standards:compliance-details:compliance-controls:delete",

    //Compliance Standards - Compliance Standard Details Header Actions
    'edit:compliance-standards:compliance-details:header-actions:configure-compliance-standard',
    'edit:compliance-standards:compliance-details:header-actions:edit',
    'edit:compliance-standards:compliance-details:header-actions:clone',
    'edit:compliance-standards:compliance-details:header-actions:disable',
    'edit:compliance-standards:compliance-details:header-actions:generate-report',
    'edit:compliance-standards:compliance-details:header-actions:delete',

    //Compliance Standards - Compliance Details - Controls Tab Table Actions
    'edit:compliance-standards:compliance-details:clusters:table-actions:remove-cluster',

    //Compliance Standards - Compliance Details - Clusters Tab Table Actions
    'view:compliance-standards:compliance-details:controls:table-actions:passed',
    'view:compliance-standards:compliance-details:controls:table-actions:warnings',
    'view:compliance-standards:compliance-details:controls:table-actions:failed',
    'edit:compliance-standards:compliance-details:controls:table-actions:edit',
    'edit:compliance-standards:compliance-details:controls:table-actions:mark-control',
    'edit:compliance-standards:compliance-details:controls:table-actions:update-status',
    'edit:compliance-standards:compliance-details:controls:table-actions:enable-disable',
    'edit:compliance-standards:compliance-details:controls:table-actions:delete',

    // Modern Dashboard 
    'view:dashboard-inventory:clusters',
    'view:dashboard-inventory:namespaces',
    'view:dashboard-inventory:repository',
    'view:dashboard-policies:policies',
    'view:dashboard-policies:failed',
    'view:dashboard-policies:passed',
    'view:dashboard-policies:remediations',
    'view:dashboard-policies:rules',
    'view:dashboard-policies:errors',
    'view:dashboard-policies:warnings',
    'view:dashboard-policies:skipped',
    'view:dashboard-alarms:critical-alarms',
    'view:dashboard-alarms:major-alarms',
    'view:dashboard-alarms:violation-events',
    'view:dashboard-alarms:exception-events',
    'view:dashboard-complaince:compliance-card'
] as const;