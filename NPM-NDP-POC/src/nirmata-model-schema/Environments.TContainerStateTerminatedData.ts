/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'containerID' | 'exitCode' | 'finishedAt' | 'message' | 'reason' | 'signal' | 'startedAt';

type TContainerStateTerminatedData = {
  containerID?: TMayBe<string>;
  exitCode?: TMayBe<number>;
  finishedAt?: TMayBe<string>;
  message?: TMayBe<string>;
  reason?: TMayBe<string>;
  service?: 'environments';
  signal?: TMayBe<number>;
  startedAt?: TMayBe<string>;
};

export default TContainerStateTerminatedData;
