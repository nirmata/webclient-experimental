/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TRollingUpdate from './Catalog.TRollingUpdate';

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
  | 'rollingUpdate'
  | 'service'
  | 'type'
  | 'uri';

export type TDeploymentStrategy_Type = 'Recreate' | 'RollingUpdate';

type TDeploymentStrategy = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'DeploymentStrategy';
  parent?: TMayBe<TModelBase>;
  rollingUpdate?: TMayBe<TMayBe<TRollingUpdate>[]>;
  service?: 'catalog';
  type?: TMayBe<TDeploymentStrategy_Type>;
};

export default TDeploymentStrategy;
