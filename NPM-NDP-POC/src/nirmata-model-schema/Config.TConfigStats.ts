/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

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
  | 'parent'
  | 'parent'
  | 'service'
  | 'totalContainersCreated'
  | 'totalEnvironmentsCreated'
  | 'totalHostsCreated'
  | 'uri';

type TConfigStats = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ConfigStats';
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  totalContainersCreated?: TMayBe<number>;
  totalEnvironmentsCreated?: TMayBe<number>;
  totalHostsCreated?: TMayBe<number>;
};

export default TConfigStats;
