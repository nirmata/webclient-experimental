/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectMeta from './Environments.TObjectMeta';
import TPodSpecData from './Environments.TPodSpecData';
import TPodStatus from './Environments.TPodStatus';
import TPodStatistics from './Environments.TPodStatistics';

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
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'service'
  | 'spec'
  | 'statistics'
  | 'status'
  | 'uri';

type TPod = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'Pod';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  spec?: TMayBe<TMayBe<TPodSpecData>[]>;
  statistics?: TMayBe<TMayBe<TPodStatistics>[]>;
  status?: TMayBe<TMayBe<TPodStatus>[]>;
};

export default TPod;
