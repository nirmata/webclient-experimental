/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'appliedPolicies'
  | 'createdBy'
  | 'createdOn'
  | 'failedReason'
  | 'id'
  | 'issueId'
  | 'k8sPath'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespace'
  | 'operation'
  | 'parent'
  | 'parent'
  | 'resourceKind'
  | 'resourceName'
  | 'resourceRef'
  | 'sequenceId'
  | 'service'
  | 'source'
  | 'state'
  | 'systemSubTask'
  | 'uri'
  | 'user'
  | 'yamlAfterChange'
  | 'yamlBeforeChange';

export type TResourceChange_FailedReason = 'K8sAPIError' | 'ConnectionError' | 'InternalError';

export type TResourceChange_Operation = 'Create' | 'Update' | 'Delete';

export type TResourceChange_State =
  | 'pending'
  | 'accepted'
  | 'rejected'
  | 'applying'
  | 'completed'
  | 'failed'
  | 'canceled';

type TResourceChange = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  appliedPolicies?: TMayBe<Record<string, TMayBe<string>>>;
  failedReason?: TMayBe<TResourceChange_FailedReason>;
  issueId?: TMayBe<string>;
  k8sPath?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ResourceChange';
  namespace?: TMayBe<string>;
  operation?: TMayBe<TResourceChange_Operation>;
  parent?: TMayBe<TModelBase>;
  resourceKind?: TMayBe<string>;
  resourceName?: TMayBe<string>;
  resourceRef?: TMayBe<TModelBase>;
  sequenceId?: TMayBe<string>;
  service?: 'environments';
  source?: TMayBe<string>;
  state?: TMayBe<TResourceChange_State>;
  user?: TMayBe<string>;
  yamlAfterChange?: TMayBe<string>;
  yamlBeforeChange?: TMayBe<string>;
};

export default TResourceChange;
