/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TPodTemplateSpec from './Catalog.TPodTemplateSpec';
import TDaemonSetUpdateStrategy from './Catalog.TDaemonSetUpdateStrategy';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'minReadySeconds'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'revisionHistoryLimit'
  | 'selector'
  | 'service'
  | 'template'
  | 'updateStrategy'
  | 'uri';

type TDaemonSetSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  minReadySeconds?: TMayBe<number>;
  modelIndex?: 'DaemonSetSpec';
  parent?: TMayBe<TModelBase>;
  revisionHistoryLimit?: TMayBe<number>;
  selector?: TMayBe<Record<string, string>>;
  service?: 'catalog';
  template?: TMayBe<TMayBe<TPodTemplateSpec>[]>;
  updateStrategy?: TMayBe<TMayBe<TDaemonSetUpdateStrategy>[]>;
};

export default TDaemonSetSpec;
