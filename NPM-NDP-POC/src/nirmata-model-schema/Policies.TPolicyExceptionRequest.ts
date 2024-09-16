/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TPolicyExceptionConfigurationData from './Policies.TPolicyExceptionConfigurationData';
import TResourceRequestUserActivityData from './Policies.TResourceRequestUserActivityData';
import TApprovalInfoData from './Policies.TApprovalInfoData';
import TAlarm from './Policies.TAlarm';
import TPolicyExceptionSpec from './Policies.TPolicyExceptionSpec';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'approvalInfo'
  | 'configuration'
  | 'createdBy'
  | 'createdOn'
  | 'deploymentType'
  | 'history'
  | 'id'
  | 'labels'
  | 'lastUserMessage'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'operation'
  | 'parent'
  | 'parent'
  | 'policyexceptionspecs'
  | 'reason'
  | 'requestedBy'
  | 'requestedByEmail'
  | 'resourceRef'
  | 'service'
  | 'state'
  | 'uri';

export type TPolicyExceptionRequest_DeploymentType = 'Automatic' | 'GitOps';

export type TPolicyExceptionRequest_Operation = 'create' | 'update' | 'delete';

export type TPolicyExceptionRequest_State =
  | 'pendingApproval'
  | 'approved'
  | 'rejected'
  | 'applying'
  | 'completed'
  | 'failedDeploy'
  | 'cancelled'
  | 'revoked';

type TPolicyExceptionRequest = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  approvalInfo?: TMayBe<TMayBe<TApprovalInfoData>[]>;
  configuration?: TMayBe<TMayBe<TPolicyExceptionConfigurationData>>;
  deploymentType?: TMayBe<TPolicyExceptionRequest_DeploymentType>;
  history?: TMayBe<TMayBe<TResourceRequestUserActivityData>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastUserMessage?: TMayBe<string>;
  modelIndex?: 'PolicyExceptionRequest';
  name?: TMayBe<string>;
  operation?: TMayBe<TPolicyExceptionRequest_Operation>;
  parent?: TMayBe<TModelBase>;
  policyexceptionspecs?: TMayBe<TMayBe<TPolicyExceptionSpec>[]>;
  reason?: TMayBe<string>;
  requestedBy?: TMayBe<string>;
  requestedByEmail?: TMayBe<string>;
  resourceRef?: TMayBe<TModelBase>;
  service?: 'policies';
  state?: TMayBe<TPolicyExceptionRequest_State>;
};

export default TPolicyExceptionRequest;
