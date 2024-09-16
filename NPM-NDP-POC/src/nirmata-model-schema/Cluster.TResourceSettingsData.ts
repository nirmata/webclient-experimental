/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'resourceLimits' | 'resourceRequests';

type TResourceSettingsData = {
  resourceLimits?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  resourceRequests?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  service?: 'cluster';
};

export default TResourceSettingsData;
