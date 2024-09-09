/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'autoScalingGroupId'
  | 'awsNodePoolType'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'image'
  | 'instanceRole'
  | 'instanceType'
  | 'keypair'
  | 'labels'
  | 'launchConfiguration'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'network'
  | 'parent'
  | 'parent'
  | 'region'
  | 'securityGroups'
  | 'service'
  | 'spotFleetRequestId'
  | 'storageCapacity'
  | 'uri'
  | 'userData';

export type TAwsNodePoolConfig_AwsNodePoolType = 'autoScalingGroup' | 'spotFleet' | 'launchConfiguration' | 'ami';

type TAwsNodePoolConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  autoScalingGroupId?: TMayBe<string>;
  awsNodePoolType?: TMayBe<TAwsNodePoolConfig_AwsNodePoolType>;
  image?: TMayBe<string>;
  instanceRole?: TMayBe<string>;
  instanceType?: TMayBe<string>;
  keypair?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  launchConfiguration?: TMayBe<string>;
  modelIndex?: 'AwsNodePoolConfig';
  network?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  region?: TMayBe<string>;
  securityGroups?: TMayBe<string>;
  service?: 'cluster';
  spotFleetRequestId?: TMayBe<string>;
  storageCapacity?: TMayBe<number>;
  userData?: TMayBe<string>;
};

export default TAwsNodePoolConfig;
