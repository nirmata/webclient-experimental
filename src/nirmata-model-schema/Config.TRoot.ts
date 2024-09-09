/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TApplication from './Config.TApplication';
import TEnvironmentType from './Config.TEnvironmentType';
import TContainerType from './Config.TContainerType';
import TResourceSelectionPolicy from './Config.TResourceSelectionPolicy';
import TCloudProvider from './Config.TCloudProvider';
import TEnvironment from './Config.TEnvironment';
import TRegistry from './Config.TRegistry';
import TPrivateCloud from './Config.TPrivateCloud';
import TConfigStats from './Config.TConfigStats';
import TStoragePolicy from './Config.TStoragePolicy';
import TNetworkPolicy from './Config.TNetworkPolicy';
import TAlarmType from './Config.TAlarmType';
import TAlarmNotifier from './Config.TAlarmNotifier';

export type TField =
  | 'additionalProperties'
  | 'alarmNotifiers'
  | 'alarmTypes'
  | 'alarms'
  | 'ancestors'
  | 'applications'
  | 'cloudProviders'
  | 'configStats'
  | 'containerTypes'
  | 'createdBy'
  | 'createdOn'
  | 'environmentTypes'
  | 'environments'
  | 'id'
  | 'labels'
  | 'modelId'
  | 'modelIndex'
  | 'modelName'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'networkPolicies'
  | 'parent'
  | 'parent'
  | 'privateClouds'
  | 'registries'
  | 'resourceSelectionPolicy'
  | 'service'
  | 'storagePolicies'
  | 'uri';

type TRoot = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarmNotifiers?: TMayBe<TMayBe<TAlarmNotifier>[]>;
  alarmTypes?: TMayBe<TMayBe<TAlarmType>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  applications?: TMayBe<TMayBe<TApplication>[]>;
  cloudProviders?: TMayBe<TMayBe<TCloudProvider>[]>;
  configStats?: TMayBe<TMayBe<TConfigStats>[]>;
  containerTypes?: TMayBe<TMayBe<TContainerType>[]>;
  environmentTypes?: TMayBe<TMayBe<TEnvironmentType>[]>;
  environments?: TMayBe<TMayBe<TEnvironment>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelId?: TMayBe<string>;
  modelIndex?: 'Root';
  modelName?: TMayBe<string>;
  networkPolicies?: TMayBe<TMayBe<TNetworkPolicy>[]>;
  parent?: TMayBe<TModelBase>;
  privateClouds?: TMayBe<TMayBe<TPrivateCloud>[]>;
  registries?: TMayBe<TMayBe<TRegistry>[]>;
  resourceSelectionPolicy?: TMayBe<TMayBe<TResourceSelectionPolicy>[]>;
  service?: 'config';
  storagePolicies?: TMayBe<TMayBe<TStoragePolicy>[]>;
};

export default TRoot;
