/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'error' | 'lastStateTransitionTime' | 'lastSyncTime' | 'state';

export type TSyncStatusData_State = 'InProgress' | 'Failed' | 'Succeeded';

type TSyncStatusData = {
  error?: TMayBe<string>;
  lastStateTransitionTime?: TMayBe<number>;
  lastSyncTime?: TMayBe<number>;
  service?: 'policies';
  state?: TMayBe<TSyncStatusData_State>;
};

export default TSyncStatusData;
