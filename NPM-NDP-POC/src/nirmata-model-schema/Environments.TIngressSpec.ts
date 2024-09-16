/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TIngressBackend from './Environments.TIngressBackend';
import TIngressRule from './Environments.TIngressRule';
import TIngressTLS from './Environments.TIngressTLS';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'backend'
  | 'createdBy'
  | 'createdOn'
  | 'defaultBackend'
  | 'id'
  | 'ingressClassName'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'rules'
  | 'service'
  | 'tls'
  | 'uri';

type TIngressSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  backend?: TMayBe<TMayBe<TIngressBackend>[]>;
  defaultBackend?: TMayBe<TMayBe<TIngressBackend>[]>;
  ingressClassName?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'IngressSpec';
  parent?: TMayBe<TModelBase>;
  rules?: TMayBe<TMayBe<TIngressRule>[]>;
  service?: 'environments';
  tls?: TMayBe<TMayBe<TIngressTLS>[]>;
};

export default TIngressSpec;
