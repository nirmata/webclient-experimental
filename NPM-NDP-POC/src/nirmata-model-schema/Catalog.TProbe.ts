/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Catalog.TAlarm';
import TExecAction from './Catalog.TExecAction';
import THTTPGetAction from './Catalog.THTTPGetAction';
import TTCPSocketAction from './Catalog.TTCPSocketAction';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'exec'
  | 'failureThreshold'
  | 'httpGet'
  | 'id'
  | 'initialDelaySeconds'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'periodSeconds'
  | 'service'
  | 'successThreshold'
  | 'tcpSocket'
  | 'timeoutSeconds'
  | 'uri';

type TProbe = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  exec?: TMayBe<TMayBe<TExecAction>[]>;
  failureThreshold?: TMayBe<number>;
  httpGet?: TMayBe<TMayBe<THTTPGetAction>[]>;
  initialDelaySeconds?: TMayBe<number>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Probe';
  parent?: TMayBe<TModelBase>;
  periodSeconds?: TMayBe<number>;
  service?: 'catalog';
  successThreshold?: TMayBe<number>;
  tcpSocket?: TMayBe<TMayBe<TTCPSocketAction>[]>;
  timeoutSeconds?: TMayBe<number>;
};

export default TProbe;
