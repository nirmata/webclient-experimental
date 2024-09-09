/* Nirmata */
/* Auto-generated schema definition! */

import TMayBe from './TMayBe';

import TObjectMetadataData from './Cluster.TObjectMetadataData';
import TModelBase from './TModelBase';

export type TField =
  | 'count'
  | 'firstSeen'
  | 'involvedObject'
  | 'lastSeen'
  | 'message'
  | 'metadata'
  | 'reason'
  | 'source'
  | 'type';

type TEventDataData = {
  count?: TMayBe<number>;
  firstSeen?: TMayBe<number>;
  involvedObject?: TMayBe<TModelBase>;
  lastSeen?: TMayBe<number>;
  message?: TMayBe<string>;
  metadata?: TMayBe<TMayBe<TObjectMetadataData>>;
  reason?: TMayBe<string>;
  service?: 'cluster';
  source?: TMayBe<string>;
  type?: TMayBe<string>;
};

export default TEventDataData;
