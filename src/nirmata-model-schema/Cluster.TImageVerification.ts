/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';
import TModelBase from './TModelBase';
import TAlarm from './Cluster.TAlarm';

export type TField =
  | 'additionalExtensions'
  | 'additionalProperties'
  | 'alarms'
  | 'ancestors'
  | 'annotations'
  | 'attestations'
  | 'attestors'
  | 'createdBy'
  | 'createdOn'
  | 'id'
  | 'image'
  | 'imageReferences'
  | 'issuer'
  | 'key'
  | 'labels'
  | 'modelIndex'
  | 'modifiedBy'
  | 'modifiedOn'
  | 'mutateDigest'
  | 'parent'
  | 'parent'
  | 'repository'
  | 'required'
  | 'roots'
  | 'service'
  | 'subject'
  | 'uri'
  | 'verifyDigest';

type TImageVerification = Omit<TModelBase, 'service' | 'modelIndex'> & {
  additionalExtensions?: TMayBe<object>;
  additionalProperties?: TMayBe<Record<string, TMayBe<string | number | boolean | object>>>;
  alarms?: TMayBe<TMayBe<TAlarm>[]>;
  annotations?: TMayBe<object>;
  attestations?: TMayBe<object>;
  attestors?: TMayBe<object>;
  image?: TMayBe<string>;
  imageReferences?: TMayBe<object>;
  issuer?: TMayBe<string>;
  key?: TMayBe<string>;
  labels?: TMayBe<Record<string, TMayBe<string>>>;
  modelIndex?: 'ImageVerification';
  mutateDigest?: TMayBe<boolean>;
  parent?: TMayBe<TModelBase>;
  repository?: TMayBe<string>;
  required?: TMayBe<boolean>;
  roots?: TMayBe<string>;
  service?: 'cluster';
  subject?: TMayBe<string>;
  verifyDigest?: TMayBe<boolean>;
};

export default TImageVerification;
