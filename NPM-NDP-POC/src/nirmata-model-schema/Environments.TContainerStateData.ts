/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TContainerStateRunningData from './Environments.TContainerStateRunningData';
import TContainerStateTerminatedData from './Environments.TContainerStateTerminatedData';
import TContainerStateWaitingData from './Environments.TContainerStateWaitingData';

export type TField = 'running' | 'terminated' | 'waiting';

type TContainerStateData = {
  running?: TMayBe<TMayBe<TContainerStateRunningData>>;
  service?: 'environments';
  terminated?: TMayBe<TMayBe<TContainerStateTerminatedData>>;
  waiting?: TMayBe<TMayBe<TContainerStateWaitingData>>;
};

export default TContainerStateData;
