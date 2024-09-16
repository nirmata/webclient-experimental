/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TPolicyViolationDetailsData from './Policies.TPolicyViolationDetailsData';
import TApprovalInfoData from './Policies.TApprovalInfoData';

export type TField =
  | 'addedApprovers'
  | 'addedViolations'
  | 'modifiedApproverCurrentInfo'
  | 'modifiedApproverPrevInfo'
  | 'removedApprovers'
  | 'removedViolations';

type TPerEditData = {
  addedApprovers?: TMayBe<TMayBe<TApprovalInfoData>[]>;
  addedViolations?: TMayBe<TMayBe<TPolicyViolationDetailsData>[]>;
  modifiedApproverCurrentInfo?: TMayBe<TMayBe<TApprovalInfoData>>;
  modifiedApproverPrevInfo?: TMayBe<TMayBe<TApprovalInfoData>>;
  removedApprovers?: TMayBe<TMayBe<TApprovalInfoData>[]>;
  removedViolations?: TMayBe<TMayBe<TPolicyViolationDetailsData>[]>;
  service?: 'policies';
};

export default TPerEditData;
