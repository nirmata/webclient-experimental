/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TIngressServiceBackend from './Catalog.TIngressServiceBackend';
import TTypedLocalObjectReference from './Catalog.TTypedLocalObjectReference';

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
  | 'resource'
  | 'service'
  | 'serviceBackend'
  | 'serviceName'
  | 'servicePort'
  | 'uri';

type TIngressBackend = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'IngressBackend';
  parent?: TMayBe<TModelBase>;
  resource?: TMayBe<TMayBe<TTypedLocalObjectReference>[]>;
  service?: 'catalog';
  serviceBackend?: TMayBe<TMayBe<TIngressServiceBackend>[]>;
  serviceName?: TMayBe<string>;
  servicePort?: TMayBe<number | string>;
};

export default TIngressBackend;
