/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'attributes'
  | 'createdBy'
  | 'createdOn'
  | 'endTime'
  | 'environmentActionRef'
  | 'failureReason'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'startTime'
  | 'status'
  | 'type'
  | 'uri';

export type TClusterAction_Status = 'created' | 'inProgress' | 'completed' | 'pending' | 'failed' | 'accepted';

export type TClusterAction_Type = 'upgrade' | 'restart' | 'updateCertificates' | 'nodeDelete' | 'updateCluster';

type TClusterAction = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  attributes?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  endTime?: TMayBe<number>;
  environmentActionRef?: TMayBe<string>;
  failureReason?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ClusterAction';
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  startTime?: TMayBe<number>;
  status?: TMayBe<TClusterAction_Status>;
  type?: TMayBe<TClusterAction_Type>;
};

export default TClusterAction;
