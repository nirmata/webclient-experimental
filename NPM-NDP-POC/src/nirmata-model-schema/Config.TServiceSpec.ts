/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TServicePort from './Config.TServicePort';
import THealthCheck from './Config.THealthCheck';
import TVolumeSpec from './Config.TVolumeSpec';

export type TField =
  | 'additionalProperties'
  | 'advancedConfig'
  | 'advancedHostConfig'
  | 'advancedNetworkConfig'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'dns'
  | 'enableServiceNetworking'
  | 'healthCheck'
  | 'hostname'
  | 'id'
  | 'isPrivileged'
  | 'labels'
  | 'loggingOptions'
  | 'loggingType'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'networkMode'
  | 'parent'
  | 'parent'
  | 'portMappings'
  | 'removeOnExit'
  | 'runCommand'
  | 'service'
  | 'uri'
  | 'user'
  | 'volumeMappings'
  | 'volumeSpecs'
  | 'volumesFrom';

export type TServiceSpec_LoggingType =
  | 'DEFAULT'
  | 'NONE'
  | 'JSON_FILE'
  | 'SYSLOG'
  | 'JOURNALD'
  | 'FLUENTD'
  | 'GELF'
  | 'AWSLOGS';

export type TServiceSpec_NetworkMode = 'none' | 'host' | 'bridge' | 'container';

type TServiceSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  advancedConfig?: TMayBe<string>;
  advancedHostConfig?: TMayBe<string>;
  advancedNetworkConfig?: TMayBe<string>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  dns?: TMayBe<TMayBe<string>[]>;
  enableServiceNetworking?: TMayBe<boolean>;
  healthCheck?: TMayBe<TMayBe<THealthCheck>[]>;
  hostname?: TMayBe<string>;
  isPrivileged?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  loggingOptions?: TMayBe<Record<string, TMayBe<string>>>;
  loggingType?: TMayBe<TServiceSpec_LoggingType>;
  modelIndex?: 'ServiceSpec';
  networkMode?: TMayBe<TServiceSpec_NetworkMode>;
  parent?: TMayBe<TModelBase>;
  portMappings?: TMayBe<TMayBe<TServicePort>[]>;
  removeOnExit?: TMayBe<boolean>;
  runCommand?: TMayBe<string>;
  service?: 'config';
  user?: TMayBe<string>;
  volumeMappings?: TMayBe<TMayBe<string>[]>;
  volumeSpecs?: TMayBe<TMayBe<TVolumeSpec>[]>;
  volumesFrom?: TMayBe<TMayBe<string>[]>;
};

export default TServiceSpec;
