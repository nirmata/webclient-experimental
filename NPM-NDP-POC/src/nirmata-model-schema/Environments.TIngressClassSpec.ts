/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TIngressClassParametersReference from './Environments.TIngressClassParametersReference';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'controller'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parameters'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TIngressClassSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  controller?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'IngressClassSpec';
  parameters?: TMayBe<TMayBe<TIngressClassParametersReference>[]>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
};

export default TIngressClassSpec;
