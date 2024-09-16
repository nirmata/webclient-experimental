/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TPolicyDetailsData from './Policies.TPolicyDetailsData';
import TObjectReferenceData from './Policies.TObjectReferenceData';
import TAlarm from './Policies.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'clusterRef'
  | 'createdBy'
  | 'createdOn'
  | 'exceptedResources'
  | 'exceptions'
  | 'id'
  | 'kind'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'requestDetails'
  | 'resourceVersion'
  | 'service'
  | 'uid'
  | 'uri'
  | 'yaml';

type TPolicyException = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  clusterRef?: TMayBe<TModelBase>;
  exceptedResources?: TMayBe<TMayBe<TObjectReferenceData>[]>;
  exceptions?: TMayBe<TMayBe<TPolicyDetailsData>[]>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PolicyException';
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  requestDetails?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  resourceVersion?: TMayBe<string>;
  service?: 'policies';
  uid?: TMayBe<string>;
  yaml?: TMayBe<string>;
};

export default TPolicyException;
