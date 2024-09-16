/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'controllerPublishSecretRef'
  | 'createdBy'
  | 'createdOn'
  | 'driver'
  | 'fsType'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'nodePublishSecretRef'
  | 'nodeStageSecretRef'
  | 'parent'
  | 'parent'
  | 'readOnly'
  | 'service'
  | 'uri'
  | 'volumeAttributes'
  | 'volumeHandle';

type TCsiVolumeSource = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  controllerPublishSecretRef?: TMayBe<object>;
  driver?: TMayBe<string>;
  fsType?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CsiVolumeSource';
  nodePublishSecretRef?: TMayBe<object>;
  nodeStageSecretRef?: TMayBe<object>;
  parent?: TMayBe<TModelBase>;
  readOnly?: TMayBe<boolean>;
  service?: 'catalog';
  volumeAttributes?: TMayBe<Record<string, TMayBe<string>>>;
  volumeHandle?: TMayBe<string>;
};

export default TCsiVolumeSource;
