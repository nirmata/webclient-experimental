/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TClusterAddOnAction from './Cluster.TClusterAddOnAction';
import TVersion from './Cluster.TVersion';

export type TField =
  | 'additionalInfo'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'application'
  | 'availableVersions'
  | 'catalog'
  | 'channel'
  | 'createdBy'
  | 'createdOn'
  | 'currentVersion'
  | 'deployState'
  | 'environment'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'patches'
  | 'postCreateAction'
  | 'preCreateAction'
  | 'runningState'
  | 'service'
  | 'serviceName'
  | 'servicePort'
  | 'serviceScheme'
  | 'type'
  | 'upgradeActions'
  | 'uri'
  | 'veleroConfig';

export type TClusterAddOn_DeployState = 'pending' | 'inProgress' | 'completed' | 'failed';

export type TClusterAddOn_RunningState =
  | 'pending'
  | 'running'
  | 'failed'
  | 'unknown'
  | 'degraded'
  | 'executing'
  | 'created';

export type TClusterAddOn_ServiceScheme = 'http' | 'https';

export type TClusterAddOn_Type = 'required' | 'optional';

type TClusterAddOn = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalInfo?: TMayBe<Record<string, TMayBe<string>>>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  application?: TMayBe<string>;
  availableVersions?: TMayBe<TMayBe<TVersion>[]>;
  catalog?: TMayBe<string>;
  channel?: TMayBe<string>;
  currentVersion?: TMayBe<TModelBase>;
  deployState?: TMayBe<TClusterAddOn_DeployState>;
  environment?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ClusterAddOn';
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  patches?: TMayBe<Record<string, TMayBe<string>>>;
  postCreateAction?: TMayBe<TMayBe<TClusterAddOnAction>[]>;
  preCreateAction?: TMayBe<TMayBe<TClusterAddOnAction>[]>;
  runningState?: TMayBe<TClusterAddOn_RunningState>;
  service?: 'cluster';
  serviceName?: TMayBe<string>;
  servicePort?: TMayBe<number>;
  serviceScheme?: TMayBe<TClusterAddOn_ServiceScheme>;
  type?: TMayBe<TClusterAddOn_Type>;
  upgradeActions?: TMayBe<TMayBe<TClusterAddOnAction>[]>;
};

export default TClusterAddOn;
