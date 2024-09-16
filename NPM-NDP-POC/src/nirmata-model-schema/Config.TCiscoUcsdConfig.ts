/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Config.TAlarm';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createHostRequests'
  | 'createHostWorkflow'
  | 'createHostWorkflowParams'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'uri';

type TCiscoUcsdConfig = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  createHostRequests?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  createHostWorkflow?: TMayBe<string>;
  createHostWorkflowParams?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'CiscoUcsdConfig';
  parent?: TMayBe<TModelBase>;
  service?: 'config';
};

export default TCiscoUcsdConfig;
