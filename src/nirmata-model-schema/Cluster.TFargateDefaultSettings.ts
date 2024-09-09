/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

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
  | 'namespaceLabelSelectors'
  | 'parent'
  | 'parent'
  | 'podExecutionRoleArn'
  | 'podLabelSelectors'
  | 'service'
  | 'subnets'
  | 'uri';

type TFargateDefaultSettings = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'FargateDefaultSettings';
  namespaceLabelSelectors?: TMayBe<Record<string, TMayBe<string>>>;
  parent?: TMayBe<TModelBase>;
  podExecutionRoleArn?: TMayBe<string>;
  podLabelSelectors?: TMayBe<Record<string, TMayBe<string>>>;
  service?: 'cluster';
  subnets?: TMayBe<TMayBe<string>[]>;
};

export default TFargateDefaultSettings;
