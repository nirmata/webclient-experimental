/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'address'
  | 'agentAnnotations'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kubernetesAuthPath'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'policyRef'
  | 'service'
  | 'sslCertificate'
  | 'uri'
  | 'vaultAnnotations';

type TVaultSettings = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  address?: TMayBe<string>;
  agentAnnotations?: TMayBe<Record<string, TMayBe<string>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  kubernetesAuthPath?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'VaultSettings';
  parent?: TMayBe<TModelBase>;
  policyRef?: TMayBe<TModelBase>;
  service?: 'cluster';
  sslCertificate?: TMayBe<string>;
  vaultAnnotations?: TMayBe<Record<string, TMayBe<string>>>;
};

export default TVaultSettings;
