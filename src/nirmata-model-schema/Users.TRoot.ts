/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TTenant from './Users.TTenant';
import TTenantSettings from './Users.TTenantSettings';
import TAlarmNotifier from './Users.TAlarmNotifier';

export type TField =
  | 'additionalProperties'
  | 'admins'
  | 'alarmNotifiers'
  | 'alarmTypes'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelId'
  | 'modelIndex'
  | 'modelName'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'privateEdition'
  | 'productInstallation'
  | 'products'
  | 'service'
  | 'serviceProviders'
  | 'tenantSettings'
  | 'tenants'
  | 'uri'
  | 'userGroups';

type TRoot = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  admins?: TMayBe<TMayBe<unknown>[]>;
  alarmNotifiers?: TMayBe<TMayBe<TAlarmNotifier>[]>;
  alarmTypes?: TMayBe<TMayBe<unknown>[]>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelId?: TMayBe<string>;
  modelIndex?: 'Root';
  modelName?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  privateEdition?: TMayBe<TMayBe<unknown>[]>;
  productInstallation?: TMayBe<TMayBe<unknown>[]>;
  products?: TMayBe<TMayBe<unknown>[]>;
  service?: 'users';
  serviceProviders?: TMayBe<TMayBe<unknown>[]>;
  tenantSettings?: TMayBe<TMayBe<TTenantSettings>[]>;
  tenants?: TMayBe<TMayBe<TTenant>[]>;
  userGroups?: TMayBe<TMayBe<unknown>[]>;
};

export default TRoot;
