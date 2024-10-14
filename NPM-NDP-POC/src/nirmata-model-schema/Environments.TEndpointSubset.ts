/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TEndpointAddress from './Environments.TEndpointAddress';
import TEndpointPort from './Environments.TEndpointPort';

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
  service?: 'environments';
};

export default TEndpointSubset;
