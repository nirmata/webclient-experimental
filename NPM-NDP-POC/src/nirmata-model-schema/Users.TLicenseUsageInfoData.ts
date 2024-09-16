/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TModelBase from './TModelBase';

export type TField =
  | 'clusterId'
  | 'clusterName'
  | 'clusterRef'
  | 'lastReported'
  | 'message'
  | 'numOfNodes'
  | 'numOfPolicies'
  | 'updateMechanism';

export type TLicenseUsageInfoData_UpdateMechanism = 'automatic' | 'manual';

type TLicenseUsageInfoData = {
  clusterId?: TMayBe<string>;
  clusterName?: TMayBe<string>;
  clusterRef?: TMayBe<TModelBase>;
  lastReported?: TMayBe<number>;
  message?: TMayBe<string>;
  numOfNodes?: TMayBe<number>;
  numOfPolicies?: TMayBe<number>;
  service?: 'users';
  updateMechanism?: TMayBe<TLicenseUsageInfoData_UpdateMechanism>;
};

export default TLicenseUsageInfoData;
