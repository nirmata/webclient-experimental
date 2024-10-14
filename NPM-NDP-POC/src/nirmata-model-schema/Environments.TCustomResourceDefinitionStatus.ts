/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TCustomResourceDefinitionNames from './Environments.TCustomResourceDefinitionNames';
import TCustomResourceDefinitionCondition from './Environments.TCustomResourceDefinitionCondition';

export type TField =
  | 'acceptedNames'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'conditions'
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
  | 'uri';

type TCustomResourceDefinitionStatus = Omit<TModelBase, 'service' | 'modelIndex'> & {
  acceptedNames?: TMayBe<TMayBe<TCustomResourceDefinitionNames>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  conditions?: TMayBe<TMayBe<TCustomResourceDefinitionCondition>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CustomResourceDefinitionStatus';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
};

export default TCustomResourceDefinitionStatus;
