/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'enableEmailNotification'
  | 'enableKubeconfig'
  | 'enableTokenExpiration'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'tokenExpirationTime'
  | 'uri';

type TKubeconfigSettings = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  enableEmailNotification?: TMayBe<boolean>;
  enableKubeconfig?: TMayBe<boolean>;
  enableTokenExpiration?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'KubeconfigSettings';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  tokenExpirationTime?: TMayBe<number>;
};

export default TKubeconfigSettings;
