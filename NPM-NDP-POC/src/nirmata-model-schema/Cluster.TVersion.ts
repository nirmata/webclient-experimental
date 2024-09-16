/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'artifact'
  | 'branch'
  | 'commitInfo'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri'
  | 'versionRef';

type TVersion = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  artifact?: TMayBe<string>;
  branch?: TMayBe<string>;
  commitInfo?: TMayBe<Record<string, TMayBe<string>>>;
  description?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Version';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  versionRef?: TMayBe<TModelBase>;
};

export default TVersion;
