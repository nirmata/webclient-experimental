/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterId'
  | 'comments'
  | 'createdBy'
  | 'createdOn'
  | 'email1DaysWarningSent'
  | 'email3DaysWarningSent'
  | 'email5DaysWarningSent'
  | 'emailKubeconfigExpiredSent'
  | 'id'
  | 'kubeconfigDownloaded'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'serviceAccountName'
  | 'tokenDuration'
  | 'tokenExpirationTime'
  | 'tokenGenerationTime'
  | 'uri'
  | 'userEmail'
  | 'userId';

type TKubeconfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterId?: TMayBe<string>;
  comments?: TMayBe<TMayBe<string>[]>;
  email1DaysWarningSent?: TMayBe<boolean>;
  email3DaysWarningSent?: TMayBe<boolean>;
  email5DaysWarningSent?: TMayBe<boolean>;
  emailKubeconfigExpiredSent?: TMayBe<boolean>;
  kubeconfigDownloaded?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Kubeconfig';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  serviceAccountName?: TMayBe<string>;
  tokenDuration?: TMayBe<number>;
  tokenExpirationTime?: TMayBe<number>;
  tokenGenerationTime?: TMayBe<number>;
  userEmail?: TMayBe<string>;
  userId?: TMayBe<string>;
};

export default TKubeconfig;
