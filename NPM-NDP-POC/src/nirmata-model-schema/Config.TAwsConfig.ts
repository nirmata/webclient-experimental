/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'autoScalingGroupId'
  | 'awsConfigType'
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

export type TAwsConfig_AwsConfigType = 'autoScalingGroup' | 'spotFleet' | 'launchConfiguration' | 'ami';

type TAwsConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  autoScalingGroupId?: TMayBe<string>;
  awsConfigType?: TMayBe<TAwsConfig_AwsConfigType>;
  image?: TMayBe<string>;
  instanceRole?: TMayBe<string>;
  instanceType?: TMayBe<string>;
  keypair?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  launchConfiguration?: TMayBe<string>;
  modelIndex?: 'AwsConfig';
  network?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  region?: TMayBe<string>;
  securityGroups?: TMayBe<TMayBe<string>[]>;
  service?: 'config';
  spotFleetRequestId?: TMayBe<string>;
  storageCapacity?: TMayBe<number>;
  userData?: TMayBe<string>;
};

export default TAwsConfig;
