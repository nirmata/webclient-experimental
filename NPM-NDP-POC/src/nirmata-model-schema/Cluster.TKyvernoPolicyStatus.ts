/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TKyvernoPolicyRuleStatus from './Cluster.TKyvernoPolicyRuleStatus';
import TAutogenStatus from './Cluster.TAutogenStatus';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'autogen'
  | 'averageExecutionTime'
  | 'conditions'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'ready'
  | 'resourcesBlockedCount'
  | 'resourcesGeneratedCount'
  | 'resourcesMutatedCount'
  | 'ruleStatus'
  | 'rulecount'
  | 'rulesAppliedCount'
  | 'rulesFailedCount'
  | 'service'
  | 'uri'
  | 'violationCount';

type TKyvernoPolicyStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  autogen?: TMayBe<TMayBe<TAutogenStatus>[]>;
  averageExecutionTime?: TMayBe<string>;
  conditions?: TMayBe<object>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'KyvernoPolicyStatus';
  parent?: TMayBe<TModelBase>;
  ready?: TMayBe<boolean>;
  resourcesBlockedCount?: TMayBe<number>;
  resourcesGeneratedCount?: TMayBe<number>;
  resourcesMutatedCount?: TMayBe<number>;
  ruleStatus?: TMayBe<TMayBe<TKyvernoPolicyRuleStatus>[]>;
  rulecount?: TMayBe<object>;
  rulesAppliedCount?: TMayBe<number>;
  rulesFailedCount?: TMayBe<number>;
  service?: 'cluster';
  violationCount?: TMayBe<number>;
};

export default TKyvernoPolicyStatus;
