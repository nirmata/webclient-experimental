/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TCapabilities from './Environments.TCapabilities';
import TSELinuxOptions from './Environments.TSELinuxOptions';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'allowPrivilegeEscalation'
  | 'ancestors'
  | 'capabilities'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'privileged'
  | 'procMount'
  | 'readOnlyRootFilesystem'
  | 'runAsGroup'
  | 'runAsNonRoot'
  | 'runAsUser'
  | 'seLinuxOptions'
  | 'service'
  | 'uri';

type TSecurityContext = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  allowPrivilegeEscalation?: TMayBe<boolean>;
  capabilities?: TMayBe<TMayBe<TCapabilities>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'SecurityContext';
  parent?: TMayBe<TModelBase>;
  privileged?: TMayBe<boolean>;
  procMount?: TMayBe<string>;
  readOnlyRootFilesystem?: TMayBe<boolean>;
  runAsGroup?: TMayBe<number>;
  runAsNonRoot?: TMayBe<boolean>;
  runAsUser?: TMayBe<number>;
  seLinuxOptions?: TMayBe<TMayBe<TSELinuxOptions>[]>;
  service?: 'environments';
};

export default TSecurityContext;
