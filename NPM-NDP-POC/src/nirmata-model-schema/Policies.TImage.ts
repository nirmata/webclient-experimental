/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Policies.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'digest'
  | 'fullName'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'registry'
  | 'resourceCount'
  | 'service'
  | 'tag'
  | 'uri'
  | 'violationCount'
  | 'vulnerabilityReports'
  | 'vulnerabilitySummary';

type TImage = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  digest?: TMayBe<string>;
  fullName?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Image';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  registry?: TMayBe<string>;
  resourceCount?: TMayBe<number>;
  service?: 'policies';
  tag?: TMayBe<string>;
  violationCount?: TMayBe<number>;
  vulnerabilityReports?: TMayBe<TMayBe<TModelBase>[]>;
  vulnerabilitySummary?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
};

export default TImage;
