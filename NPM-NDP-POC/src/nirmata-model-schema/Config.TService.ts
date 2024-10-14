/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TServiceSpec from './Config.TServiceSpec';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'containerType'
  | 'createdBy'
  | 'createdOn'
  | 'dependsOn'
  | 'desiredServices'
  | 'gatewayApplication'
  | 'id'
  | 'imageRepository'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'requiredBy'
  | 'service'
  | 'serviceAffinityRules'
  | 'serviceScalingRules'
  | 'serviceSpec'
  | 'tag'
  | 'type'
  | 'uri';

export type TService_Type = 'stateless' | 'stateful';

type TService = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  imageRepository?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Service';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  service?: 'config';
  serviceSpec?: TMayBe<TMayBe<TServiceSpec>[]>;
  tag?: TMayBe<string>;
  type?: TMayBe<TService_Type>;
};

export default TService;
