/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TClientIPConfig from './Catalog.TClientIPConfig';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clientIP'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TSessionAffinityConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clientIP?: TMayBe<TMayBe<TClientIPConfig>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'SessionAffinityConfig';
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
};

export default TSessionAffinityConfig;
