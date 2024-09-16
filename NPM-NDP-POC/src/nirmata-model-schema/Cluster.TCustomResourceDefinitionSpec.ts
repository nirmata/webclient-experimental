/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TCustomResourceDefinitionNames from './Cluster.TCustomResourceDefinitionNames';
import TCustomResourceSubresources from './Cluster.TCustomResourceSubresources';
import TCustomResourceValidation from './Cluster.TCustomResourceValidation';
import TCustomResourceDefinitionVersion from './Cluster.TCustomResourceDefinitionVersion';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'group'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'names'
  | 'parent'
  | 'parent'
  | 'scope'
  | 'service'
  | 'subresources'
  | 'uri'
  | 'validation'
  | 'version'
  | 'versions';

type TCustomResourceDefinitionSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  group?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CustomResourceDefinitionSpec';
  names?: TMayBe<TMayBe<TCustomResourceDefinitionNames>[]>;
  parent?: TMayBe<TModelBase>;
  scope?: TMayBe<string>;
  service?: 'cluster';
  subresources?: TMayBe<TMayBe<TCustomResourceSubresources>[]>;
  validation?: TMayBe<TMayBe<TCustomResourceValidation>[]>;
  version?: TMayBe<string>;
  versions?: TMayBe<TMayBe<TCustomResourceDefinitionVersion>[]>;
};

export default TCustomResourceDefinitionSpec;
