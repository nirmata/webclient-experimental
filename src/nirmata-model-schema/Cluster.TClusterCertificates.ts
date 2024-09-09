/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'caCertificateData'
  | 'caKeyData'
  | 'clientCertificateData'
  | 'clientKeyData'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'serverKeyData'
  | 'service'
  | 'uri'
  | 'username';

type TClusterCertificates = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  caCertificateData?: TMayBe<string>;
  caKeyData?: TMayBe<string>;
  clientCertificateData?: TMayBe<string>;
  clientKeyData?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ClusterCertificates';
  parent?: TMayBe<TModelBase>;
  serverKeyData?: TMayBe<string>;
  service?: 'cluster';
  username?: TMayBe<string>;
};

export default TClusterCertificates;
