/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TKyvernoPolicy from './Cluster.TKyvernoPolicy';
import TDeployToCluster from './Cluster.TDeployToCluster';

export type TField =
  | 'additionalProperties'
  | 'alarmSeverity'
  | 'alarms'
  | 'ancestors'
  | 'category'
  | 'createdBy'
  | 'createdOn'
  | 'deployToClusters'
  | 'description'
  | 'enableAlarms'
  | 'enabled'
  | 'id'
  | 'kyvernoPolicy'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'policyYaml'
  | 'service'
  | 'type'
  | 'updateRequired'
  | 'uri'
  | 'validationFailureAction';

export type TResourcePolicy_Type = 'nirmataManaged' | 'userManaged';

export type TResourcePolicy_ValidationFailureAction = 'enforce' | 'audit' | 'Audit' | 'Enforce';

type TResourcePolicy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarmSeverity?: TMayBe<string>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  category?: TMayBe<string>;
  deployToClusters?: TMayBe<TMayBe<TDeployToCluster>[]>;
  description?: TMayBe<string>;
  enableAlarms?: TMayBe<boolean>;
  enabled?: TMayBe<boolean>;
  kyvernoPolicy?: TMayBe<TMayBe<TKyvernoPolicy>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ResourcePolicy';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policyYaml?: TMayBe<string>;
  service?: 'cluster';
  type?: TMayBe<TResourcePolicy_Type>;
  updateRequired?: TMayBe<boolean>;
  validationFailureAction?: TMayBe<TResourcePolicy_ValidationFailureAction>;
};

export default TResourcePolicy;
