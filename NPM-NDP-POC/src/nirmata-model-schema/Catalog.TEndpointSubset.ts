/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TEndpointAddress from './Catalog.TEndpointAddress';
import TEndpointPort from './Catalog.TEndpointPort';

export type TField =
  | 'additionalProperties'
  | 'addresses'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'notReadyAddresses'
  | 'parent'
  | 'parent'
  | 'ports'
  | 'service'
  | 'uri';

type TEndpointSubset = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  addresses?: TMayBe<TMayBe<TEndpointAddress>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'EndpointSubset';
  notReadyAddresses?: TMayBe<TMayBe<TEndpointAddress>[]>;
  parent?: TMayBe<TModelBase>;
  ports?: TMayBe<TMayBe<TEndpointPort>[]>;
  service?: 'catalog';
};

export default TEndpointSubset;
