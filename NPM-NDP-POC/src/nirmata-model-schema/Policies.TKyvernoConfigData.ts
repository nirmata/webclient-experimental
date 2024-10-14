/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TModelBase from './TModelBase';

export type TField =
  | 'args'
  | 'clusterRef'
  | 'isPolicyExceptionsEnabled'
  | 'kyvernoVersion'
  | 'namespace'
  | 'policyExceptionNamespace';

type TKyvernoConfigData = {
  args?: TMayBe<TMayBe<string>[]>;
  clusterRef?: TMayBe<TModelBase>;
  isPolicyExceptionsEnabled?: TMayBe<boolean>;
  kyvernoVersion?: TMayBe<string>;
  namespace?: TMayBe<string>;
  policyExceptionNamespace?: TMayBe<string>;
  service?: 'policies';
};

export default TKyvernoConfigData;
