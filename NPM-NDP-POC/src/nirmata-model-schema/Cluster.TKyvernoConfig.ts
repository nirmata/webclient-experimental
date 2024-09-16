/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TResourceSettingsData from './Cluster.TResourceSettingsData';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'excludedNamespaces'
  | 'haMode'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'networkPolicyEnabled'
  | 'networkPolicyYaml'
  | 'parent'
  | 'parent'
  | 'resource'
  | 'service'
  | 'uri';

type TKyvernoConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  excludedNamespaces?: TMayBe<TMayBe<string>[]>;
  haMode?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'KyvernoConfig';
  name?: TMayBe<string>;
  networkPolicyEnabled?: TMayBe<boolean>;
  networkPolicyYaml?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  resource?: TMayBe<TMayBe<TResourceSettingsData>>;
  service?: 'cluster';
};

export default TKyvernoConfig;
