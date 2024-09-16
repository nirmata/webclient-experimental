/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Policies.TAlarm';
import TAccessControlList from './Policies.TAccessControlList';
import TNamespaceComplianceReport from './Policies.TNamespaceComplianceReport';

export type TField =
  | 'accessControlList'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterName'
  | 'complianceReports'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespaceRef'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TNamespace = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterName?: TMayBe<string>;
  complianceReports?: TMayBe<TMayBe<TNamespaceComplianceReport>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Namespace';
  name?: TMayBe<string>;
  namespaceRef?: TMayBe<TModelBase>;
  parent?: TMayBe<TModelBase>;
  service?: 'policies';
};

export default TNamespace;
