/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TJobTemplateSpec from './Catalog.TJobTemplateSpec';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'concurrencyPolicy'
  | 'createdBy'
  | 'createdOn'
  | 'failedJobsHistoryLimit'
  | 'id'
  | 'jobTemplate'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'schedule'
  | 'service'
  | 'startingDeadlineSeconds'
  | 'successfulJobsHistoryLimit'
  | 'suspend'
  | 'uri';

type TCronJobSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  concurrencyPolicy?: TMayBe<string>;
  failedJobsHistoryLimit?: TMayBe<number>;
  jobTemplate?: TMayBe<TMayBe<TJobTemplateSpec>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CronJobSpec';
  parent?: TMayBe<TModelBase>;
  schedule?: TMayBe<string>;
  service?: 'catalog';
  startingDeadlineSeconds?: TMayBe<number>;
  successfulJobsHistoryLimit?: TMayBe<number>;
  suspend?: TMayBe<boolean>;
};

export default TCronJobSpec;
