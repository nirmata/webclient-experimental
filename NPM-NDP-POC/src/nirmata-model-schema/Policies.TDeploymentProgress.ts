/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TResourceDeployStatusData from './Policies.TResourceDeployStatusData';
import TAlarm from './Policies.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterRef'
  | 'createdBy'
  | 'createdOn'
  | 'deployHistory'
  | 'failedAttempts'
  | 'id'
  | 'labels'
  | 'latestDeployStatus'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'startTime'
  | 'uri'
  | 'yaml';

type TDeploymentProgress = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterRef?: TMayBe<TModelBase>;
  deployHistory?: TMayBe<TMayBe<TResourceDeployStatusData>[]>;
  failedAttempts?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  latestDeployStatus?: TMayBe<TMayBe<TResourceDeployStatusData>>;
  modelIndex?: 'DeploymentProgress';
  parent?: TMayBe<TModelBase>;
  service?: 'policies';
  startTime?: TMayBe<number>;
  yaml?: TMayBe<string>;
};

export default TDeploymentProgress;
