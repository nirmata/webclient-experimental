/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'httpProxy'
  | 'httpsProxy'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'noProxy'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TProxySettingsSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  httpProxy?: TMayBe<string>;
  httpsProxy?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ProxySettingsSpec';
  noProxy?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
};

export default TProxySettingsSpec;
