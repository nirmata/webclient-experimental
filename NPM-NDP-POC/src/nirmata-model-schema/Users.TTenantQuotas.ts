/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusters'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'namespaces'
  | 'nodes'
  | 'numClusters'
  | 'numNamespaces'
  | 'numNodes'
  | 'numPods'
  | 'parent'
  | 'parent'
  | 'pods'
  | 'service'
  | 'totalLicenseUnits'
  | 'totalMemory'
  | 'totalMemoryAllocated'
  | 'totalMemoryUsage'
  | 'uri';

type TTenantQuotas = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  clusters?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'TenantQuotas';
  namespaces?: TMayBe<number>;
  nodes?: TMayBe<number>;
  numClusters?: TMayBe<number>;
  numNamespaces?: TMayBe<number>;
  numNodes?: TMayBe<number>;
  numPods?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  pods?: TMayBe<number>;
  service?: 'users';
  totalLicenseUnits?: TMayBe<number>;
  totalMemory?: TMayBe<number>;
  totalMemoryAllocated?: TMayBe<number>;
  totalMemoryUsage?: TMayBe<number>;
};

export default TTenantQuotas;
