/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TIamRole from './Cluster.TIamRole';
import TFargateProfile from './Cluster.TFargateProfile';
import TFargateDefaultSettings from './Cluster.TFargateDefaultSettings';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterRoleArn'
  | 'createdBy'
  | 'createdOn'
  | 'enableFargate'
  | 'enableIdentityProvider'
  | 'enableLoadBalancer'
  | 'enableSecretsEncryption'
  | 'fargateProfiles'
  | 'fargateSettings'
  | 'iamRoles'
  | 'id'
  | 'identityProviderArn'
  | 'keyArn'
  | 'labels'
  | 'loadBalancerPolicyArn'
  | 'logTypes'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'openConnectId'
  | 'parent'
  | 'parent'
  | 'privateEndpointAccess'
  | 'region'
  | 'securityGroups'
  | 'service'
  | 'subnetId'
  | 'uri'
  | 'vpcId';

type TEksClusterConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterRoleArn?: TMayBe<string>;
  enableFargate?: TMayBe<boolean>;
  enableIdentityProvider?: TMayBe<boolean>;
  enableLoadBalancer?: TMayBe<boolean>;
  enableSecretsEncryption?: TMayBe<boolean>;
  fargateProfiles?: TMayBe<TMayBe<TFargateProfile>[]>;
  fargateSettings?: TMayBe<TMayBe<TFargateDefaultSettings>[]>;
  iamRoles?: TMayBe<TMayBe<TIamRole>[]>;
  identityProviderArn?: TMayBe<string>;
  keyArn?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  loadBalancerPolicyArn?: TMayBe<string>;
  logTypes?: TMayBe<TMayBe<string>[]>;
  modelIndex?: 'EksClusterConfig';
  openConnectId?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  privateEndpointAccess?: TMayBe<boolean>;
  region?: TMayBe<string>;
  securityGroups?: TMayBe<TMayBe<string>[]>;
  service?: 'cluster';
  subnetId?: TMayBe<TMayBe<string>[]>;
  vpcId?: TMayBe<string>;
};

export default TEksClusterConfig;
