/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TAccessControlList from './Cluster.TAccessControlList';

export type TField =
  | 'accessControlList'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiKey'
  | 'awsAccessKeyId'
  | 'awsExternalId'
  | 'awsRoleArn'
  | 'awsSecretKey'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'email'
  | 'endpoint'
  | 'id'
  | 'isDirectConnect'
  | 'kubeConfig'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'password'
  | 'region'
  | 'service'
  | 'subscriptionId'
  | 'tenant'
  | 'type'
  | 'uri'
  | 'username';

export type TCloudCredentials_Type =
  | 'AWS'
  | 'vSphere'
  | 'OpenStack'
  | 'Azure'
  | 'Other'
  | 'DigitalOcean'
  | 'GoogleCloudPlatform'
  | 'OracleCloudServices'
  | 'Diamanti'
  | 'HyperFlex'
  | 'IBMCloud'
  | 'Pivotal'
  | 'Nutanix'
  | 'TKGAWS'
  | 'TKGVSphere';

type TCloudCredentials = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiKey?: TMayBe<string>;
  awsAccessKeyId?: TMayBe<string>;
  awsExternalId?: TMayBe<string>;
  awsRoleArn?: TMayBe<string>;
  awsSecretKey?: TMayBe<string>;
  description?: TMayBe<string>;
  email?: TMayBe<string>;
  endpoint?: TMayBe<string>;
  isDirectConnect?: TMayBe<boolean>;
  kubeConfig?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CloudCredentials';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  password?: TMayBe<string>;
  region?: TMayBe<string>;
  service?: 'cluster';
  subscriptionId?: TMayBe<string>;
  tenant?: TMayBe<string>;
  type?: TMayBe<TCloudCredentials_Type>;
  username?: TMayBe<string>;
};

export default TCloudCredentials;
