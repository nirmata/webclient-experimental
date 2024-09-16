/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TPodTemplateSpec from './Catalog.TPodTemplateSpec';
import TStatefulSetUpdateStrategy from './Catalog.TStatefulSetUpdateStrategy';
import TPersistentVolumeClaim from './Catalog.TPersistentVolumeClaim';

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
  | 'podManagementPolicy'
  | 'replicas'
  | 'revisionHistoryLimit'
  | 'selector'
  | 'service'
  | 'serviceName'
  | 'template'
  | 'updateStrategy'
  | 'uri'
  | 'volumeClaimTemplates';

type TStatefulSetSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'StatefulSetSpec';
  parent?: TMayBe<TModelBase>;
  podManagementPolicy?: TMayBe<string>;
  replicas?: TMayBe<number>;
  revisionHistoryLimit?: TMayBe<number>;
  selector?: TMayBe<Record<string, string>>;
  service?: 'catalog';
  serviceName?: TMayBe<string>;
  template?: TMayBe<TMayBe<TPodTemplateSpec>[]>;
  updateStrategy?: TMayBe<TMayBe<TStatefulSetUpdateStrategy>[]>;
  volumeClaimTemplates?: TMayBe<TMayBe<TPersistentVolumeClaim>[]>;
};

export default TStatefulSetSpec;
