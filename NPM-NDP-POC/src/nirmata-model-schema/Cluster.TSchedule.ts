/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TScheduleSpec from './Cluster.TScheduleSpec';
import TObjectMeta from './Cluster.TObjectMeta';
import TScheduleStatus from './Cluster.TScheduleStatus';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kind'
  | 'labels'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'spec'
  | 'status'
  | 'uri';

type TSchedule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'Schedule';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
  spec?: TMayBe<TMayBe<TScheduleSpec>[]>;
  status?: TMayBe<TMayBe<TScheduleStatus>[]>;
};

export default TSchedule;
