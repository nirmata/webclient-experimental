/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TApplication from './Catalog.TApplication';
import TChartRepository from './Catalog.TChartRepository';
import TCustomResourceDefinition from './Catalog.TCustomResourceDefinition';
import TCatalogs from './Catalog.TCatalogs';
import TAlarmType from './Catalog.TAlarmType';
import TAlarmNotifier from './Catalog.TAlarmNotifier';

export type TField =
  | 'additionalProperties'
  | 'alarmNotifiers'
  | 'alarmTypes'
  | 'alarms'
  | 'ancestors'
  | 'applications'
  | 'catalogs'
  | 'chartRepositories'
  | 'createdBy'
  | 'createdOn'
  | 'customResourceDefinitions'
  | 'id'
  | 'labels'
  | 'modelId'
  | 'modelIndex'
  | 'modelName'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TRoot = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarmNotifiers?: TMayBe<TMayBe<TAlarmNotifier>[]>;
  alarmTypes?: TMayBe<TMayBe<TAlarmType>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  applications?: TMayBe<TMayBe<TApplication>[]>;
  catalogs?: TMayBe<TMayBe<TCatalogs>[]>;
  chartRepositories?: TMayBe<TMayBe<TChartRepository>[]>;
  customResourceDefinitions?: TMayBe<TMayBe<TCustomResourceDefinition>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelId?: TMayBe<string>;
  modelIndex?: 'Root';
  modelName?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
};

export default TRoot;
