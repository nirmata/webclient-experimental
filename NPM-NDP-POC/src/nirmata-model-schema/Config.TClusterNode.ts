/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TServicePort from './Config.TServicePort';

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
  | 'nodeId'
  | 'parent'
  | 'parent'
  | 'reservedHost'
  | 'reservedHostIp'
  | 'reservedPorts'
  | 'service'
  | 'serviceInstance'
  | 'uri';

type TClusterNode = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ClusterNode';
  nodeId?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  reservedHost?: TMayBe<string>;
  reservedHostIp?: TMayBe<string>;
  reservedPorts?: TMayBe<TMayBe<TServicePort>[]>;
  service?: 'config';
};

export default TClusterNode;
