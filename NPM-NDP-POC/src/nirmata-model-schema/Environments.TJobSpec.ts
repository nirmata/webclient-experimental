/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TPodTemplateSpec from './Environments.TPodTemplateSpec';

export type TField =
  | 'activeDeadlineSeconds'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'backoffLimit'
  | 'completions'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'manualSelector'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parallelism'
  | 'parent'
  | 'parent'
  | 'selector'
  | 'service'
  | 'template'
  | 'uri';

type TJobSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  activeDeadlineSeconds?: TMayBe<number>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  backoffLimit?: TMayBe<number>;
  completions?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  manualSelector?: TMayBe<boolean>;
  modelIndex?: 'JobSpec';
  parallelism?: TMayBe<number>;
  parent?: TMayBe<TModelBase>;
  selector?: TMayBe<Record<string, string>>;
  service?: 'environments';
  template?: TMayBe<TMayBe<TPodTemplateSpec>[]>;
};

export default TJobSpec;
