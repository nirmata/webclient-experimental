/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TEnvironment from './Environments.TEnvironment';
import TPolicies from './Environments.TPolicies';
import TCluster from './Environments.TCluster';
import TContainerDataStream from './Environments.TContainerDataStream';
import TChangeLog from './Environments.TChangeLog';
import TManagedRollout from './Environments.TManagedRollout';
import TEnvironmentSettings from './Environments.TEnvironmentSettings';
import TTenantConfig from './Environments.TTenantConfig';
import TTenantStats from './Environments.TTenantStats';
import TTenantSettings from './Environments.TTenantSettings';
import TKubeconfigAction from './Environments.TKubeconfigAction';
import TAlarmType from './Environments.TAlarmType';
import TAlarmNotifier from './Environments.TAlarmNotifier';

export type TField =
  | 'ContainerDataStreams'
  | 'additionalProperties'
  | 'alarmNotifiers'
  | 'alarmTypes'
  | 'alarms'
  | 'ancestors'
  | 'changeLogs'
  | 'clusters'
  | 'createdBy'
  | 'createdOn'
  | 'environments'
  | 'id'
  | 'kubeconfigActions'
  | 'labels'
  | 'managedRollouts'
  | 'modelId'
  | 'modelIndex'
  | 'modelName'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'policies'
  | 'service'
  | 'settings'
  | 'tenantConfig'
  | 'tenantSettings'
  | 'tenantStats'
  | 'uri';

type TRoot = Omit<TModelBase, 'service' | 'modelIndex'> & {
  ContainerDataStreams?: TMayBe<TMayBe<TContainerDataStream>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarmNotifiers?: TMayBe<TMayBe<TAlarmNotifier>[]>;
  alarmTypes?: TMayBe<TMayBe<TAlarmType>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  changeLogs?: TMayBe<TMayBe<TChangeLog>[]>;
  clusters?: TMayBe<TMayBe<TCluster>[]>;
  environments?: TMayBe<TMayBe<TEnvironment>[]>;
  kubeconfigActions?: TMayBe<TMayBe<TKubeconfigAction>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  managedRollouts?: TMayBe<TMayBe<TManagedRollout>[]>;
  modelId?: TMayBe<string>;
  modelIndex?: 'Root';
  modelName?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policies?: TMayBe<TMayBe<TPolicies>[]>;
  service?: 'environments';
  settings?: TMayBe<TMayBe<TEnvironmentSettings>[]>;
  tenantConfig?: TMayBe<TMayBe<TTenantConfig>[]>;
  tenantSettings?: TMayBe<TMayBe<TTenantSettings>[]>;
  tenantStats?: TMayBe<TMayBe<TTenantStats>[]>;
};

export default TRoot;
