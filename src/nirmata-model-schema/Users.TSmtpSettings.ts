/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';

export type TField =
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'createdBy'
  | 'createdOn'
  | 'fromEmailAddress'
  | 'id'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'parent'
  | 'parent'
  | 'password'
  | 'serverAddress'
  | 'serverPort'
  | 'service'
  | 'transport'
  | 'uri'
  | 'username';

export type TSmtpSettings_Transport = 'SMTP' | 'SMTPS' | 'SMTP_TLS';

type TSmtpSettings = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<unknown>[]>;
  fromEmailAddress?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'SmtpSettings';
  parent?: TMayBe<TModelBase>;
  password?: TMayBe<string>;
  serverAddress?: TMayBe<string>;
  serverPort?: TMayBe<number>;
  service?: 'users';
  transport?: TMayBe<TSmtpSettings_Transport>;
  username?: TMayBe<string>;
};

export default TSmtpSettings;
