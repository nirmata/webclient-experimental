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
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'policyDriftDetected'
  | 'policyEngineHealth'
  | 'policyHealth'
  | 'service'
  | 'uri';

export type TPolicyHealthSummary_PolicyEngineHealth = 'healthy' | 'degraded' | 'failed';

export type TPolicyHealthSummary_PolicyHealth = 'ready' | 'failed';

type TPolicyHealthSummary = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PolicyHealthSummary';
  parent?: TMayBe<TModelBase>;
  policyDriftDetected?: TMayBe<boolean>;
  policyEngineHealth?: TMayBe<TPolicyHealthSummary_PolicyEngineHealth>;
  policyHealth?: TMayBe<TPolicyHealthSummary_PolicyHealth>;
  service?: 'cluster';
};

export default TPolicyHealthSummary;
