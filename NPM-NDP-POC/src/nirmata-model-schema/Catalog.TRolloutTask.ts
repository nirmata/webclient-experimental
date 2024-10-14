/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'appId'
  | 'channelId'
  | 'createdBy'
  | 'createdOn'
  | 'dependentAppId'
  | 'envId'
  | 'errorInfo'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'rolloutId'
  | 'runAppId'
  | 'service'
  | 'state'
  | 'uri'
  | 'versionId';

export type TRolloutTask_State =
  | 'pending'
  | 'executing'
  | 'completed'
  | 'failed'
  | 'notDeploy'
  | 'cancelled'
  | 'waiting';

type TRolloutTask = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  appId?: TMayBe<TModelBase>;
  channelId?: TMayBe<TModelBase>;
  dependentAppId?: TMayBe<TMayBe<TModelBase>[]>;
  envId?: TMayBe<TModelBase>;
  errorInfo?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'RolloutTask';
  parent?: TMayBe<TModelBase>;
  rolloutId?: TMayBe<TModelBase>;
  runAppId?: TMayBe<TModelBase>;
  service?: 'catalog';
  state?: TMayBe<TRolloutTask_State>;
  versionId?: TMayBe<TModelBase>;
};

export default TRolloutTask;
