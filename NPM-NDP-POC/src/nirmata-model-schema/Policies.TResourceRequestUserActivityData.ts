/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TPerEditData from './Policies.TPerEditData';

export type TField = 'fromState' | 'message' | 'modifiedBy' | 'modifiedOn' | 'perEdit' | 'toState';

export type TResourceRequestUserActivityData_FromState =
  | 'pendingApproval'
  | 'approved'
  | 'rejected'
  | 'applying'
  | 'completed'
  | 'failedDeploy'
  | 'cancelled'
  | 'revoked';

export type TResourceRequestUserActivityData_ToState =
  | 'pendingApproval'
  | 'approved'
  | 'rejected'
  | 'applying'
  | 'completed'
  | 'failedDeploy'
  | 'cancelled'
  | 'revoked';

type TResourceRequestUserActivityData = {
  fromState?: TMayBe<TResourceRequestUserActivityData_FromState>;
  message?: TMayBe<string>;
  modifiedBy?: TMayBe<string>;
  modifiedOn?: TMayBe<number>;
  perEdit?: TMayBe<TMayBe<TPerEditData>>;
  service?: 'policies';
  toState?: TMayBe<TResourceRequestUserActivityData_ToState>;
};

export default TResourceRequestUserActivityData;
