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

export type TDeployToClusterVenafiConf_DeployStatus = 'pending' | 'inProgress' | 'completed' | 'failed';

type TDeployToClusterVenafiConf = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterId?: TMayBe<string>;
  clusterName?: TMayBe<string>;
  deployStatus?: TMayBe<TDeployToClusterVenafiConf_DeployStatus>;
  error?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'DeployToClusterVenafiConf';
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
};

export default TDeployToClusterVenafiConf;
