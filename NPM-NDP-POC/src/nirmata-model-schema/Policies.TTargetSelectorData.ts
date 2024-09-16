/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';

export type TField = 'labels' | 'modelIdRefs' | 'selectorType';

export type TTargetSelectorData_SelectorType = 'all' | 'matchLabels' | 'fixedRefs' | 'variableRefs';

type TTargetSelectorData = {
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIdRefs?: TMayBe<TMayBe<TModelBase>[]>;
  selectorType?: TMayBe<TTargetSelectorData_SelectorType>;
  service?: 'policies';
};

export default TTargetSelectorData;
