/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterId'
  | 'clusterName'
  | 'createdBy'
  | 'createdOn'
  | 'envApplicationId'
  | 'environmentId'
  | 'environmentName'
  | 'errorCode'
  | 'errorInfo'
  | 'helmKustomizePath'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'patchYaml'
  | 'service'
  | 'state'
  | 'status'
  | 'uri';

export type TTargets_ErrorCode = 'CLUSTER_ERROR' | 'INVALID_RESOURCE';

export type TTargets_State =
  | 'pending'
  | 'executing'
  | 'completed'
  | 'failed'
  | 'applying'
  | 'paused'
  | 'resumed'
  | 'cancelled'
  | 'aborted';

type TTargets = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterId?: TMayBe<TModelBase>;
  clusterName?: TMayBe<string>;
  envApplicationId?: TMayBe<string>;
  environmentId?: TMayBe<TModelBase>;
  environmentName?: TMayBe<string>;
  errorCode?: TMayBe<TTargets_ErrorCode>;
  errorInfo?: TMayBe<string>;
  helmKustomizePath?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Targets';
  parent?: TMayBe<TModelBase>;
  patchYaml?: TMayBe<string>;
  service?: 'catalog';
  state?: TMayBe<TTargets_State>;
  status?: TMayBe<string>;
};

export default TTargets;
