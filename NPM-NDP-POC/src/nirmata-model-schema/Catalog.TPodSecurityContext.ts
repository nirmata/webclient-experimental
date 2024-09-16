/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TSELinuxOptions from './Catalog.TSELinuxOptions';
import TSysctl from './Catalog.TSysctl';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'fsGroup'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'runAsGroup'
  | 'runAsNonRoot'
  | 'runAsUser'
  | 'seLinuxOptions'
  | 'service'
  | 'supplementalGroups'
  | 'sysctls'
  | 'uri';

type TPodSecurityContext = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  fsGroup?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'PodSecurityContext';
  parent?: TMayBe<TModelBase>;
  runAsGroup?: TMayBe<number>;
  runAsNonRoot?: TMayBe<boolean>;
  runAsUser?: TMayBe<number>;
  seLinuxOptions?: TMayBe<TMayBe<TSELinuxOptions>[]>;
  service?: 'catalog';
  supplementalGroups?: TMayBe<TMayBe<number>[]>;
  sysctls?: TMayBe<TMayBe<TSysctl>[]>;
};

export default TPodSecurityContext;
