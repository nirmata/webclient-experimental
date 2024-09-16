/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'amiType'
  | 'ancestors'
  | 'autoscalingName'
  | 'capacityType'
  | 'createdBy'
  | 'createdOn'
  | 'diskSize'
  | 'id'
  | 'imageId'
  | 'instanceType'
  | 'instanceTypes'
  | 'instanceTypesOverride'
  | 'isSpotInstance'
  | 'keyName'
  | 'labels'
  | 'launchTemplateName'
  | 'launchTemplateVersion'
  | 'maxPods'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'nodeIamRole'
  | 'nodeLabels'
  | 'onDemandBaseCapacity'
  | 'onDemandPercentageAboveBaseCapacity'
  | 'parameters'
  | 'parent'
  | 'parent'
  | 'securityGroups'
  | 'service'
  | 'spotInstancePools'
  | 'templateBody'
  | 'templateType'
  | 'uri'
  | 'useCustomAmi'
  | 'userData';

export type TEksNodePoolConfig_AmiType =
  | 'AL2_x86_64'
  | 'AL2_x86_64_GPU'
  | 'AL2_ARM_64'
  | 'BOTTLEROCKET_ARM_64'
  | 'BOTTLEROCKET_x86_64';

export type TEksNodePoolConfig_CapacityType = 'ON_DEMAND' | 'SPOT';

export type TEksNodePoolConfig_TemplateType = 'cloudFormationTemplate' | 'launchTemplate';

type TEksNodePoolConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  amiType?: TMayBe<TEksNodePoolConfig_AmiType>;
  autoscalingName?: TMayBe<string>;
  capacityType?: TMayBe<TEksNodePoolConfig_CapacityType>;
  diskSize?: TMayBe<number>;
  imageId?: TMayBe<string>;
  instanceType?: TMayBe<string>;
  instanceTypes?: TMayBe<TMayBe<string>[]>;
  instanceTypesOverride?: TMayBe<TMayBe<string>[]>;
  isSpotInstance?: TMayBe<boolean>;
  keyName?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  launchTemplateName?: TMayBe<string>;
  launchTemplateVersion?: TMayBe<number>;
  maxPods?: TMayBe<number>;
  modelIndex?: 'EksNodePoolConfig';
  nodeIamRole?: TMayBe<string>;
  nodeLabels?: TMayBe<Record<string, TMayBe<string>>>;
  onDemandBaseCapacity?: TMayBe<number>;
  onDemandPercentageAboveBaseCapacity?: TMayBe<number>;
  parameters?: TMayBe<Record<string, TMayBe<string>>>;
  parent?: TMayBe<TModelBase>;
  securityGroups?: TMayBe<TMayBe<string>[]>;
  service?: 'cluster';
  spotInstancePools?: TMayBe<number>;
  templateBody?: TMayBe<string>;
  templateType?: TMayBe<TEksNodePoolConfig_TemplateType>;
  useCustomAmi?: TMayBe<boolean>;
  userData?: TMayBe<string>;
};

export default TEksNodePoolConfig;
