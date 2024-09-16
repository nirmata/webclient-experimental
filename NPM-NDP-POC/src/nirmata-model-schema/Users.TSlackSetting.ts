/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiToken'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'status'
  | 'uri';

export type TSlackSetting_Status = 'active' | 'inActive';

type TSlackSetting = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  apiToken?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'SlackSetting';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'users';
  status?: TMayBe<TSlackSetting_Status>;
};

export default TSlackSetting;
