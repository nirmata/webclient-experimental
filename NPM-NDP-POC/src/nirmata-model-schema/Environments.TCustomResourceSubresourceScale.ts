/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TCustomResourceSubresourceStatus from './Environments.TCustomResourceSubresourceStatus';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labelSelectorPath'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'specReplicasPath'
  | 'status'
  | 'statusReplicasPath'
  | 'uri';

type TCustomResourceSubresourceScale = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  labelSelectorPath?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CustomResourceSubresourceScale';
  parent?: TMayBe<TModelBase>;
  service?: 'environments';
  specReplicasPath?: TMayBe<string>;
  status?: TMayBe<TMayBe<TCustomResourceSubresourceStatus>[]>;
  statusReplicasPath?: TMayBe<string>;
};

export default TCustomResourceSubresourceScale;
