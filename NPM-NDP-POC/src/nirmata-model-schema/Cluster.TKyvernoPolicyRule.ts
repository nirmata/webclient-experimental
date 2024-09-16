/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TMutationRule from './Cluster.TMutationRule';
import TValidationRule from './Cluster.TValidationRule';
import TGenerationRule from './Cluster.TGenerationRule';
import TMatchResources from './Cluster.TMatchResources';
import TExcludeResources from './Cluster.TExcludeResources';
import TImageVerification from './Cluster.TImageVerification';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'context'
  | 'createdBy'
  | 'createdOn'
  | 'exclude'
  | 'generate'
  | 'id'
  | 'imageExtractors'
  | 'labels'
  | 'match'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'mutate'
  | 'name'
  | 'parent'
  | 'parent'
  | 'preconditions'
  | 'service'
  | 'uri'
  | 'validate'
  | 'verifyImages';

type TKyvernoPolicyRule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  context?: TMayBe<object>;
  exclude?: TMayBe<TMayBe<TExcludeResources>[]>;
  generate?: TMayBe<TMayBe<TGenerationRule>[]>;
  imageExtractors?: TMayBe<object>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  match?: TMayBe<TMayBe<TMatchResources>[]>;
  modelIndex?: 'KyvernoPolicyRule';
  mutate?: TMayBe<TMayBe<TMutationRule>[]>;
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  preconditions?: TMayBe<object>;
  service?: 'cluster';
  validate?: TMayBe<TMayBe<TValidationRule>[]>;
  verifyImages?: TMayBe<TMayBe<TImageVerification>[]>;
};

export default TKyvernoPolicyRule;
