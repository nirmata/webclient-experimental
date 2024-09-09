/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TObjectReferenceData from './Policies.TObjectReferenceData';
import TPolicyDetailsData from './Policies.TPolicyDetailsData';
import TAlarm from './Policies.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterRef'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'imageRef'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'policyDetails'
  | 'resource'
  | 'service'
  | 'uri';

type TImageViolation = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterRef?: TMayBe<TModelBase>;
  imageRef?: TMayBe<TModelBase>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ImageViolation';
  parent?: TMayBe<TModelBase>;
  policyDetails?: TMayBe<TMayBe<TPolicyDetailsData>>;
  resource?: TMayBe<TMayBe<TObjectReferenceData>>;
  service?: 'policies';
};

export default TImageViolation;
