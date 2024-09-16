/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TNodeAffinity from './Catalog.TNodeAffinity';
import TPodAffinity from './Catalog.TPodAffinity';
import TPodAntiAffinity from './Catalog.TPodAntiAffinity';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'nodeAffinity'
  | 'parent'
  | 'parent'
  | 'podAffinity'
  | 'podAntiAffinity'
  | 'service'
  | 'uri';

type TAffinity = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Affinity';
  nodeAffinity?: TMayBe<TMayBe<TNodeAffinity>[]>;
  parent?: TMayBe<TModelBase>;
  podAffinity?: TMayBe<TMayBe<TPodAffinity>[]>;
  podAntiAffinity?: TMayBe<TMayBe<TPodAntiAffinity>[]>;
  service?: 'catalog';
};

export default TAffinity;
