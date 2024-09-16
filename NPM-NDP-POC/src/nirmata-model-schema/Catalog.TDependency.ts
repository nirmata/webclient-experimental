/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'appId'
  | 'channelId'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri'
  | 'versionId';

type TDependency = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  appId?: TMayBe<TModelBase>;
  channelId?: TMayBe<TModelBase>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Dependency';
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
  versionId?: TMayBe<TModelBase>;
};

export default TDependency;
