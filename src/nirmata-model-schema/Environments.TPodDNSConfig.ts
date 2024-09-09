/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TPodDNSConfigOption from './Environments.TPodDNSConfigOption';

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
  | 'nameservers'
  | 'options'
  | 'parent'
  | 'parent'
  | 'searches'
  | 'service'
  | 'uri';

type TPodDNSConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PodDNSConfig';
  nameservers?: TMayBe<TMayBe<string>[]>;
  options?: TMayBe<TMayBe<TPodDNSConfigOption>[]>;
  parent?: TMayBe<TModelBase>;
  searches?: TMayBe<TMayBe<string>[]>;
  service?: 'environments';
};

export default TPodDNSConfig;
