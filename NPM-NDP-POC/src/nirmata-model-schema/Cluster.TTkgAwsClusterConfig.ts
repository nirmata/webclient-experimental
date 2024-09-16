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
  | 'id'
  | 'labels'
  | 'machineCount'
  | 'machineType'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'plan'
  | 'region'
  | 'service'
  | 'sshKey'
  | 'uri';

type TTkgAwsClusterConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  machineCount?: TMayBe<number>;
  machineType?: TMayBe<string>;
  modelIndex?: 'TkgAwsClusterConfig';
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  plan?: TMayBe<string>;
  region?: TMayBe<string>;
  service?: 'cluster';
  sshKey?: TMayBe<string>;
};

export default TTkgAwsClusterConfig;
