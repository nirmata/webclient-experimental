/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'name' | 'pspLevel' | 'subType' | 'type';

export type TPolicyRuleData_SubType = 'podSecurity';

export type TPolicyRuleData_Type = 'Mutation' | 'Validation' | 'Generation' | 'ImageVerification';

type TPolicyRuleData = {
  name?: TMayBe<string>;
  pspLevel?: TMayBe<string>;
  service?: 'policies';
  subType?: TMayBe<TPolicyRuleData_SubType>;
  type?: TMayBe<TPolicyRuleData_Type>;
};

export default TPolicyRuleData;
