/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TPolicyMetric from './Cluster.TPolicyMetric';

export type TField =
  | 'additionalProperties'
  | 'admissionRequestsByNamespace'
  | 'admissionRequestsByOperationKind'
  | 'admissionReviewDurationByNamespace'
  | 'admissionReviewDurationByOperationKind'
  | 'alarms'
  | 'ancestors'
  | 'averageAdmissionReviewDuration'
  | 'averagePolicyExecutionLatency'
  | 'averageRuleExecutionLatency'
  | 'controllerDropByName'
  | 'controllerDropTotal'
  | 'controllerReconcileByName'
  | 'controllerReconcileTotal'
  | 'controllerRequeueByName'
  | 'controllerRequeueTotal'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'lastSyncTime'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'policyCount'
  | 'policyExecutionLatency'
  | 'policyMetrics'
  | 'ruleCount'
  | 'ruleExecutionLatency'
  | 'ruleResult'
  | 'ruleResultByExecutionCause'
  | 'service'
  | 'syncState'
  | 'timestamp'
  | 'totalAdmissionRequests'
  | 'uri';

export type TClusterMetrics_SyncState = 'inProgress' | 'inSync';

type TClusterMetrics = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  admissionRequestsByNamespace?: TMayBe<object>;
  admissionRequestsByOperationKind?: TMayBe<object>;
  admissionReviewDurationByNamespace?: TMayBe<object>;
  admissionReviewDurationByOperationKind?: TMayBe<object>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  averageAdmissionReviewDuration?: TMayBe<object>;
  averagePolicyExecutionLatency?: TMayBe<object>;
  averageRuleExecutionLatency?: TMayBe<object>;
  controllerDropByName?: TMayBe<object>;
  controllerDropTotal?: TMayBe<object>;
  controllerReconcileByName?: TMayBe<object>;
  controllerReconcileTotal?: TMayBe<object>;
  controllerRequeueByName?: TMayBe<object>;
  controllerRequeueTotal?: TMayBe<object>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSyncTime?: TMayBe<number>;
  modelIndex?: 'ClusterMetrics';
  parent?: TMayBe<TModelBase>;
  policyCount?: TMayBe<object>;
  policyExecutionLatency?: TMayBe<object>;
  policyMetrics?: TMayBe<TMayBe<TPolicyMetric>[]>;
  ruleCount?: TMayBe<object>;
  ruleExecutionLatency?: TMayBe<object>;
  ruleResult?: TMayBe<object>;
  ruleResultByExecutionCause?: TMayBe<object>;
  service?: 'cluster';
  syncState?: TMayBe<TClusterMetrics_SyncState>;
  timestamp?: TMayBe<number>;
  totalAdmissionRequests?: TMayBe<object>;
};

export default TClusterMetrics;
