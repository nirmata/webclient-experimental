/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TResultObjectReferenceData from './Policies.TResultObjectReferenceData';
import TResultTimestampData from './Policies.TResultTimestampData';
import TAlarm from './Policies.TAlarm';

export type TField =
  | 'addedByReconciler'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'autogenRule'
  | 'category'
  | 'clusterId'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'isRemediationAvailable'
  | 'labels'
  | 'message'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'policy'
  | 'policyReportAnnotations'
  | 'policyReportLabels'
  | 'policyReportName'
  | 'policyReportUid'
  | 'policyUid'
  | 'properties'
  | 'resources'
  | 'result'
  | 'rule'
  | 'scored'
  | 'service'
  | 'severity'
  | 'source'
  | 'timestamp'
  | 'uri'
  | 'violationId';

type TPolicyReportResult = Omit<TModelBase, 'service' | 'modelIndex'> & {
  addedByReconciler?: TMayBe<boolean>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  autogenRule?: TMayBe<boolean>;
  category?: TMayBe<TMayBe<string>[]>;
  clusterId?: TMayBe<string>;
  isRemediationAvailable?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  message?: TMayBe<string>;
  modelIndex?: 'PolicyReportResult';
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policy?: TMayBe<string>;
  policyReportAnnotations?: TMayBe<Record<string, TMayBe<string>>>;
  policyReportLabels?: TMayBe<Record<string, TMayBe<string>>>;
  policyReportName?: TMayBe<string>;
  policyReportUid?: TMayBe<string>;
  policyUid?: TMayBe<string>;
  properties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  resources?: TMayBe<TMayBe<TResultObjectReferenceData>[]>;
  result?: TMayBe<string>;
  rule?: TMayBe<string>;
  scored?: TMayBe<boolean>;
  service?: 'policies';
  severity?: TMayBe<string>;
  source?: TMayBe<string>;
  timestamp?: TMayBe<TMayBe<TResultTimestampData>>;
  violationId?: TMayBe<string>;
};

export default TPolicyReportResult;
