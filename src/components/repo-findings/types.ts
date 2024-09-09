export interface TImpactedResourceResponse {
    start: number
    count: number
    total: number
    entries: ImpactedResourceEntry[]
  }
  
  export interface ImpactedResourceEntry {
    id: string
    service: string
    modelIndex: string
    uri: string
    createdBy: string
    createdOn: number
    modifiedBy: string
    modifiedOn: number
    generation: number
    ancestors: any[]
    additionalProperties: AdditionalProperties
    labels: Labels
    alarms: any[]
    namespace: any
    policy: string
    rule: string
    resources: any[]
    category: string[]
    message: string
    result: string
    severity: string
    scored: any
    timestamp: any
    clusterId: any
    policyUid: any
    policyReportUid: any
    policyReportName: any
    policyReportLabels: PolicyReportLabels
    policyReportAnnotations: PolicyReportAnnotations
    source: string
    violationId: any
    properties: Properties
  }
  
  export interface AdditionalProperties {
    tenantId: string
  }
  
  export interface Labels {
    "policies.nirmata.io/resource-type": string
    "git.policies.nirmata.io/branch": string
    "policies.nirmata.io/source-id": string
    "policies.nirmata.io/resource-id": string
    "git.my-company.io/organization": string
    "git.policies.nirmata.io/commit": string
    "git.my-company.io/provider": string
    "policies.nirmata.io/source-type": string
  }
  
  export interface PolicyReportLabels {}
  
  export interface PolicyReportAnnotations {}
  
  export interface Properties {}
  