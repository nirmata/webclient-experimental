/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TObjectReference from './Environments.TObjectReference';
import TObjectMeta from './Environments.TObjectMeta';
import TEventSource from './Environments.TEventSource';

export type TField =
  | 'action'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'apiVersion'
  | 'count'
  | 'createdBy'
  | 'createdOn'
  | 'eventTime'
  | 'firstTimestamp'
  | 'id'
  | 'involvedObject'
  | 'isFailed'
  | 'kind'
  | 'labels'
  | 'lastTimestamp'
  | 'message'
  | 'metadata'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'objectRef'
  | 'parent'
  | 'parent'
  | 'reason'
  | 'related'
  | 'reportingComponent'
  | 'service'
  | 'source'
  | 'type'
  | 'uri';

type TEvent = Omit<TModelBase, 'service' | 'modelIndex'> & {
  action?: TMayBe<string>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  apiVersion?: TMayBe<string>;
  count?: TMayBe<number>;
  eventTime?: TMayBe<string>;
  firstTimestamp?: TMayBe<string>;
  involvedObject?: TMayBe<TMayBe<TObjectReference>[]>;
  isFailed?: TMayBe<boolean>;
  kind?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  lastTimestamp?: TMayBe<string>;
  message?: TMayBe<string>;
  metadata?: TMayBe<TMayBe<TObjectMeta>[]>;
  modelIndex?: 'Event';
  name?: TMayBe<string>;
  objectRef?: TMayBe<TModelBase>;
  parent?: TMayBe<TModelBase>;
  reason?: TMayBe<string>;
  related?: TMayBe<TMayBe<TObjectReference>[]>;
  reportingComponent?: TMayBe<string>;
  service?: 'environments';
  source?: TMayBe<TMayBe<TEventSource>[]>;
  type?: TMayBe<string>;
};

export default TEvent;
