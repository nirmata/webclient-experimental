/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'appliedCount'
  | 'averageExecutionTime'
  | 'createdBy'
  | 'createdOn'
  | 'failedCount'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'resourcesBlockedCount'
  | 'resourcesGeneratedCount'
  | 'resourcesMutatedCount'
  | 'ruleName'
  | 'service'
  | 'uri'
  | 'violationCount';

type TKyvernoPolicyRuleStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  appliedCount?: TMayBe<number>;
  averageExecutionTime?: TMayBe<string>;
  failedCount?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'KyvernoPolicyRuleStatus';
  parent?: TMayBe<TModelBase>;
  resourcesBlockedCount?: TMayBe<number>;
  resourcesGeneratedCount?: TMayBe<number>;
  resourcesMutatedCount?: TMayBe<number>;
  ruleName?: TMayBe<string>;
  service?: 'cluster';
  violationCount?: TMayBe<number>;
};

export default TKyvernoPolicyRuleStatus;
