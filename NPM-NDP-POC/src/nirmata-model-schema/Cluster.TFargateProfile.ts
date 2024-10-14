/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TFargatePodSelector from './Cluster.TFargatePodSelector';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'podExecutionRoleArn'
  | 'selectors'
  | 'service'
  | 'subnets'
  | 'uri';

type TFargateProfile = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'FargateProfile';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  podExecutionRoleArn?: TMayBe<string>;
  selectors?: TMayBe<TMayBe<TFargatePodSelector>[]>;
  service?: 'cluster';
  subnets?: TMayBe<TMayBe<string>[]>;
};

export default TFargateProfile;
