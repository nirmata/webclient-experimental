/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TObjectMeta from './Cluster.TObjectMeta';
import TComponentCondition from './Cluster.TComponentCondition';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'conditions'
  | 'createdBy'
  | 'createdOn'
  | 'desiredCount'
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
  | 'runningCount'
  | 'service'
  | 'state'
  | 'uri';

export type TComponentStatus_State = 'healthy' | 'unhealthy' | 'unknown';

type TComponentStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  conditions?: TMayBe<TMayBe<TComponentCondition>[]>;
  desiredCount?: TMayBe<number>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'ComponentStatus';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  runningCount?: TMayBe<number>;
  service?: 'cluster';
  state?: TMayBe<TComponentStatus_State>;
};

export default TComponentStatus;
