/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TScalingRule from './Config.TScalingRule';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'autoRecovery'
  | 'createdBy'
  | 'createdOn'
  | 'defaultDesiredCount'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'scalingRules'
  | 'service'
  | 'uri';

type TScalingPolicy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  autoRecovery?: TMayBe<boolean>;
  defaultDesiredCount?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ScalingPolicy';
  parent?: TMayBe<TModelBase>;
  scalingRules?: TMayBe<TMayBe<TScalingRule>[]>;
  service?: 'config';
};

export default TScalingPolicy;
