/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'autoCreateRelease'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'failureAction'
  | 'failureThreshold'
  | 'id'
  | 'labels'
  | 'latestRollout'
  | 'maxRetention'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'rolloutConfig'
  | 'rolloutMode'
  | 'service'
  | 'uri';

export type TChannel_FailureAction = 'continueOnFailure' | 'abortOnFailure' | 'rollbackOnFailure';

export type TChannel_RolloutMode = 'serial' | 'parallel';

type TChannel = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  autoCreateRelease?: TMayBe<boolean>;
  description?: TMayBe<string>;
  failureAction?: TMayBe<TChannel_FailureAction>;
  failureThreshold?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  latestRollout?: TMayBe<TModelBase>;
  maxRetention?: TMayBe<number>;
  modelIndex?: 'Channel';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  rolloutConfig?: TMayBe<Record<string, TMayBe<string>>>;
  rolloutMode?: TMayBe<TChannel_RolloutMode>;
  service?: 'catalog';
};

export default TChannel;
