/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectMeta from './Environments.TObjectMeta';
import TCustomResourceDefinitionStatus from './Environments.TCustomResourceDefinitionStatus';
import TCustomResourceDefinitionSpec from './Environments.TCustomResourceDefinitionSpec';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'application'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kind'
  | 'labels'
  | 'lastSyncTime'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'spec'
  | 'status'
  | 'syncState'
  | 'uri';

export type TCustomResourceDefinition_SyncState = 'inSync' | 'applyingChanges' | 'failedApply' | 'pendingApply';

type TCustomResourceDefinition = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSyncTime?: TMayBe<number>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'CustomResourceDefinition';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  spec?: TMayBe<TMayBe<TCustomResourceDefinitionSpec>[]>;
  status?: TMayBe<TMayBe<TCustomResourceDefinitionStatus>[]>;
  syncState?: TMayBe<TCustomResourceDefinition_SyncState>;
};

export default TCustomResourceDefinition;
