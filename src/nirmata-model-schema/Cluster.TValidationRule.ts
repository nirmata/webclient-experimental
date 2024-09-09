/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TValidationDeny from './Cluster.TValidationDeny';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'anyPattern'
  | 'createdBy'
  | 'createdOn'
  | 'deny'
  | 'foreach'
  | 'id'
  | 'labels'
  | 'manifests'
  | 'message'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'pattern'
  | 'podSecurity'
  | 'service'
  | 'uri';

type TValidationRule = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  anyPattern?: TMayBe<object>;
  deny?: TMayBe<TMayBe<TValidationDeny>[]>;
  foreach?: TMayBe<object>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  manifests?: TMayBe<object>;
  message?: TMayBe<string>;
  modelIndex?: 'ValidationRule';
  parent?: TMayBe<TModelBase>;
  pattern?: TMayBe<object>;
  podSecurity?: TMayBe<object>;
  service?: 'cluster';
};

export default TValidationRule;
