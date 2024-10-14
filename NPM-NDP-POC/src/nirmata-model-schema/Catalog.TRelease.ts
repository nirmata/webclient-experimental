/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TRollout from './Catalog.TRollout';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'applicationVersion'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'releaseNotes'
  | 'rollouts'
  | 'service'
  | 'uri';

type TRelease = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  applicationVersion?: TMayBe<TModelBase>;
  description?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Release';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  releaseNotes?: TMayBe<string>;
  rollouts?: TMayBe<TMayBe<TRollout>[]>;
  service?: 'catalog';
};

export default TRelease;
