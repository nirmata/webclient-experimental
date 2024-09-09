/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TModelBase from './TModelBase';

export type TField = 'kind' | 'namespace' | 'policyName' | 'policyRef' | 'policyUID' | 'ruleNames';

type TPolicyDetailsData = {
  kind?: TMayBe<string>;
  namespace?: TMayBe<string>;
  policyName?: TMayBe<string>;
  policyRef?: TMayBe<TModelBase>;
  policyUID?: TMayBe<string>;
  ruleNames?: TMayBe<TMayBe<string>[]>;
  service?: 'policies';
};

export default TPolicyDetailsData;
