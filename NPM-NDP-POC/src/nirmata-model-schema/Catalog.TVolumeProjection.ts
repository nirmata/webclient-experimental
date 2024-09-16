/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TServiceAccountTokenProjection from './Catalog.TServiceAccountTokenProjection';
import TConfigMapProjection from './Catalog.TConfigMapProjection';
import TSecretProjection from './Catalog.TSecretProjection';
import TDownwardAPIProjection from './Catalog.TDownwardAPIProjection';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'configMap'
  | 'createdBy'
  | 'createdOn'
  | 'downwardAPI'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'secret'
  | 'service'
  | 'serviceAccountToken'
  | 'uri';

type TVolumeProjection = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  configMap?: TMayBe<TMayBe<TConfigMapProjection>[]>;
  downwardAPI?: TMayBe<TMayBe<TDownwardAPIProjection>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'VolumeProjection';
  parent?: TMayBe<TModelBase>;
  secret?: TMayBe<TMayBe<TSecretProjection>[]>;
  service?: 'catalog';
  serviceAccountToken?: TMayBe<TMayBe<TServiceAccountTokenProjection>[]>;
};

export default TVolumeProjection;
