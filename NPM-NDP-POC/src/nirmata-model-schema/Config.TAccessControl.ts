/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'access'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'entityName'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'type'
  | 'uri';

export type TAccessControl_Access = 'readWrite' | 'readOnly' | 'operator';

export type TAccessControl_Type = 'role' | 'user' | 'team';

type TAccessControl = Omit<TModelBase, 'service' | 'modelIndex'> & {
  access?: TMayBe<TAccessControl_Access>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  entityName?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AccessControl';
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  type?: TMayBe<TAccessControl_Type>;
};

export default TAccessControl;
