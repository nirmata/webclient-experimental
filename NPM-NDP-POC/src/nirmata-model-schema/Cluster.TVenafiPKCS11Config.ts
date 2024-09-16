/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TDeployToClusterVenafiConf from './Cluster.TDeployToClusterVenafiConf';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'crdDeployedTo'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'label'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri'
  | 'venafiImageVerifyPolicy';

type TVenafiPKCS11Config = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  crdDeployedTo?: TMayBe<TMayBe<TDeployToClusterVenafiConf>[]>;
  label?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'VenafiPKCS11Config';
  parent?: TMayBe<TModelBase>;
  service?: 'cluster';
};

export default TVenafiPKCS11Config;
