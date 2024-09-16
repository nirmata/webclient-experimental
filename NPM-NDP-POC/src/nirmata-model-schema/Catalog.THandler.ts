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
  | 'httpGet'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'service'
  | 'tcpSocket'
  | 'uri';

type THandler = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  exec?: TMayBe<TMayBe<TExecAction>[]>;
  httpGet?: TMayBe<TMayBe<THTTPGetAction>[]>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'Handler';
  parent?: TMayBe<TModelBase>;
  service?: 'catalog';
  tcpSocket?: TMayBe<TMayBe<TTCPSocketAction>[]>;
};

export default THandler;
