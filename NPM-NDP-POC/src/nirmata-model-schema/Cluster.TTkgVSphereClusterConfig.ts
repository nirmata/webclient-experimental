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
  | 'datacenter'
  | 'datastore'
  | 'folder'
  | 'haproxyTemplate'
  | 'id'
  | 'labels'
  | 'machineCount'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespace'
  | 'network'
  | 'parent'
  | 'parent'
  | 'plan'
  | 'resourcePool'
  | 'server'
  | 'serverTemplate'
  | 'service'
  | 'sshKey'
  | 'uri';

type TTkgVSphereClusterConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  datacenter?: TMayBe<string>;
  datastore?: TMayBe<string>;
  folder?: TMayBe<string>;
  haproxyTemplate?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  machineCount?: TMayBe<number>;
  modelIndex?: 'TkgVSphereClusterConfig';
  namespace?: TMayBe<string>;
  network?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  plan?: TMayBe<string>;
  resourcePool?: TMayBe<string>;
  server?: TMayBe<string>;
  serverTemplate?: TMayBe<string>;
  service?: 'cluster';
  sshKey?: TMayBe<string>;
};

export default TTkgVSphereClusterConfig;
