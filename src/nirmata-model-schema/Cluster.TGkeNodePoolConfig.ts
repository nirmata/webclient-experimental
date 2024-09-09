/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'autoRepair'
  | 'autoUpgrade'
  | 'createdBy'
  | 'createdOn'
  | 'diskSize'
  | 'enablePreemptibleNodes'
  | 'id'
  | 'imageType'
  | 'labels'
  | 'machineType'
  | 'maxSurge'
  | 'maxUnavailable'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'serviceAccount'
  | 'uri';

type TGkeNodePoolConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  autoRepair?: TMayBe<boolean>;
  autoUpgrade?: TMayBe<boolean>;
  diskSize?: TMayBe<number>;
  enablePreemptibleNodes?: TMayBe<boolean>;
  imageType?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  machineType?: TMayBe<string>;
  maxSurge?: TMayBe<number>;
  maxUnavailable?: TMayBe<number>;
  modelIndex?: 'GkeNodePoolConfig';
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  serviceAccount?: TMayBe<string>;
};

export default TGkeNodePoolConfig;
