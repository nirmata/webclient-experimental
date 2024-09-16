/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TNamespaceSummaryData from './Cluster.TNamespaceSummaryData';
import TAlarm from './Cluster.TAlarm';
import TObjectMeta from './Cluster.TObjectMeta';
import TNamespaceSpec from './Cluster.TNamespaceSpec';
import TNamespaceStatus from './Cluster.TNamespaceStatus';
import TNamespaceStats from './Cluster.TNamespaceStats';
import TPolicyReport from './Cluster.TPolicyReport';
import TAccessControlList from './Cluster.TAccessControlList';

export type TField =
  | 'accessControlList'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'clusterName'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kind'
  | 'labels'
  | 'metadata'
  | 'migrationRequired'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'policyReports'
  | 'service'
  | 'spec'
  | 'state'
  | 'statistics'
  | 'status'
  | 'summary'
  | 'uri';

export type TNamespace_State = 'Active' | 'Terminating';

type TNamespace = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  clusterName?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  migrationRequired?: TMayBe<boolean>;
  modelIndex?: 'Namespace';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policyReports?: TMayBe<TMayBe<TPolicyReport>[]>;
  service?: 'cluster';
  spec?: TMayBe<TMayBe<TNamespaceSpec>[]>;
  state?: TMayBe<TNamespace_State>;
  statistics?: TMayBe<TMayBe<TNamespaceStats>[]>;
  status?: TMayBe<TMayBe<TNamespaceStatus>[]>;
  summary?: TMayBe<TMayBe<TNamespaceSummaryData>>;
};

export default TNamespace;
