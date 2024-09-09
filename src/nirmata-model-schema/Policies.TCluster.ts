/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TKyvernoConfigData from './Policies.TKyvernoConfigData';
import TSyncStatusData from './Policies.TSyncStatusData';
import TAlarm from './Policies.TAlarm';
import TClusterEvents from './Policies.TClusterEvents';
import TAccessControlList from './Policies.TAccessControlList';
import TReportSchedule from './Policies.TReportSchedule';
import TClusterComplianceReport from './Policies.TClusterComplianceReport';
import TNamespace from './Policies.TNamespace';

export type TField =
  | 'accessControlList'
  | 'additionalProperties'
  | 'adminState'
  | 'alarms'
  | 'ancestors'
  | 'cloudProvider'
  | 'clusterRef'
  | 'complianceReports'
  | 'configurationState'
  | 'connectionState'
  | 'createdBy'
  | 'createdOn'
  | 'events'
  | 'id'
  | 'initialSynced'
  | 'kubeControllerVersion'
  | 'kubeSystemUid'
  | 'kyvernoConfig'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespaces'
  | 'parent'
  | 'parent'
  | 'reportSchedule'
  | 'service'
  | 'state'
  | 'syncStatus'
  | 'uri'
  | 'version';

type TCluster = Omit<TModelBase, 'service' | 'modelIndex'> & {
  accessControlList?: TMayBe<TMayBe<TAccessControlList>[]>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  adminState?: TMayBe<string>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  cloudProvider?: TMayBe<string>;
  clusterRef?: TMayBe<TModelBase>;
  complianceReports?: TMayBe<TMayBe<TClusterComplianceReport>[]>;
  configurationState?: TMayBe<string>;
  connectionState?: TMayBe<string>;
  events?: TMayBe<TMayBe<TClusterEvents>[]>;
  initialSynced?: TMayBe<boolean>;
  kubeControllerVersion?: TMayBe<string>;
  kubeSystemUid?: TMayBe<string>;
  kyvernoConfig?: TMayBe<TMayBe<TKyvernoConfigData>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Cluster';
  name?: TMayBe<string>;
  namespaces?: TMayBe<TMayBe<TNamespace>[]>;
  parent?: TMayBe<TModelBase>;
  reportSchedule?: TMayBe<TMayBe<TReportSchedule>[]>;
  service?: 'policies';
  state?: TMayBe<string>;
  syncStatus?: TMayBe<TMayBe<TSyncStatusData>>;
  version?: TMayBe<string>;
};

export default TCluster;
