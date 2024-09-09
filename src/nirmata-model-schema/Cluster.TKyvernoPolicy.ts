/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TObjectMeta from './Cluster.TObjectMeta';
import TKyvernoPolicySpec from './Cluster.TKyvernoPolicySpec';
import TKyvernoPolicyStatus from './Cluster.TKyvernoPolicyStatus';

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
  | 'source'
  | 'spec'
  | 'status'
  | 'uri';

export type TKyvernoPolicy_Source = 'managed' | 'external';

type TKyvernoPolicy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'KyvernoPolicy';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  source?: TMayBe<TKyvernoPolicy_Source>;
  spec?: TMayBe<TMayBe<TKyvernoPolicySpec>[]>;
  status?: TMayBe<TMayBe<TKyvernoPolicyStatus>[]>;
};

export default TKyvernoPolicy;
