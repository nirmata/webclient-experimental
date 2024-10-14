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
  | 'apiVersion'
  | 'clusterRef'
  | 'count'
  | 'createdBy'
  | 'createdOn'
  | 'firstSeen'
  | 'id'
  | 'kind'
  | 'labels'
  | 'lastSeen'
  | 'message'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'namespace'
  | 'parent'
  | 'parent'
  | 'policyDetails'
  | 'reason'
  | 'regarding'
  | 'related'
  | 'resourceVersion'
  | 'service'
  | 'uid'
  | 'uri'
  | 'yaml';

type TEvent = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  clusterRef?: TMayBe<TModelBase>;
  count?: TMayBe<number>;
  firstSeen?: TMayBe<number>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastSeen?: TMayBe<number>;
  message?: TMayBe<string>;
  modelIndex?: 'Event';
  name?: TMayBe<string>;
  namespace?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  policyDetails?: TMayBe<TMayBe<TPolicyDetailsData>>;
  reason?: TMayBe<string>;
  regarding?: TMayBe<TMayBe<TObjectReferenceData>>;
  related?: TMayBe<TMayBe<TObjectReferenceData>>;
  resourceVersion?: TMayBe<string>;
  service?: 'policies';
  uid?: TMayBe<string>;
  yaml?: TMayBe<string>;
};

export default TEvent;
