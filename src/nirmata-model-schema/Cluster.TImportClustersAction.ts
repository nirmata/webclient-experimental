/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterTypeSelector'
  | 'clusters'
  | 'createdBy'
  | 'createdOn'
  | 'credentialsRef'
  | 'failureReason'
  | 'id'
  | 'labels'
  | 'mode'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'progress'
  | 'sequenceId'
  | 'service'
  | 'status'
  | 'systemMetadata'
  | 'uri';

export type TImportClustersAction_Mode = 'managed' | 'discovered' | 'providerManaged';

export type TImportClustersAction_Status = 'created' | 'pending' | 'inProgress' | 'success' | 'failed';

type TImportClustersAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterTypeSelector?: TMayBe<string>;
  clusters?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  credentialsRef?: TMayBe<string>;
  failureReason?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  mode?: TMayBe<TImportClustersAction_Mode>;
  modelIndex?: 'ImportClustersAction';
  parent?: TMayBe<TModelBase>;
  progress?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  sequenceId?: TMayBe<string>;
  service?: 'cluster';
  status?: TMayBe<TImportClustersAction_Status>;
  systemMetadata?: TMayBe<Record<string, TMayBe<string>>>;
};

export default TImportClustersAction;
