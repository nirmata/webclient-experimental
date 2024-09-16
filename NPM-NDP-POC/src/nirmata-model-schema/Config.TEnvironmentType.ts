/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TUpdatePolicy from './Config.TUpdatePolicy';
import TAccessControlList from './Config.TAccessControlList';

export type TField =
  | 'acceptFromTag'
  | 'accessControlList'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'environments'
  | 'id'
  | 'labels'
  | 'modelId'
  | 'modelIdList'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'orchestrator'
  | 'parent'
  | 'parent'
  | 'promoteToTag'
  | 'resourceSelectionRules'
  | 'service'
  | 'serviceAffinityRules'
  | 'serviceScalingRules'
  | 'sourceRegistry'
  | 'targetRegistry'
  | 'updatePolicy'
  | 'uri';

export type TEnvironmentType_Orchestrator = 'nirmata' | 'kubernetes';

type TEnvironmentType = Omit<TModelBase, 'service' | 'modelIndex'> & {
  acceptFromTag?: TMayBe<string>;
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  description?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelId?: TMayBe<TModelBase>;
  modelIdList?: TMayBe<TMayBe<TModelBase>[]>;
  modelIndex?: 'EnvironmentType';
  name?: TMayBe<string>;
  orchestrator?: TMayBe<TEnvironmentType_Orchestrator>;
  parent?: TMayBe<TModelBase>;
  promoteToTag?: TMayBe<string>;
  service?: 'config';
  sourceRegistry?: TMayBe<string>;
  targetRegistry?: TMayBe<string>;
  updatePolicy?: TMayBe<TMayBe<TUpdatePolicy>[]>;
};

export default TEnvironmentType;
