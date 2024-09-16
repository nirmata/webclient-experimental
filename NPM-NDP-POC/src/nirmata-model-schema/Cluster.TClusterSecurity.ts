/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'applyToExistingSecrets'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'isEncryptionEnabled'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TClusterSecurity = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  applyToExistingSecrets?: TMayBe<boolean>;
  isEncryptionEnabled?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ClusterSecurity';
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
};

export default TClusterSecurity;
