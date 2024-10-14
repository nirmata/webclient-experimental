/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TPoliciesHealth from './Cluster.TPoliciesHealth';
import TPolicyHealthSummary from './Cluster.TPolicyHealthSummary';
import THealthCondition from './Cluster.THealthCondition';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'kyvernoHealthConditions'
  | 'kyvernoNamespace'
  | 'kyvernoVersion'
  | 'labels'
  | 'license'
  | 'migrationRequired'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'policiesHealth'
  | 'policyHealthSummary'
  | 'service'
  | 'uri';

export type TPolicyHealthDetails_License = 'N4K';

type TPolicyHealthDetails = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  kyvernoHealthConditions?: TMayBe<TMayBe<THealthCondition>[]>;
  kyvernoNamespace?: TMayBe<string>;
  kyvernoVersion?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  license?: TMayBe<TPolicyHealthDetails_License>;
  migrationRequired?: TMayBe<boolean>;
  modelIndex?: 'PolicyHealthDetails';
  parent?: TMayBe<TModelBase>;
  policiesHealth?: TMayBe<TMayBe<TPoliciesHealth>[]>;
  policyHealthSummary?: TMayBe<TMayBe<TPolicyHealthSummary>[]>;
  service?: 'cluster';
};

export default TPolicyHealthDetails;
