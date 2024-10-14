/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TIngressBackend from './Environments.TIngressBackend';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'backend'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'path'
  | 'pathType'
  | 'service'
  | 'uri';

export type THTTPIngressPath_PathType = 'Exact' | 'Prefix' | 'ImplementationSpecific';

type THTTPIngressPath = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  backend?: TMayBe<TMayBe<TIngressBackend>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'HTTPIngressPath';
  parent?: TMayBe<TModelBase>;
  path?: TMayBe<string>;
  pathType?: TMayBe<THTTPIngressPath_PathType>;
  service?: 'environments';
};

export default THTTPIngressPath;
