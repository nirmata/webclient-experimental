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
  | 'hostName'
  | 'id'
  | 'isControlPlane'
  | 'labels'
  | 'mac'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'ready'
  | 'service'
  | 'state'
  | 'uri';

export type TDcNode_State = 'connected' | 'notfound' | 'unknown';

type TDcNode = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  hostName?: TMayBe<string>;
  isControlPlane?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  mac?: TMayBe<string>;
  modelIndex?: 'DcNode';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  ready?: TMayBe<boolean>;
  service?: 'cluster';
  state?: TMayBe<TDcNode_State>;
};

export default TDcNode;
