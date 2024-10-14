/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TObjectMetadataData from './Cluster.TObjectMetadataData';
import TClusterIssuerSpecData from './Cluster.TClusterIssuerSpecData';
import TAlarm from './Cluster.TAlarm';
import TClusterIssuerStatus from './Cluster.TClusterIssuerStatus';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kind'
  | 'labels'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'spec'
  | 'status'
  | 'uri';

type TClusterIssuer = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMetadataData>>;
  modelIndex?: 'ClusterIssuer';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  spec?: TMayBe<TMayBe<TClusterIssuerSpecData>>;
  status?: TMayBe<TMayBe<TClusterIssuerStatus>[]>;
};

export default TClusterIssuer;
