/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'chart'
  | 'chartName'
  | 'createdBy'
  | 'createdOn'
  | 'cusVal'
  | 'defVal'
  | 'directory'
  | 'id'
  | 'isChart'
  | 'kustomizePath'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'password'
  | 'repoName'
  | 'repoUrl'
  | 'service'
  | 'uri'
  | 'username'
  | 'version';

type THelmData = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  chart?: TMayBe<string>;
  chartName?: TMayBe<string>;
  cusVal?: TMayBe<string>;
  defVal?: TMayBe<string>;
  directory?: TMayBe<string>;
  isChart?: TMayBe<boolean>;
  kustomizePath?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'HelmData';
  parent?: TMayBe<TModelBase>;
  password?: TMayBe<string>;
  repoName?: TMayBe<string>;
  repoUrl?: TMayBe<string>;
  service?: 'environments';
  username?: TMayBe<string>;
  version?: TMayBe<string>;
};

export default THelmData;
