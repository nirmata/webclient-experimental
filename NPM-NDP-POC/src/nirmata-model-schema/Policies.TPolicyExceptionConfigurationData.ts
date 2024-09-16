/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TPolicyDetailsData from './Policies.TPolicyDetailsData';
import TPolicyExceptionResourceData from './Policies.TPolicyExceptionResourceData';
import TPolicyViolationDetailsData from './Policies.TPolicyViolationDetailsData';
import TDeploymentTargetSelectorData from './Policies.TDeploymentTargetSelectorData';

export type TField =
  | 'exceptions'
  | 'expiryTime'
  | 'matchCondition'
  | 'matchResources'
  | 'startTime'
  | 'targetSelectors'
  | 'ttl'
  | 'violations';

export type TPolicyExceptionConfigurationData_MatchCondition = 'any' | 'all';

type TPolicyExceptionConfigurationData = {
  exceptions?: TMayBe<TMayBe<TPolicyDetailsData>[]>;
  expiryTime?: TMayBe<number>;
  matchCondition?: TMayBe<TPolicyExceptionConfigurationData_MatchCondition>;
  matchResources?: TMayBe<TMayBe<TPolicyExceptionResourceData>[]>;
  service?: 'policies';
  startTime?: TMayBe<number>;
  targetSelectors?: TMayBe<TMayBe<TDeploymentTargetSelectorData>[]>;
  ttl?: TMayBe<string>;
  violations?: TMayBe<TMayBe<TPolicyViolationDetailsData>[]>;
};

export default TPolicyExceptionConfigurationData;
