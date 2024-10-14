/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarmDismissed'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'message'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'status'
  | 'timestamp'
  | 'type'
  | 'uri'
  | 'value';

export type THealthCondition_Type =
  | 'policyDeployed'
  | 'policyReady'
  | 'policyExecutionCount'
  | 'policyModified'
  | 'policyDeleted'
  | 'kyvernoDeploymentModified'
  | 'kyvernoDeploymentDeleted'
  | 'kyvernoServiceModified'
  | 'kyvernoServiceDeleted'
  | 'kyvernoClusterRoleModified'
  | 'kyvernoClusterRoleDeleted'
  | 'kyvernoClusterRoleBindingModified'
  | 'kyvernoClusterRoleBindingDeleted'
  | 'kyvernoRunning'
  | 'kyvernoHAMode'
  | 'kyvernoProcessingPolicy'
  | 'kyvernoRunningOnExpectedReplicas';

type THealthCondition = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarmDismissed?: TMayBe<boolean>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  message?: TMayBe<string>;
  modelIndex?: 'HealthCondition';
  modifiedBy?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  status?: TMayBe<boolean>;
  timestamp?: TMayBe<number>;
  type?: TMayBe<THealthCondition_Type>;
  value?: TMayBe<number>;
};

export default THealthCondition;
