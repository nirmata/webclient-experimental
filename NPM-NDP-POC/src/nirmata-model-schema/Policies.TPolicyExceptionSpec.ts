/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TPolicyExceptionConfigurationData from './Policies.TPolicyExceptionConfigurationData';
import TResourceMetadataData from './Policies.TResourceMetadataData';
import TAlarm from './Policies.TAlarm';
import TDeploymentProgress from './Policies.TDeploymentProgress';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'autoDeployChanges'
  | 'configuration'
  | 'createdBy'
  | 'createdOn'
  | 'deploymentType'
  | 'deploymentprogresses'
  | 'id'
  | 'isModified'
  | 'isModifiedInCluster'
  | 'labels'
  | 'latestDeployStatus'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri'
  | 'yaml';

export type TPolicyExceptionSpec_DeploymentType = 'Automatic' | 'GitOps';

export type TPolicyExceptionSpec_LatestDeployStatus =
  | 'pending'
  | 'executing'
  | 'completed'
  | 'failed'
  | 'revokePending'
  | 'revokeExecuting'
  | 'revoked'
  | 'revokeFailed'
  | 'needToDeploy'
  | 'needToRevoke'
  | 'createPrCreated'
  | 'mergeExpiryPr'
  | 'mergeRevokePr'
  | 'createPrFailed'
  | 'expiryPrFailed'
  | 'revokePrFailed';

type TPolicyExceptionSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  autoDeployChanges?: TMayBe<boolean>;
  configuration?: TMayBe<TMayBe<TPolicyExceptionConfigurationData>>;
  deploymentType?: TMayBe<TPolicyExceptionSpec_DeploymentType>;
  deploymentprogresses?: TMayBe<TMayBe<TDeploymentProgress>[]>;
  isModified?: TMayBe<boolean>;
  isModifiedInCluster?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  latestDeployStatus?: TMayBe<TPolicyExceptionSpec_LatestDeployStatus>;
  metadata?: TMayBe<TMayBe<TResourceMetadataData>>;
  modelIndex?: 'PolicyExceptionSpec';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'policies';
  yaml?: TMayBe<string>;
};

export default TPolicyExceptionSpec;
