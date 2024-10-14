/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';
import TAlarmNotifierWebhook from './Cluster.TAlarmNotifierWebhook';

export type TField =
  | 'additionalProperties'
  | 'alarmTypeIds'
  | 'alarms'
  | 'ancestors'
  | 'category'
  | 'channelId'
  | 'channelName'
  | 'createdBy'
  | 'createdOn'
  | 'email'
  | 'enabled'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'name'
  | 'parent'
  | 'parent'
  | 'scope'
  | 'service'
  | 'severity'
  | 'slackId'
  | 'tag'
  | 'type'
  | 'uri'
  | 'webhookConfig';

export type TAlarmNotifier_Type = 'email' | 'webhook' | 'serviceNow' | 'slack';

type TAlarmNotifier = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarmTypeIds?: TMayBe<TMayBe<TModelBase>[]>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  category?: TMayBe<string>;
  channelId?: TMayBe<string>;
  channelName?: TMayBe<string>;
  email?: TMayBe<string>;
  enabled?: TMayBe<boolean>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'AlarmNotifier';
  name?: TMayBe<string>;
  parent?: TMayBe<TModelBase>;
  scope?: TMayBe<TModelBase>;
  service?: 'cluster';
  severity?: TMayBe<string>;
  slackId?: TMayBe<TModelBase>;
  tag?: TMayBe<string>;
  type?: TMayBe<TAlarmNotifier_Type>;
  webhookConfig?: TMayBe<TMayBe<TAlarmNotifierWebhook>[]>;
};

export default TAlarmNotifier;
