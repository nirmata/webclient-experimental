/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TVolumeSpec from './Config.TVolumeSpec';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'containerName'
  | 'createdBy'
  | 'createdOn'
  | 'dns'
  | 'hostname'
  | 'id'
  | 'isNetworkDisabled'
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
  | 'properties'
  | 'removeOnExit'
  | 'runCommand'
  | 'service'
  | 'uri'
  | 'user'
  | 'volumeMappings'
  | 'volumeSpecs'
  | 'volumesFrom';

export type TLaunchConfiguration_LoggingType =
  | 'DEFAULT'
  | 'NONE'
  | 'JSON_FILE'
  | 'SYSLOG'
  | 'JOURNALD'
  | 'FLUENTD'
  | 'GELF'
  | 'AWSLOGS';

export type TLaunchConfiguration_NetworkMode = 'none' | 'host' | 'bridge' | 'container';

type TLaunchConfiguration = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  containerName?: TMayBe<string>;
  dns?: TMayBe<TMayBe<string>[]>;
  hostname?: TMayBe<string>;
  isNetworkDisabled?: TMayBe<boolean>;
  isPrivileged?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  loggingOptions?: TMayBe<Record<string, TMayBe<string>>>;
  loggingType?: TMayBe<TLaunchConfiguration_LoggingType>;
  modelIndex?: 'LaunchConfiguration';
  networkMode?: TMayBe<TLaunchConfiguration_NetworkMode>;
  parent?: TMayBe<TModelBase>;
  properties?: TMayBe<Record<string, TMayBe<string>>>;
  removeOnExit?: TMayBe<boolean>;
  runCommand?: TMayBe<string>;
  service?: 'config';
  user?: TMayBe<string>;
  volumeMappings?: TMayBe<TMayBe<string>[]>;
  volumeSpecs?: TMayBe<TMayBe<TVolumeSpec>[]>;
  volumesFrom?: TMayBe<TMayBe<string>[]>;
};

export default TLaunchConfiguration;
