/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'annotations'
  | 'applyCondition'
  | 'configMapKey'
  | 'configMapSecretKey'
  | 'configMapSelector'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'ingressHostSuffix'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'tlsEnabled'
  | 'uri';

export type TIngressPolicy_ApplyCondition = 'Always' | 'IfHostNotSpecified' | 'Never';

type TIngressPolicy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  annotations?: TMayBe<Record<string, TMayBe<string>>>;
  applyCondition?: TMayBe<TIngressPolicy_ApplyCondition>;
  configMapKey?: TMayBe<string>;
  configMapSecretKey?: TMayBe<string>;
  configMapSelector?: TMayBe<Record<string, string>>;
  ingressHostSuffix?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'IngressPolicy';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  tlsEnabled?: TMayBe<boolean>;
};

export default TIngressPolicy;
