/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterId'
  | 'clusterName'
  | 'createdBy'
  | 'createdOn'
  | 'deployStatus'
  | 'error'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

export type TDeployToCluster_DeployStatus = 'pendingDeploy' | 'deploying' | 'deployed' | 'failedDeploy';

type TDeployToCluster = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterId?: TMayBe<string>;
  clusterName?: TMayBe<string>;
  deployStatus?: TMayBe<TDeployToCluster_DeployStatus>;
  error?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'DeployToCluster';
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
};

export default TDeployToCluster;
