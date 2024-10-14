/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'action'
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
  | 'namespaces'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

export type TValidationFailureActionOverride_Action = 'enforce' | 'audit' | 'Audit' | 'Enforce';

type TValidationFailureActionOverride = Omit<TModelBase, 'service' | 'modelIndex'> & {
  action?: TMayBe<TValidationFailureActionOverride_Action>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ValidationFailureActionOverride';
  namespaces?: TMayBe<TMayBe<string>[]>;
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
};

export default TValidationFailureActionOverride;
