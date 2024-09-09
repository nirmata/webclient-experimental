/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'audience'
  | 'createdBy'
  | 'createdOn'
  | 'expirationSeconds'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'path'
  | 'service'
  | 'uri';

type TServiceAccountTokenProjection = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  audience?: TMayBe<string>;
  expirationSeconds?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ServiceAccountTokenProjection';
  parent?: TMayBe<TModelBase>;
  path?: TMayBe<string>;
  service?: 'environments';
};

export default TServiceAccountTokenProjection;
