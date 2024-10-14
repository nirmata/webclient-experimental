/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'actionTimeoutInSec'
  | 'actionType'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'sequenceNumber'
  | 'service'
  | 'state'
  | 'uri'
  | 'waitForCompletion';

export type TClusterAddOnAction_ActionType =
  | 'CreateApplication'
  | 'CheckResourceExists'
  | 'CheckState'
  | 'ApplyClusterYaml'
  | 'AddSecret'
  | 'AddTLSSecrets'
  | 'DeployPolicies'
  | 'FetchPolicyReports'
  | 'UpgradeApplication';

export type TClusterAddOnAction_State = 'Pending' | 'InProgress' | 'Completed' | 'Failed';

type TClusterAddOnAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  actionTimeoutInSec?: TMayBe<number>;
  actionType?: TMayBe<TClusterAddOnAction_ActionType>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  modelIndex?: 'ClusterAddOnAction';
  parent?: TMayBe<TModelBase>;
  sequenceNumber?: TMayBe<number>;
  service?: 'cluster';
  state?: TMayBe<TClusterAddOnAction_State>;
  waitForCompletion?: TMayBe<boolean>;
};

export default TClusterAddOnAction;
