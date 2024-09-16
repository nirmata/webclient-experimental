/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TModelBase from './TModelBase';

export type TField =
  | 'approvalState'
  | 'approver'
  | 'approverEmail'
  | 'approverName'
  | 'isRequiredApprover'
  | 'message'
  | 'messageTimestamp';

export type TApprovalInfoData_ApprovalState = 'pendingApproval' | 'approved' | 'rejected' | 'revoked';

type TApprovalInfoData = {
  approvalState?: TMayBe<TApprovalInfoData_ApprovalState>;
  approver?: TMayBe<TModelBase>;
  approverEmail?: TMayBe<string>;
  approverName?: TMayBe<string>;
  isRequiredApprover?: TMayBe<boolean>;
  message?: TMayBe<string>;
  messageTimestamp?: TMayBe<number>;
  service?: 'policies';
};

export default TApprovalInfoData;
