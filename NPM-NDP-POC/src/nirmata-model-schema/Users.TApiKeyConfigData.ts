/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

export type TField = 'apiKeyExpiryTimes' | 'configType';

export type TApiKeyConfigData_ConfigType = 'none' | 'all' | 'role' | 'idp';

type TApiKeyConfigData = {
  apiKeyExpiryTimes?: TMayBe<Record<string, TMayBe<string>>>;
  configType?: TMayBe<TApiKeyConfigData_ConfigType>;
  service?: 'users';
};

export default TApiKeyConfigData;
