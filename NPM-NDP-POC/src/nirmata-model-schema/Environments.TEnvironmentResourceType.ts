/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TAccessControlList from './Environments.TAccessControlList';

export type TField =
  | 'accessControlList'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'isDefault'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'resourceLimits'
  | 'service'
  | 'uri';

type TEnvironmentResourceType = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  isDefault?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'EnvironmentResourceType';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  resourceLimits?: TMayBe<Record<string, TMayBe<string>>>;
  service?: 'environments';
};

export default TEnvironmentResourceType;
