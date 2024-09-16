/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'level'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'role'
  | 'service'
  | 'type'
  | 'uri'
  | 'user';

type TSELinuxOptions = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  level?: TMayBe<string>;
  modelIndex?: 'SELinuxOptions';
  parent?: TMayBe<TModelBase>;
  role?: TMayBe<string>;
  service?: 'catalog';
  type?: TMayBe<string>;
  user?: TMayBe<string>;
};

export default TSELinuxOptions;
