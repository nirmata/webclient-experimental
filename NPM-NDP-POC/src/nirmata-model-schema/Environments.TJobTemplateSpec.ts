/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectMeta from './Environments.TObjectMeta';
import TJobSpec from './Environments.TJobSpec';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'spec'
  | 'uri';

type TJobTemplateSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'JobTemplateSpec';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  spec?: TMayBe<TMayBe<TJobSpec>[]>;
};

export default TJobTemplateSpec;
