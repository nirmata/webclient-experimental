/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clientId'
  | 'clientSecret'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'resourceGroup'
  | 'service'
  | 'subscriptionId'
  | 'tenantId'
  | 'uri';

type TVeleroAzureConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clientId?: TMayBe<string>;
  clientSecret?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'VeleroAzureConfig';
  parent?: TMayBe<TModelBase>;
  resourceGroup?: TMayBe<string>;
  service?: 'cluster';
  subscriptionId?: TMayBe<string>;
  tenantId?: TMayBe<string>;
};

export default TVeleroAzureConfig;
