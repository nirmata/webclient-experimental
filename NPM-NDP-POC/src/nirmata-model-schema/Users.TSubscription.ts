/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TLicenseUsageInfoData from './Users.TLicenseUsageInfoData';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'billingInterval'
  | 'createdBy'
  | 'createdOn'
  | 'description'
  | 'discountPercent'
  | 'endDate'
  | 'entitlements'
  | 'id'
  | 'isTrial'
  | 'labels'
  | 'licenseKey'
  | 'licenseUsageInfo'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'product'
  | 'productName'
  | 'service'
  | 'startDate'
  | 'state'
  | 'stripeSubscriptionId'
  | 'trialDays'
  | 'uri'
  | 'usage'
  | 'version';

export type TSubscription_BillingInterval = 'hourly' | 'monthly' | 'annual';

export type TSubscription_State = 'active' | 'inactive' | 'inactivePendingCharges';

type TSubscription = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  billingInterval?: TMayBe<TSubscription_BillingInterval>;
  description?: TMayBe<string>;
  discountPercent?: TMayBe<number>;
  endDate?: TMayBe<number>;
  entitlements?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  isTrial?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  licenseKey?: TMayBe<string>;
  licenseUsageInfo?: TMayBe<TMayBe<TLicenseUsageInfoData>[]>;
  modelIndex?: 'Subscription';
  parent?: TMayBe<TModelBase>;
  productName?: TMayBe<string>;
  service?: 'users';
  startDate?: TMayBe<number>;
  state?: TMayBe<TSubscription_State>;
  stripeSubscriptionId?: TMayBe<string>;
  trialDays?: TMayBe<number>;
  usage?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  version?: TMayBe<number>;
};

export default TSubscription;
