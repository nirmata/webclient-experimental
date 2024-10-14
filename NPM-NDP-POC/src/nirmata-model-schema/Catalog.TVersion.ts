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
  | 'artifactData'
  | 'channel'
  | 'commitInfo'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'notes'
  | 'parent'
  | 'parent'
  | 'rollouts'
  | 'service'
  | 'uri'
  | 'version';

type TVersion = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  artifactData?: TMayBe<string>;
  channel?: TMayBe<TMayBe<TModelBase>[]>;
  commitInfo?: TMayBe<Record<string, TMayBe<string>>>;
  description?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Version';
  name?: TMayBe<string>;
  notes?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  rollouts?: TMayBe<TMayBe<TRollout>[]>;
  service?: 'catalog';
  version?: TMayBe<string>;
};

export default TVersion;
