/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TKyvernoPolicyRule from './Cluster.TKyvernoPolicyRule';
import TValidationFailureActionOverride from './Cluster.TValidationFailureActionOverride';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'applyRules'
  | 'background'
  | 'createdBy'
  | 'createdOn'
  | 'failurePolicy'
  | 'generateExistingOnPolicyUpdate'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'mutateExistingOnPolicyUpdate'
  | 'parent'
  | 'parent'
  | 'rules'
  | 'schemaValidation'
  | 'service'
  | 'uri'
  | 'validationFailureAction'
  | 'validationFailureActionOverrides'
  | 'webhookTimeoutSeconds';

export type TKyvernoPolicySpec_ApplyRules = 'All' | 'One';

export type TKyvernoPolicySpec_FailurePolicy = 'Ignore' | 'Fail';

export type TKyvernoPolicySpec_ValidationFailureAction = 'enforce' | 'audit' | 'Audit' | 'Enforce';

type TKyvernoPolicySpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  applyRules?: TMayBe<TKyvernoPolicySpec_ApplyRules>;
  background?: TMayBe<boolean>;
  failurePolicy?: TMayBe<TKyvernoPolicySpec_FailurePolicy>;
  generateExistingOnPolicyUpdate?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'KyvernoPolicySpec';
  mutateExistingOnPolicyUpdate?: TMayBe<boolean>;
  parent?: TMayBe<TModelBase>;
  rules?: TMayBe<TMayBe<TKyvernoPolicyRule>[]>;
  schemaValidation?: TMayBe<boolean>;
  service?: 'cluster';
  validationFailureAction?: TMayBe<TKyvernoPolicySpec_ValidationFailureAction>;
  validationFailureActionOverrides?: TMayBe<TMayBe<TValidationFailureActionOverride>[]>;
  webhookTimeoutSeconds?: TMayBe<number>;
};

export default TKyvernoPolicySpec;
