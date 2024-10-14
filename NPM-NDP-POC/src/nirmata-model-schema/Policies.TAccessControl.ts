/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TObjectReferenceData from './Policies.TObjectReferenceData';
import TAlarm from './Policies.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'entityId'
  | 'entityName'
  | 'entityType'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'objects'
  | 'parent'
  | 'parent'
  | 'permission'
  | 'service'
  | 'uri';

type TAccessControl = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  entityId?: TMayBe<string>;
  entityName?: TMayBe<string>;
  entityType?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AccessControl';
  objects?: TMayBe<TMayBe<TObjectReferenceData>[]>;
  parent?: TMayBe<TModelBase>;
  permission?: TMayBe<string>;
  service?: 'policies';
};

export default TAccessControl;
