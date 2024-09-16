/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';
import TService from './Config.TService';
import TWebHook from './Config.TWebHook';
import TServiceAffinityRule from './Config.TServiceAffinityRule';
import TServiceScalingRule from './Config.TServiceScalingRule';
import TGatewayPolicy from './Config.TGatewayPolicy';
import TEnvironmentVariable from './Config.TEnvironmentVariable';
import TRoutingPolicy from './Config.TRoutingPolicy';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'defaultRouteAction'
  | 'dependsOn'
  | 'description'
  | 'environmentVariables'
  | 'environments'
  | 'gateway'
  | 'gatewayPolicy'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'networkPolicy'
  | 'orchestrator'
  | 'parent'
  | 'parent'
  | 'requiredBy'
  | 'routingPolicy'
  | 'service'
  | 'serviceAffinityRules'
  | 'serviceScalingRules'
  | 'services'
  | 'type'
  | 'uri'
  | 'webHooks';

export type TApplication_DefaultRouteAction = 'allow' | 'deny';

export type TApplication_Orchestrator = 'nirmata' | 'kubernetes';

export type TApplication_Type = 'application' | 'infrastructure';

type TApplication = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  defaultRouteAction?: TMayBe<TApplication_DefaultRouteAction>;
  description?: TMayBe<string>;
  environmentVariables?: TMayBe<TMayBe<TEnvironmentVariable>[]>;
  gatewayPolicy?: TMayBe<TMayBe<TGatewayPolicy>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Application';
  name?: TMayBe<string>;
  orchestrator?: TMayBe<TApplication_Orchestrator>;
  parent?: TMayBe<TModelBase>;
  routingPolicy?: TMayBe<TMayBe<TRoutingPolicy>[]>;
  service?: 'config';
  serviceAffinityRules?: TMayBe<TMayBe<TServiceAffinityRule>[]>;
  serviceScalingRules?: TMayBe<TMayBe<TServiceScalingRule>[]>;
  services?: TMayBe<TMayBe<TService>[]>;
  type?: TMayBe<TApplication_Type>;
  webHooks?: TMayBe<TMayBe<TWebHook>[]>;
};

export default TApplication;
