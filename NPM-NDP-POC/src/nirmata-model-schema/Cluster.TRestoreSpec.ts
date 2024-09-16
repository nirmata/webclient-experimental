/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'backupName'
  | 'createdBy'
  | 'createdOn'
  | 'excludedNamespaces'
  | 'excludedResources'
  | 'id'
  | 'includedNamespaces'
  | 'includedResources'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespaceMapping'
  | 'parent'
  | 'parent'
  | 'scheduleName'
  | 'service'
  | 'uri';

type TRestoreSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  backupName?: TMayBe<string>;
  excludedNamespaces?: TMayBe<TMayBe<string>[]>;
  excludedResources?: TMayBe<TMayBe<string>[]>;
  includedNamespaces?: TMayBe<TMayBe<string>[]>;
  includedResources?: TMayBe<TMayBe<string>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'RestoreSpec';
  namespaceMapping?: TMayBe<Record<string, TMayBe<string>>>;
  parent?: TMayBe<TModelBase>;
  scheduleName?: TMayBe<string>;
  service?: 'cluster';
};

export default TRestoreSpec;
