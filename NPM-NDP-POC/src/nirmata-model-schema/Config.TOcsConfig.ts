/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'ocsConfigType'
  | 'orchestrationId'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

export type TOcsConfig_OcsConfigType = 'orchestration' | 'identityDomain' | 'image';

type TOcsConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'OcsConfig';
  ocsConfigType?: TMayBe<TOcsConfig_OcsConfigType>;
  orchestrationId?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'config';
};

export default TOcsConfig;
