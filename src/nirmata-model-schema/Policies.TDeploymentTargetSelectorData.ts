/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TTargetSelectorData from './Policies.TTargetSelectorData';

export type TField = 'clusterSelector' | 'namespaceSelector';

type TDeploymentTargetSelectorData = {
  clusterSelector?: TMayBe<TMayBe<TTargetSelectorData>>;
  namespaceSelector?: TMayBe<TMayBe<TTargetSelectorData>>;
  service?: 'policies';
};

export default TDeploymentTargetSelectorData;
