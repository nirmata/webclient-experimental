/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TModelBase from './TModelBase';

export type TField =
  | 'clusterRef'
  | 'error'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'pullRequestLink'
  | 'resourceRef'
  | 'state'
  | 'time';

export type TResourceDeployStatusData_State =
  | 'pending'
  | 'executing'
  | 'completed'
  | 'failed'
  | 'revokePending'
  | 'revokeExecuting'
  | 'revoked'
  | 'revokeFailed'
  | 'createDeployPr'
  | 'createRevokePr'
  | 'createExpiryPr'
  | 'mergeDeployPr'
  | 'mergeRevokePr'
  | 'mergeExpiryPr'
  | 'deployPrFailed'
  | 'revokePrFailed'
  | 'expiryPrFailed';

type TResourceDeployStatusData = {
  clusterRef?: TMayBe<TModelBase>;
  error?: TMayBe<string>;
  modifiedBy?: TMayBe<string>;
  modifiedOn?: TMayBe<number>;
  pullRequestLink?: TMayBe<string>;
  resourceRef?: TMayBe<TModelBase>;
  service?: 'policies';
  state?: TMayBe<TResourceDeployStatusData_State>;
  time?: TMayBe<string>;
};

export default TResourceDeployStatusData;
