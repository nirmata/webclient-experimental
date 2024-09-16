/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'driver'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'options'
  | 'parent'
  | 'parent'
  | 'retention'
  | 'scope'
  | 'service'
  | 'uri'
  | 'volumeSharing'
  | 'volumeSpecs';

export type TStoragePolicy_Retention = 'deleteWithService' | 'deleteWithEnvironment' | 'deleteManually';

export type TStoragePolicy_Scope = 'cluster' | 'host';

type TStoragePolicy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  description?: TMayBe<string>;
  driver?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'StoragePolicy';
  name?: TMayBe<string>;
  options?: TMayBe<Record<string, TMayBe<string>>>;
  parent?: TMayBe<TModelBase>;
  retention?: TMayBe<TStoragePolicy_Retention>;
  scope?: TMayBe<TStoragePolicy_Scope>;
  service?: 'config';
  volumeSharing?: TMayBe<boolean>;
};

export default TStoragePolicy;
