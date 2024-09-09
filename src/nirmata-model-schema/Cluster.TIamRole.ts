/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

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
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'policyArns'
  | 'policyJson'
  | 'roleName'
  | 'service'
  | 'serviceAccount'
  | 'uri';

type TIamRole = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'IamRole';
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policyArns?: TMayBe<TMayBe<string>[]>;
  policyJson?: TMayBe<string>;
  roleName?: TMayBe<string>;
  service?: 'cluster';
  serviceAccount?: TMayBe<string>;
};

export default TIamRole;
