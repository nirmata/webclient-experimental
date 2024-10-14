/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'appVersion'
  | 'chartFileContent'
  | 'chartName'
  | 'chartRepo'
  | 'chartVersion'
  | 'createdBy'
  | 'createdOn'
  | 'defaultValueFileContent'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'readMeFileContent'
  | 'service'
  | 'uri'
  | 'valueFileContent';

type THelmConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  appVersion?: TMayBe<string>;
  chartFileContent?: TMayBe<string>;
  chartName?: TMayBe<string>;
  chartVersion?: TMayBe<string>;
  defaultValueFileContent?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'HelmConfig';
  parent?: TMayBe<TModelBase>;
  readMeFileContent?: TMayBe<string>;
  service?: 'catalog';
  valueFileContent?: TMayBe<string>;
};

export default THelmConfig;
