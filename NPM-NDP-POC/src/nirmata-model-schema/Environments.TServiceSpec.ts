/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Environments.TAlarm';
import TSessionAffinityConfig from './Environments.TSessionAffinityConfig';
import TServicePort from './Environments.TServicePort';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'clusterIP'
  | 'createdBy'
  | 'createdOn'
  | 'dnsName'
  | 'externalIPs'
  | 'externalName'
  | 'externalTrafficPolicy'
  | 'healthCheckNodePort'
  | 'id'
  | 'labels'
  | 'loadBalancerIP'
  | 'loadBalancerSourceRanges'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'ports'
  | 'publishNotReadyAddresses'
  | 'selector'
  | 'service'
  | 'sessionAffinity'
  | 'sessionAffinityConfig'
  | 'type'
  | 'uri';

export type TServiceSpec_Type = 'ClusterIP' | 'ExternalName' | 'NodePort' | 'LoadBalancer';

type TServiceSpec = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  clusterIP?: TMayBe<string>;
  dnsName?: TMayBe<string>;
  externalIPs?: TMayBe<TMayBe<string>[]>;
  externalName?: TMayBe<string>;
  externalTrafficPolicy?: TMayBe<string>;
  healthCheckNodePort?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  loadBalancerIP?: TMayBe<string>;
  loadBalancerSourceRanges?: TMayBe<TMayBe<string>[]>;
  modelIndex?: 'ServiceSpec';
  parent?: TMayBe<TModelBase>;
  ports?: TMayBe<TMayBe<TServicePort>[]>;
  publishNotReadyAddresses?: TMayBe<boolean>;
  selector?: TMayBe<Record<string, string>>;
  service?: 'environments';
  sessionAffinity?: TMayBe<string>;
  sessionAffinityConfig?: TMayBe<TMayBe<TSessionAffinityConfig>[]>;
  type?: TMayBe<TServiceSpec_Type>;
};

export default TServiceSpec;
