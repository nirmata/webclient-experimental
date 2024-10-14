/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'acceptSelfSignedCertificate'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'caCert'
  | 'certPath'
  | 'clusterName'
  | 'clusterRef'
  | 'controllerReadOnlyAccess'
  | 'createdBy'
  | 'createdOn'
  | 'customCAConfigMap'
  | 'excludedNamespaces'
  | 'httpProxy'
  | 'httpsProxy'
  | 'id'
  | 'imageRegistry'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'noProxy'
  | 'params'
  | 'parent'
  | 'parent'
  | 'platform'
  | 'policySets'
  | 'profile'
  | 'progressState'
  | 'service'
  | 'state'
  | 'tlsCert'
  | 'tlsKey'
  | 'token'
  | 'uri';

export type TClusterRegistrationRequest_Platform = 'aks' | 'eks' | 'openshift';

export type TClusterRegistrationRequest_Profile = 'dev' | 'prod' | 'test';

export type TClusterRegistrationRequest_ProgressState =
  | 'clusterAdded'
  | 'controllerDeployed'
  | 'operatorDeployed'
  | 'operatorRunning'
  | 'kyvernoReady'
  | 'policiesReady';

export type TClusterRegistrationRequest_State = 'created' | 'inProgress' | 'completed' | 'failed' | 'expired';

type TClusterRegistrationRequest = Omit<TModelBase, 'service' | 'modelIndex'> & {
  acceptSelfSignedCertificate?: TMayBe<boolean>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  caCert?: TMayBe<string>;
  certPath?: TMayBe<string>;
  clusterName?: TMayBe<string>;
  clusterRef?: TMayBe<TModelBase>;
  controllerReadOnlyAccess?: TMayBe<boolean>;
  customCAConfigMap?: TMayBe<string>;
  excludedNamespaces?: TMayBe<TMayBe<string>[]>;
  httpProxy?: TMayBe<string>;
  httpsProxy?: TMayBe<string>;
  imageRegistry?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ClusterRegistrationRequest';
  noProxy?: TMayBe<TMayBe<string>[]>;
  params?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  parent?: TMayBe<TModelBase>;
  platform?: TMayBe<TClusterRegistrationRequest_Platform>;
  policySets?: TMayBe<TMayBe<string>[]>;
  profile?: TMayBe<TClusterRegistrationRequest_Profile>;
  progressState?: TMayBe<TClusterRegistrationRequest_ProgressState>;
  service?: 'cluster';
  state?: TMayBe<TClusterRegistrationRequest_State>;
  tlsCert?: TMayBe<string>;
  tlsKey?: TMayBe<string>;
  token?: TMayBe<string>;
};

export default TClusterRegistrationRequest;
